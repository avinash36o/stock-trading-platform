import React from "react";

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data.js";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, idx) => {
          return (
            <li>
              <p>{stock.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;
