import "./ActorsListPage.css"
import { movies } from "../../data";
import { Link } from "react-router-dom";

function ActorListPage() {
    let movieCast = movies.map(m => m.cast);
    let castArray = movieCast.flat(); 
    const listOfActors = new Set(castArray);
    const listOfActorsArray = Array.from(listOfActors);


    return (
        <>
            <h1>List of all actors</h1>
            <div className="actorCard">
            {listOfActorsArray.map((a, index) => 
                <Link to={`/actors/${a}`} key={index}>
                <div style={{backgroundImage: "url(https://picsum.photos/200/300)"}} className="backgroundBlock">
                    <h2>
                        {a}
                    </h2>
                </div>
                </Link>    
            )};
            </div>
        </>
    )
};

export default ActorListPage;