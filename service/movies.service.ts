export const createMovie = async (url: string, data: any) => {

    // const token = await getToken();
    const formData = new FormData()
   
    

    formData.append("title", data.Name)
    formData.append("genres", data.Genre)
    formData.append("year", data.Year)
    formData.append("score", data.Score)
    formData.append("image", data.Image[0])

    try {

        const response = await fetch(url, {

            method: "POST",
            // headers: {

            //     authorization: `Bearer ${token}`,
            // },
            body: formData
        })

        if (response.ok) {

           
        } else {
            throw new Error("No response");
        }

    } catch (error) {
        
    }
}

export const deleteMovie = async (url: string, getToken: any) => {

    const token = await getToken();

    try {

        const response = await fetch(url, {

            method: "DELETE",
            headers: {
                
                authorization: `Bearer ${token}`,
                
            },
        })

        if (response.ok) {


        } else {
            throw new Error("No response");
        }

    } catch (error) {
        
    }
}

export const editMovie = async (url: string, data: any, getToken: any) => {

    const token = await getToken();
    const formData = new FormData();

    formData.append("title", data.title)
    formData.append("genres", data.genres)
    formData.append("year", data.year)
    formData.append("score", data.score)
   
    try {

        const response = await fetch(url, {

            method: "PUT",
            headers: {

                authorization: `Bearer ${token}`,
            },
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
    // const token = await getToken();
    try {
        const response = await fetch( "http://localhost:3000/movies", {
            method: "GET",
            // headers: {
            //     authorization: `Bearer ${token}`
            // },
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

export const postApi = async (url: string, data: any, getToken: any) => {

    const token = await getToken();

    try {

        const response = await fetch(url, {

            method: "POST",
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
        const response = await fetch( "http://localhost:3000/publicmovies");

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
