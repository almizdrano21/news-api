import { useState, useEffect, createContext } from "react";
import axios from "axios";
const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  useEffect(() => {
    const checkAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=100&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      console.log(data);
      setNews(data.articles);
    };
    checkAPI();
  }, [category]);
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <NewsContext.Provider value={{ category, handleChangeCategory, news }}>
      {children}
    </NewsContext.Provider>
  );
};
export { NewsProvider };
export default NewsContext;
