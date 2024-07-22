import react from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  console.log(watchlist);
  return (
    <div className="watchlist-container">
      <h1>Your Watchlist</h1>
      {watchlist.length === 0 ? (
        <div className="empty-watchlist-message">
          <h1>Your watchlist is empty.</h1>
          <p>Add movies to your watchlist to see them here!</p>
        </div>
      ) : (
        <div className="watchlist">
          {watchlist.map((id) => {
            const movie = movies.find((movie) => movie.id === id);
            return (
              <MovieCard
                key={id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
                isWatchlisted={true}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
