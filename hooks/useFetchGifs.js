import { useEffect, useState } from "react";
import { getGif } from "../src/helpers/GetGifs";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsloading] = useState(true)
  // Si esta vacio las llaves [] en el segundo parametro de la funcion significa que este solo se
  // Ejecutara cuando cargue por primera vez la pagina 
  useEffect(() => { getGif(category)
    .then( 
        newGifs => {
            setGifs(newGifs); 
            setIsloading(false)
        }
    );
  }, [])
  return {
    gifs, 
    isLoading 
  }
}
