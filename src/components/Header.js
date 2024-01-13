import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" alt="tiffy-go" src={LOGO_URL}></img>
            </div>
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;