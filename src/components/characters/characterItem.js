import React from "react";
import Tooltip from "@mui/material/Tooltip";

const characterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt={item.original_title}
          />
        </div>
        <div className="card-back">
          <h1>{item.original_title}</h1>
          <ul>
            {/* <li>
              <strong>Overview:</strong>{" "}
              <Tooltip title={item.overview}>
                <p style={{ textOverflow: "ellipsis" }}>{item.overview}</p>
              </Tooltip>
            </li> */}
            <li>
              <strong>Language:</strong> {item.original_language.toUpperCase()}
            </li>
            <li>
              <strong>Adult Content:</strong> {item.adult ? "Yes" : "No"}
            </li>
            <li>
              <strong>Release Date:</strong> {item.release_date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default characterItem;
