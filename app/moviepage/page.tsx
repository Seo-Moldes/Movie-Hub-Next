import { getSession } from "@auth0/nextjs-auth0";
import { FetchApi } from "../../service/movies.service";
import { MoviesType } from "@/types/movies.types";
import { Card } from "@/components/card/Card";
import styles from '../page.module.css'


type Props = {};

const HomePage = async (props: Props) => {
  const session = await getSession();
  const movies = await FetchApi();
  console.log(movies)

  return (
    <div className={styles.main}>
      <h2 className={styles.mainTitle}>{session?.user.name}</h2>
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
            isPublic={false}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
