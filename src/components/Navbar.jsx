import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="navName">
        <Link className="nav-link" to={"/"}>Home</Link>
        <Link className="nav-link" to={"shop"}>Shop</Link>
        <Link className="nav-link" to={"about"}>About</Link>
        <Link className="nav-link" to={"chart"}>Chart</Link>
      </nav>  
    )
}