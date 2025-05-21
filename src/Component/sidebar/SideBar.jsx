import { Route, Routes } from "react-router-dom"
import "./SideBar.css"
import Home from "../../sideBarInner/Home"
import Analytics from "../../sideBarInner/Analytics"
import Help from "../../sideBarInner/Help"
import Audit from "../../sideBarInner/Audit"
import PlannedInspection from "../../sideBarInner/PlannedInspection"
import MyPosts from "../../sideBarInner/MyPosts"
import MicroLearning from "../../sideBarInner/MicroLearning"
import WorkPermit from "../../sideBarInner/WorkPermit"
import Riskmanagement from "../../sideBarInner/RiskManagement"
import Survey from "../../sideBarInner/Survey"
import Reports from "../../sideBarInner/Reports"
import Actiontracker from "../../sideBarInner/ActionTracker"
import Contractormanagement from "../../sideBarInner/ContractorManagement"
import Training from "../../sideBarInner/Training"
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
            <Route path="/contractormanagement" element={<Contractormanagement/>} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/reports" element={<Reports/>} />
            <Route path="/actiontracker" element={<Actiontracker />} />
            <Route path="/training" element={< Training/>} />
            <Route path="/account" element={<Account />} />

            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
    )
};