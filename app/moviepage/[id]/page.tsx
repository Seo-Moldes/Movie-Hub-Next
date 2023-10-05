import { GetMovieById } from "@/service/movies.service";
import styles from "./detaills.module.css"

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const movieById = await GetMovieById(params.id);
  console.log(movieById);

  return (
    <div className={styles.main_div}>
      <div className={styles.main_div1}>
        <img src={movieById?.imageUrl} className={styles.main_div_image} />
      </div>
      <div className={styles.main_div2}>
        <h2 className={styles.main_div_title} >{movieById?.title}</h2>
      </div>
      <div className={styles.main_div3}>
        <h3 className={styles.main_div_subtitle}>{movieById?.genresArray.join(", ")}</h3>
        <h4 className={styles.main_div_subtitle2}>{movieById?.year}</h4>
      </div>
      <div className={styles.main_div4}>
        <p className={styles.main_description}>{movieById?.description}</p>
      </div>

    </div>
  );
};

export default page;
