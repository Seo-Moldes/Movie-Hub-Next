export interface MoviesType {
    id: string;
    title: string;
    score: number;
    year: number;
    imageId: string;
    genres: GenreType[];
    genresArray: string[];
    createdAt: string;
    updatedAt: string;
    usersId: string;
    imageUrl: string;
    isPublic: boolean;
  }
  
  interface GenreType {
    id: string;
    genre: string;
    createdAt: string;
    updatedAt: string;
    moviesId: string[];
  }
  