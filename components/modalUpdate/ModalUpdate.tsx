"use client"
import { editMovie } from "@/service/movies.service";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./modalUpdate.module.css"
import { useRouter } from "next/navigation";


interface MoviesType  {
  id: string;
  title: string;
  score: number;
  year: number;
  genres: GenreType[];
  imageId: string;
  imageUrl: string;
  description: string;
} 


interface GenreType {
  id: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  moviesId: string[];
}



export const ModalUpdate = ({id, title, score, year, genres, description }: MoviesType) => {

const router = useRouter();


  const [modalIsOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const {register, handleSubmit} = useForm({defaultValues:{title, score, year, genres, description}});


const onsubmit = handleSubmit( (data: any) => {

  console.log(data)
  console.log(id)

  
  editMovie(id, data )

  router.refresh();
  
  setIsOpen(!modalIsOpen);
})



  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (

    <div className={styles.modal}>
      {user && (<button className={styles.modal__btn_open} onClick={toggleModal}> Modify </button>)}

   
      {modalIsOpen && (
        <div className={styles.modal_container} >
          <div className={styles.modal_content}>
            <h2>Add Movie</h2>
            <form className={styles.form__modal} onSubmit={onsubmit}>
              <div className={styles.form__modal_div} >
                <label className={styles.label} htmlFor="formModalName">Movie Name</label>
                <input className={styles.input} type="text" id="formModalName" {...register("title")} />
                
              </div>
              <div className={styles.form__modal_div}>
                <label className={styles.label} htmlFor="formModalScore">Movie Score</label>
                <input className={styles.input} type="number" id="formModalScore" {...register("score")}    />
              </div>
              <div className={styles.form__modal_div}>
                <label className={styles.label} htmlFor="formModalGenre">Movie Genre</label>
                <input className={styles.input} type="text" id="formModalGenre" {...register("genres")} />
              </div>
              <div className={styles.form__modal_div}>
                <label className={styles.label} htmlFor="formModalYear">Year</label>
                <input className={styles.input} type="number" id="formModalYear" {...register("year")}  />
              </div>
              <div className={styles.form__modal_div}>
                <label className={styles.label} htmlFor="formModalDescription">Description</label>
                <textarea className={styles.input} id="formModalDescription" {...register("description")}  />
              </div>
            
              <button className={styles.form__modal_btnAddMovie}  type="submit">Modify</button>
          
            </form>
            <button className={styles.button_close} onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}


    </div>
  )
}