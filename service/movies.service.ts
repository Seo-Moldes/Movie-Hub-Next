import { MoviesType } from "@/types/movies.types"

export const createMovie = async (url: string, data: any) => {

    const formData = new FormData()

    formData.append("title", data.Name)
    formData.append("genres", data.Genre)
    formData.append("year", data.Year)
    formData.append("score", data.Score)
    formData.append("image", data.Image[0])
    formData.append("description", data.Description)

    try {

        const response = await fetch(url, {

            method: "POST", cache: "no-store",
            body: formData
        })

        if (response.ok) {

        } else {
            throw new Error("No response");
        }

    } catch (error) {

    }
}

export const deleteMovie = async (url: string) => {

    try {

        const response = await fetch(`http://localhost:3000/movies/${url}`, {

            method: "DELETE", cache: "no-store",
        })

        if (response.ok) {

        } else {
            throw new Error("No response");
        }

    } catch (error) {

    }
}

export const editMovie = async (id: string, data: any) => {

    const url = "http://localhost:3000/movies"

    const formData = new FormData();

    formData.append("title", data.title)
    formData.append("genres", data.genres)
    formData.append("year", data.year)
    formData.append("score", data.score)
    formData.append("description", data.description)

    try {

        const response = await fetch(`${url}/${id}`, {

            method: "PUT", cache: "no-store",
            body: formData
        })

        if (response.ok) {

        } else {
            throw new Error("No response");
        }

    } catch (error) {

    }
}

export const FetchApi = async () => {

    try {
        const response = await fetch("http://localhost:3000/movies", {
            method: "GET", cache: "no-store",

        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const GetMovieById = async (id: string) => {

    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: "GET", cache: "no-store",

        });

        if (response.ok) {
            return await response.json() as MoviesType;

        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const postApi = async (url: string, data: any, getToken: any) => {

    const token = await getToken();

    try {

        const response = await fetch(url, {

            method: "POST", cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })

        if (response.ok) {

        } else {
            throw new Error("No response");

        }

    } catch (error) {

    }
}

export const FetchPublicApi = async () => {

    try {
        const response = await fetch("http://localhost:3000/publicmovies");

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Network response was not ok.");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};
