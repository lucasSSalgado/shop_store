import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div className="home_container">
            <div className="home_text">
                Discover a diverse selection of quality products in our user-friendly 
                web shop. 
                Exceptional service & worldwide shipping.  
                <Link className="link_home" to={"../shop"}> Shop now!</Link>
            </div>
        </div>
    )
}