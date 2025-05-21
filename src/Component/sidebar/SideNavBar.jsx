import { Link } from "react-router-dom"
import "./SideBar.css"
export default function SideNavbar(){
    return(
        <div className="sidenavbarlinks">
<Link to="/">Home</Link>
<Link to="/analytics">Anaylitics</Link>
<Link to="/audit">Audit</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
<Link to="/">Home</Link>
        </div>
    )
}