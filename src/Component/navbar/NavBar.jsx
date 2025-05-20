import "./Navbar.css"
import logo from "./logo.png"
export default function NavBar(){
    return(
       <div className="Nav">
        <div>
            <img className="logo" src="https://play-lh.googleusercontent.com/TdGt-KKAmiTh17cJcejDSvfGOs_UbYp_uot-rWao1tXFzvzNUlEFH-AU9AimSI7805gM=w600-h300-pc0xffffff-pd" width={175} height={100} alt="goo"/>
        </div>

        <div className="logos">
         <svg style=
         {{color:"black",marginTop:'20px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
<svg style=
         {{marginTop:'20px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-backpack" viewBox="0 0 16 16">
  <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
  <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"/>
</svg>
         
        </div>

        <div className="profileLogo">
            <svg style=
         {{marginTop:'20px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
        </div>
       </div>
    )
}
