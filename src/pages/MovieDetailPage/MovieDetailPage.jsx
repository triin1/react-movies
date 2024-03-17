import { useParams } from "react-router-dom"
import { movies } from "../../data";

function MovieDetailPage() {
    const { movieName } = useParams();

    const movie = movies.find(m => m.title === movieName);

    return (
        <div key={ movieName }>
            <h1>Now showing details for {movieName}</h1>
            <h3>Title: {movie.title}</h3> 
            <h3>Released: {movie.releaseDate}</h3> 
            <img src={movie.posterPath}/>
            <h3>Cast: {movie.cast.join(", ")}</h3>
        </div>
    )
};

export default MovieDetailPage;