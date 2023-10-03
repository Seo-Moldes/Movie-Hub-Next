// import { NextRequest, NextResponse } from "next/server";
// import { prismaClient as prisma } from '@/config/prismaClient';
// import { convertToType } from "@/config/convertType";

// type Props = {

// genreID: string

// }

// export async function GET(req: NextRequest, res: Response, {genreID}: Props): Promise<Response> {
//     // const { genreID } = req.params;
//     try {

//         const genre = await prisma.genres.findUnique({
//             where: { id: convertToType(genreID) }
//         });
//         return NextResponse.json({ status: "Success", msg: "Get Genre By Id Succesfully", genre });
//     } catch (error) {
//         return NextResponse.json(error, {status:500});
//     }
// };

// export async function PUT (req: NextRequest, res: Response, {genreID}: Props): Promise<Response> {
//     // const { genreID } = req.params;
//     const { genre } = req.body;
//     try {

//         if (!genre) {
//             return NextResponse.json('Genres not found', {status:404});
           
//         }
//         const genreFound = await prisma.genres.update({
//             where: {
//                 id: convertToType(genreID)
//             },
//             data: { genre }
//         })

//         return NextResponse.json(genreFound, {status:200});
        
//     } catch (error) {
//         return NextResponse.json(error, {status:500});
        
//     }
// };

// export async function DELETE (req: NextRequest, res: Response, {genreID}: Props): Promise<Response> {
//     // const { genreID } = req.params;
//     try {

//         const deleteGenre = await prisma.genres.delete({
//             where: { id: convertToType(genreID) }
//         })

//         return NextResponse.json(deleteGenre, {status:200});

//     } catch (error) {
        
//         return NextResponse.json(error, {status:500});
        
//     }
// };
