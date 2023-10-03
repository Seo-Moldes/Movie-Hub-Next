// import {prismaClient as prisma} from '@/config/prismaClient'
// import { NextResponse } from 'next/server';


// export const createMovie = async (req: Request, res: Response): Promise<Response> => {
 

//   try {

//     let { title, year, score, genres } = req.body;
//     // const { userID } = req.params;
    
//     if (typeof title !== "string") title = title.toString();
//     if (typeof year !== "number") year = Number(year);
//     if (typeof score !== "number") score = Number(score);
//     if (!Array.isArray(genres)) genres = [genres];

//     if ((req.files as any)?.image) {

//       const upload = await uploadImage((req.files as any).image.tempFilePath);
//       await fs.unlink((req.files as any).image.tempFilePath)

//       const genreIDs: string[] = [];

//       for (const genreName of genres) {
//         let genre = await prisma.genres.findUnique({ where: { genre: genreName } });

//         if (!genre) {
//           genre = await prisma.genres.create({ data: { genre: genreName } });
//         }
//         genreIDs.push(genre.id);
//       }

//       const newMovie = await prisma.movies.create({
//         data: {
//           title,
//           year,
//           score,

//           imageUrl: upload.secure_url,
//           imageId: upload.public_id,

//           genres: {
//             connect: genreIDs.map((genreID: string) => ({ id: genreID })),
//           },
//           users: {
//             connect: {
//               email: userID,
//             },
//           },
//           genresArray: genres,
//         },
//         include: {
//           genres: true,
//           users: true
//         },

//       });

//       await prisma.users.update({
//         where: { email: userID },
//         data: {
//           moviesArray: { push: newMovie.title }
//         }
//       })

//       return NextResponse.json({ status: "Success", message: "Movie created", newMovie })
//     };
//     return NextResponse.json("File not found")
    

//   } catch (error) {
//     return NextResponse.json(error, {status:500});

//   }
// };



// export const getAllMovies = async (req: Request, res: Response): Promise<Response> => {
//   try {

//     const movies = await prisma.movies.findMany({
//       include: {
//         genres: true,
//       },
//     });

//     return NextResponse.json(movies, {status:200});

//   } catch (error) {
//     return NextResponse.json(error, {status:500});
    
//   }
// };

