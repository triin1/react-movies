import { movies } from "../../data.js"
import "./MovieCard.css"
import { Link } from "react-router-dom";

function MovieCard() {
    return (
        <>
        {movies.map(m =>
            <Link to={`/movies/${m.title}`}>
            <div style={{backgroundImage: `url(${m.posterPath})`, backgroundSize: "cover", minHeight: "55vh", maxWidth: "30vw"}} className="background">
                <p>{m.title}</p> 
                <p>Released: {m.releaseDate}</p>
            </div>
            </Link>
        )};
        </>
    )   
}

export default MovieCard