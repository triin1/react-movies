import { useParams } from "react-router-dom"
import { movies } from "../../data"
import "./ActorDetailPage.css"

function ActorDetailPage() {
    const { actorName } = useParams();

    const movie = movies.filter(m => m.cast.includes(actorName));

    return (
        <>
            <h1>Filmography of {actorName}</h1>
            <div key={ actorName } className="filmography">
            {movie.map((m, index) => 
                <div key={index}>
                    <h3>Title: {m.title}</h3> 
                    <h3>Released: {m.releaseDate}</h3> 
                    <img src={m.posterPath} height="600px" width="400px"/>
                </div>
            )}
            </div>
        </>
    )
};

export default ActorDetailPage
