import { Link } from "react-router-dom"
import "./SideBar.css"
export default function SideNavbar(){
    return(
        <div className="sidenavbarlinks">
<Link to="/">Home</Link>
<Link to="/analytics">Anaylitics</Link>
<Link to="/audit">Audit</Link>
<Link to="/plannedinspection">PlannedInspection</Link>
<Link to="/safetyinteraction">SafetyInteraction</Link>
<Link to="/safetycouncil">SafetyCouncil</Link>
<Link to="/myposts">Myposts</Link>
<Link to="/microlearning">Microlearning</Link>
<Link to="/workpermit">WorkPermit</Link>
<Link to="/riskmanagement">RiskManagement</Link>
<Link to="/contractormanagement">ContractorManagement</Link>
<Link to="/survey">Survey</Link>
<Link to="/reports">Reports</Link>
<Link to="/actiontracker">ActionTracker</Link>
<Link to="/training">Training</Link>
<Link to="/account">Account</Link>
<Link to={"/help"}>Help</Link>

        </div>
    )
}