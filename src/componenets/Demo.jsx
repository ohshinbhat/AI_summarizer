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
      <section className="formsection flex flex-col">
        <div className="flex flex-row w-full">
          <form
            className="relative flex flex-row gap-5 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="url"
              placeholder="Enter a URL"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
              className="url-input w-full"
            />
            <button type="submit" className="submit-btn">
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
            <p className="text-white"> not working </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="font-inter text-white">
                  Article <span className="text-white">Summary</span>
                </h2>
                <div className="summary-box">
                  <p className="w-full">{article.summary}</p>
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
