"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createMovie } from "@/service/movies.service";
import { useUser } from "@auth0/nextjs-auth0/client";
import styles from "./modal.module.css";
import {useRouter} from "next/navigation";

export const Modal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { register, handleSubmit } = useForm();
const router = useRouter();
  const onsubmit = handleSubmit((data: any) => {
    const url = `http://localhost:3000/movies/${user?.email}`;

    createMovie(url, data);
    router.refresh();
    setIsOpen(!modalIsOpen);
  });

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div className={styles.div_open}>
      {user && (
        <button className={styles.modal__btn_open} onClick={toggleModal}>
          {" "}
          Add{" "}
        </button>
      )}

      {modalIsOpen && (
        <div className={styles.modal_container}>
          <div className={styles.modal_content}>
            <h2>Add Movie</h2>
            <form className={styles.form__modal} onSubmit={onsubmit}>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="formModalName">
                  Movie Name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="formModalName"
                  {...register("Name")}
                />
              </div>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="formModalScore">
                  Movie Score
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="formModalScore"
                  {...register("Score")}
                />
              </div>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="formModalGenre">
                  Movie Genre
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="formModalGenre"
                  {...register("Genre")}
                />
              </div>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="formModalYear">
                  Year
                </label>
                <input
                  className={styles.input}
                  type="text"
                  id="formModalYear"
                  {...register("Year")}
                />
              </div>
              <div className={styles.div}>
                <label className={styles.label} htmlFor="formModalFile">
                  Upload File
                </label>
                <input
                  className={styles.input}
                  type="file"
                  id="formModalFile"
                  {...register("Image")}
                />
              </div>

              <button className={styles.div_add} type="submit">
                Add Movie
              </button>
            </form>
            <div className={styles.btn_close} onClick={toggleModal}>
              Close Modal
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
