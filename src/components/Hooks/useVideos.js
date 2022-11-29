import { useEffect, useState } from "react";
import YoutubeApi from "../API/YoutubeApi";

const useVideos = (defaultSearchTerm) => {
  // Inizializiamo lo stato per ricevere l'array di video che fetchamo da youtube
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Creiamo la richiesta asincrona all'API di youtube in base alla query 'term'
  // La racchiudiamo nella variabbile response così che possiamo accedere all'array di video che fetchamo da youtube
  const search = async (term) => {
    const response = await YoutubeApi.get("/search", {
      params: {
        q: term,
      },
    });
  

    // Settiamo lo stato dell'array di video da mostrare sulla pagina con i video fetchati da youtube
    setVideos(response.data.items);
  };

    //JS
    /* return { videos, search } */
    
    //React
    return [videos, search];
};
export default useVideos;
