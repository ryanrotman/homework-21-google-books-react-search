import headerImg from "../../assets/images/book_header.png";
import "./index.css";

function Header() {
    return (
        <div className="header-image">
            <img src={headerImg} alt="books" style={{width: "100%"}} />
            <div className="header-text">Google Books Search</div>
        </div>
    )
}

export default Header;