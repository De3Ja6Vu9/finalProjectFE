import { Link } from "react-router-dom"
import "./HeaderComponent.css"

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">Welcome Trainers</h1>
      <nav>
        <h2 className="main">Kanto Region</h2>
        <ul className="link-list">
        <li><Link className="link" to="/">Login</Link></li>
          <li><Link className="link" to="/leaders">Leaders</Link></li>
          <li><Link className="link" to="/training">Training</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;