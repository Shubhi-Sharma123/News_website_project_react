import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function News(props) {
  let [item, setItem] = useState();
  useEffect(() => {
    let result = axios.get(
      `https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=1ada872bdbdf443a857ddc9b51e770fa`
    );
    //console.log(result);//output- Promise{ <state>: "pending" }
    // to resolve promise we use then() method
    //then() takes callback function like below
    result.then((res) => {
      //console.log(res.data.articles);
      setItem(res.data.articles);
    });
  }, [props.category]);
  //console.log(items);
  return (
    <>
      {item ? (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
          {item.map((pro) => {
            return (
              <NewsItem
                title={pro.title}
                dec={pro.decription}
                idata={pro.urlToImage}
              />
            );
          })}
        </div>
      ) : (
        <p>no data</p>
      )}
    </>
  );
}

export default News;
