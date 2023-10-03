// import { deleteMovie } from "../../api/deleteMovie";
// import { ModalUpdate } from "../modalUpdate/ModalUpdate";
// import { CardStyles } from "./card.styles"

// import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";
import styles from "./card.module.css";
// import { ModalUpdate } from "../modalUpdate/ModalUpdate";
import Image from "next/image";


export interface MoviesType {
  id: string;
  title: string;
  score: number;
  year: number;
  country: string;
  imageId: string;
  genres: GenreType[];
  genresArray: string[];
  createdAt: string;
  updatedAt: string;
  usersId: string;
  imageUrl: string;
}

interface GenreType {
  id: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  moviesId: string[];
}

export const Card = ({
  id,
  title,
  imageUrl,
  genresArray,
  score,
  year,
}: MoviesType) => {
  // const url = `http://localhost:3000/movies/${props.id}`;

  const session = getSession();

  // const handleDelete = async () => {

  //   await deleteMovie(url, getAccessTokenSilently)
  //   props.fetchData()

  // }

  return (
    <div className={styles.card}>
      <div className={styles.card__div1}>
        <img className={styles.card__div1_img} src={imageUrl} alt={title} />
      </div>

      <div className={styles.card__div2}>
        <h2 className={styles.title_h2}>{title}</h2>
        <h3 className={styles.genre_h3}> {genresArray.join(", ")} </h3>
        <h4 className={styles.year_h4}>Year - {year}</h4>
        <h4 className={styles.score_h4}>Score - {score}</h4>
      </div>

      <div className={styles.card__div3}>
        {/* {session && <ModalUpdate id={props.id} title={props.title} score={props.score} year={props.year} genres={props.genres[0] ? props.genres[props.genres.length - 1].genre : ''} imageId={props.imageId} imageUrl={props.imageUrl} />}
        {session && <button className="button_delete" onClick={handleDelete}>Delete</button>} */}
      </div>
    </div>
  );
};
