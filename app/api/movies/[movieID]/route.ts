// import { NextRequest, NextResponse } from "next/server";
// import { prismaClient as prisma } from '@/config/prismaClient'
// import { convertToType } from "@/config/convertType";


// type Props = {

//   movieID: string

// }

// export async function GET(req: NextRequest, res: Response, { movieID }: Props): Promise<Response> {
//   // const { movieID } = req.params;
//   try {

//     const movie = await prisma.movies.findUnique({
//       where: { id: convertToType(movieID) },
//       include: { genres: true },
//     });

//     if (!movie) {
//       return NextResponse.json("Movie not found", { status: 404 });

//     }

//     return NextResponse.json(movie, { status: 200 });

//   } catch (error) {

//     return NextResponse.json(error, { status: 500 });

//   }
// };

// export async function PUT(req: NextRequest, res: Response, { movieID }: Props): Promise<Response> {
//   // const { movieID } = req.params;
//   let { title, score, year, genres } = req.body;

//   if (typeof title !== "string") title = title.toString();
//   if (typeof year !== "number") year = Number(year);
//   if (typeof score !== "number") score = Number(score);
//   if (!Array.isArray(genres)) genres = [genres];

//   try {
//     const genreIDs: string[] = [];

//     for (const genreName of genres) {
//       let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

//       if (!genre) {
//         genre = await prisma.genres.create({ data: { genre: genreName } });
//       }
//       genreIDs.push(genre.id);
//     }

//     const movieUpdate = await prisma.movies.update({
//       where: { id: convertToType(movieID) },
//       data: {
//         title,
//         score,
//         year,
//         genres: {
//           connect: genreIDs.map((genreID: string) => ({ id: genreID })),
//         },

//       },
//     });

//     return NextResponse.json(movieUpdate, { status: 200 });


//   } catch (error) {

//     return NextResponse.json(error, { status: 500 });

//   }
// };


// export async function DELETE(req: NextRequest, res: Response, { movieID }: Props): Promise<Response> {
//   // const { movieID } = req.params;

//   try {

//     const movie = await prisma.movies.findUnique({
//       where: { id: convertToType(movieID) },
//       include: {
//         users: true,
//       },
//     });

//     if (!movie) {
//       return NextResponse.json("Movie not found", { status: 404 });

//     }

//     const userID = movie.users?.id;

//     if (userID) {

//       await prisma.users.update({
//         where: { id: convertToType(userID) },
//         data: {

//         },
//       });
//     }

//     await prisma.movies.delete({
//       where: { id: convertToType(movieID) },
//     });

//     return NextResponse.json("Deleted movie by ID", { status: 200 });


//   } catch (error) {

//     return NextResponse.json(error, { status: 500 });

//   }
// };
