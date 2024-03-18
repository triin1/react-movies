import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar({ user }) {
    return (
        <div>
            {user ?
                <nav>
                    <Link to="/">Movie List</Link>
                    &nbsp; | &nbsp; 
                    <Link to="/actors">Actors</Link>
                    &nbsp; | &nbsp;
                    Welcome, {user}
                </nav>
                :
                <></>
             }
        </div>
    )
};

export default NavBar