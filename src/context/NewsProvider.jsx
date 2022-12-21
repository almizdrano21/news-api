import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  useEffect(() => {}, [category]);
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const getNews = () => {
    console.log("Obteniendo noticias");
  };
  return (
    <NewsContext.Provider value={{ category, handleChangeCategory }}>
      {children}
    </NewsContext.Provider>
  );
};
export { NewsProvider };
export default NewsContext;
