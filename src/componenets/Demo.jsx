import { useState, useEffect } from "react";
import React from "react";
import link from "../assets/link.svg";
import loader from "../assets/loader.svg";
import "../index.css";
import { useLazyGetSummaryQuery } from "../services/article";
const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      console.log("received");

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  return (
    <>
      <section className="formsection flex flex-col items-center justify-center ">
        <div className="flex flex-row w-full items-center justify-center">
          <form
            className="relative flex flex-row gap-5 justify-center items-center text-center"
            onSubmit={handleSubmit}
          >
            <input
              type="url"
              placeholder="Enter a URL"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="url-input w-[500px]"
            />
            <button type="submit" className="submit-btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-3xl text-sm px-5 py-3 text-center me-2 ">
              Submit
            </button>
          </form>
        </div>
        <div>
          {isFetching ? (
            <img
              src={loader}
              alt="loader"
              className="w-20 h-20 object-contain"
            />
          ) : error ? (
            <p className="font-bold text-red-600 pt-5 text-3xl"> Sorry, the article is not scrapable, try another link!</p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3 border-2 border-white backdrop-blur-lg bg-white bg-opacity-40 rounded-xl mt-10">
                <h2 className="font-inter text-slate-500 text-center font-bold text-[3rem]">
                  Article <span className="">Summary</span>
                </h2>
                <div className="summary-box px-11 pb-10">
                  <p className="w-full text-black text-justify">{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Demo;
