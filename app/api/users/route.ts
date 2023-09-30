import {prismaClient as prisma} from '@/config/prismaClient'
import { NextResponse } from 'next/server';


export const createUser = async (req: Request, res: Response): Promise<Response> => {

    try {
    const { name, email } = req.body;


        const user = await prisma.users.findFirst({
            where: {
                email: email
            }
        })
        if (user) {
            
            return NextResponse.json('User already exists')
        }

        const newUser = await prisma.users.create({
            data: { email: email, name: name},
        });

        return NextResponse.json(newUser, {status:201});
    } catch (error) {
        return NextResponse.json(error);
    }
};


export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
    try {

        const allUsers = await prisma.users.findMany({
            include: {
                movies: {
                    include: {
                        genres: true
                    }
                }
            }
        });

        return NextResponse.json( allUsers, {status:200} );
    } catch (error) {
        return NextResponse.json(error, {status:500});
    }
};

