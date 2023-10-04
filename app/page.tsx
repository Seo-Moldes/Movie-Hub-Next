import Image from "next/image";
import styles from "./page.module.css";
import { FetchApi, FetchPublicApi } from "@/service/movies.service";
import { Card } from "@/components/card/Card";
import { MoviesType } from "@/types/movies.types";

export default async function Home() {
  const movies = await FetchPublicApi();

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Public Movies</h1>
      <div className={styles.mainDiv}>
        {movies.map((movie: MoviesType) => (
          <Card
            id={movie.id}
            title={movie.title}
            score={movie.score}
            year={movie.year}
            country={movie.country}
            imageId={movie.imageId}
            genres={movie.genres}
            genresArray={movie.genresArray}
            createdAt={movie.createdAt}
            updatedAt={movie.updatedAt}
            usersId={movie.usersId}
            imageUrl={movie.imageUrl}
            isPublic={true}
          />
        ))}
      </div>
    </main>
  );
}
