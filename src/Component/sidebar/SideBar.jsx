import { Route, Routes } from "react-router-dom"
import "./SideBar.css"
import Home from "../../sideBarInner/Home"
import AccountCircle from "../../sideBarInner/AccountCircle"
import Analytics from "../../sideBarInner/Analytics"
import Assignment from "../../sideBarInner/Assignment"
import BarChart from "../../sideBarInner/BarChart"
import BusinessCenter from "../../sideBarInner/BusinessCenter"
import Groups from "../../sideBarInner/Groups"
import Help from "../../sideBarInner/Help"
import MenuBook from "../../sideBarInner/MenuBook"
import People from "../../sideBarInner/People"
import Poll from "../../sideBarInner/Poll"
import PostAdd from "../../sideBarInner/PostAdd"
import School from "../../sideBarInner/School"
import Search from "../../sideBarInner/Search"
import TrackChanges from "../../sideBarInner/TrackChanges"
import Warning from "../../sideBarInner/Warning"
import Work from "../../sideBarInner/Work"
import Audit from "../../sideBarInner/Audit"
import PlannedInspection from "../../sideBarInner/PlannedInspection"
import SafetyCouncil from "../../sideBarInner/SafetyCouncil"
import MyPosts from "../../sideBarInner/MyPosts"
import MicroLearning from "../../sideBarInner/MicroLearning"
import WorkPermit from "../../sideBarInner/WorkPermit"
import Riskmanagement from "../../sideBarInner/RiskManagement"
export default function Sidebar(){
    return(
        <div className="sideBar">
     <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/audit" element={<Audit/>} />
            <Route path="/plannedinspection" element={<PlannedInspection/>} />
            <Route path="/safetyinteraction" element={<SafetyInteraction/>} />
             <Route path="/mypost" element={<MyPosts />} />
            <Route path="/microlearning" element={<MicroLearning />} />
            <Route path="/workpermit" element={<WorkPermit/>} />
            <Route path="/riskmanagement" element={<Riskmanagement />} />
            <Route path="/contractormanagement" element={<ContractorManagement />} />
            <Route path="/contractormanagement" element={<ContractorManagement />} />
            <Route path="/contractormanagement" element={<ContractorManagement />} />
            <Route path="/contractormanagement" element={<ContractorManagement />} />
            <Route path="/contractormanagement" element={<ContractorManagement />} />
            <Route path="/contractormanagement" element={<ContractorManagement />} />

            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
    )
};