import { NextRequest, NextResponse } from "next/server";
import {prismaClient as prisma} from '@/config/prismaClient'

type Props = {

userID: string

}

export async function GET (req: NextRequest, res: Response, {userID}: Props) {
   
    try {
        const userById = await prisma.users.findUnique({
            where: { email: userID },
            include: {
                movies: {
                    include: {
                        genres: true
                    }
                }
            }
        })

        return NextResponse.json(userById, {status:200});
    } catch (error) {
        return NextResponse.json(error, {status:500});
    }
};

export async function PUT (req: NextRequest, res: Response, {userID}: Props) {
    
    const { name, email } = req.body;

    try {
        const user = await prisma.users.update({
            where: { id: userID },
            data: { name, email }
        });


        return NextResponse.json(user,{ status:200 });
    } catch (error) {
        return NextResponse.json(error, {status:500});
    }
};

export async function DELETE (req: NextRequest, res: Response, {userID}: Props) {
   
    try {

        const user = await prisma.users.findUnique({
            where: { id: userID },
            include: {
                movies: {
                    include: {
                        genres: true,
                    },
                },
            },
        });

        if (!user) {
            return NextResponse.json({ status: 404});
        }

        for (const movie of user.movies) {

            await prisma.genres.updateMany({
                where: {
                    moviesId: movie.id,
                },
                data: {
                    moviesId: null,
                },
            });

            await prisma.movies.delete({
                where: { id: movie.id },
            });
        }
        await prisma.users.delete({
            where: { id: userID },
        });

        return NextResponse.json({ status: 200 });
    } catch (error) {
        return NextResponse.json(error, {status:500});
    }
};




