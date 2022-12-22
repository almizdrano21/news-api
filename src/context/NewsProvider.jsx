import { useState, useEffect, createContext, useCallback } from "react";
import axios from "axios";
const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const checkAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNews(data.articles);
      setAmount(data.totalResults);
    };
    checkAPI();
  }, [category, page]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangePage = (e, valor) => {
    console.log(e.target.textContent);
    setPage(e.target.textContent);
  };
  return (
    <NewsContext.Provider
      value={{
        category,
        handleChangeCategory,
        news,
        page,
        amount,
        setPage,
        handleChangePage,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export { NewsProvider };
export default NewsContext;
