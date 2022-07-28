
import './index.css';
import logo from '../../logo.svg'
const Navbar = ({onLogOutClick}) => {
const logOutU =() => { (localStorage.removeItem('username')); 
(onLogOutClick(true))}
  return (
    <div className="Navbar">
    <img className='logo' src={logo} alt="logo"></img>
    
      <ul className="Navbar__list">
        <li>
          <a href="/">My Message</a>
        </li>
        <li>
          <a href="#topM" onClick={logOutU}  >Logout</a>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar;