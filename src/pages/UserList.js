import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const UserList = () => {
  const [ListData, setListData] = useState([]);

  useState(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...ListData, res.data]));
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coup de coeur <span>💖</span>
        <div className="result">
          {ListData.length > 0 ? (
            ListData.map((movie) => <Card movie={movie} key={movie.div} />)
          ) : (
            <h2>Aucun coup de coeur pour le moment</h2>
          )}
        </div>
      </h2>
    </div>
  );
};

export default UserList;
