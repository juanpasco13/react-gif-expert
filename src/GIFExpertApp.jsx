import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GIFExpertApp = () => {
  const [categories, setCategories] = useState([ "Adventure Time" ]);

  const onAddCategory = (newItem) => {
    if (categories.includes(newItem)) return;
    setCategories((cate) => [newItem, ...cate]);
  };

  return (
    <>
      <h4>GIFExpertApp</h4>
      <AddCategory onNewCategori={(value) => onAddCategory(value)} />
      {categories.map((category) => (<GifGrid category={category} key={ category } /> ))}
    </>
  );
};
