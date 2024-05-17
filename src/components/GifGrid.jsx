import { GifItem } from "./GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);
  console.log(isLoading, gifs);
  return (
    <>
      <div>
        <h3>{category}</h3>
        { isLoading && <h3>Cargando...</h3>}
        <div className="card-grid">
          {gifs.map((gif) => (
            <GifItem key={gif.id} {...gif} />
          ))}
        </div>
      </div>
    </>
  );
};
