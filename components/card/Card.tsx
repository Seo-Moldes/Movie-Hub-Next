"use client"
import styles from "./card.module.css";
import { ModalUpdate } from "../modalUpdate/ModalUpdate";
import { useUser } from "@auth0/nextjs-auth0/client";
import { MoviesType } from "@/types/movies.types";
import { deleteMovie } from "@/service/movies.service";
import { useRouter } from "next/navigation";
import async from '../../app/page';


export const Card = ({
  id,
  title,
  imageUrl,
  imageId,
  genresArray,
  genres,
  score,
  year,
  isPublic
}: MoviesType) => {
  
  const {user} = useUser();
  const isPublicMovie = isPublic === true;
 const router = useRouter();

 const handleDeleteById = async (id:string) => {

deleteMovie(id);
router.refresh();

 }


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
        {!isPublicMovie && (
          <>
          <ModalUpdate
          
            id={id}
            title={title}
            score={score}
            year={year}
            genres={genres}
            imageId={imageId}
            imageUrl={imageUrl}
          />
          
          <button className={styles.button__delete} onClick={()=>handleDeleteById(id)}>
            Delete
          </button>
          </>
        )}
       
      </div>
    </div>
  );
};
