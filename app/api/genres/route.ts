// import {prismaClient as prisma} from '@/config/prismaClient'
// import { NextResponse } from 'next/server';


// export const createGenre = async (req: Request, res: Response): Promise<Response> => {
//   const { genre } = req.body;
//   try {

//     const newGenre = await prisma.genres.create({
//       data: { genre }
//     })
//     return NextResponse.json("Create Succesfully");
//   } catch (error) {
//     return NextResponse.json(error, {status:500});
//   }
// };



// export const getAllGenre = async (req: Request, res: Response): Promise<Response> => {
//   try {

//     const genre = await prisma.genres.findMany()
//     return NextResponse.json(genre, {status:200})
//   } catch (error) {
//     return NextResponse.json(error, {status:500});
//   }
// };


