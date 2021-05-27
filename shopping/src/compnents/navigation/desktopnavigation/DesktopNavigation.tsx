import './DesktopNavigation.css'
import logo from '../../../shared/images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

export const DesktopNavigation = () => {
    const history = useHistory()
    return (
        <div className="nav-bar">
           
            <img className="nav-logo" src={logo} alt={'Error Logo'} onClick={() => history.push('/')}/>
            <span className="nav-home" onClick={() => history.push('/home')}>Home</span>
            <span className="nav-products" onClick={() => history.push('/products')}>Products</span>
            <span className="nav-about" onClick={() => history.push('/about')}>About</span>
            <span className="nav-contact" onClick={() => history.push('/contact')}>Contact</span>
            <FontAwesomeIcon className="nav-cart" onClick={() => history.push('/cart')} icon={faShoppingCart} size="lg"/>
            <span className="nav-signin" onClick={() => history.push('/signin')}>Login</span>

        </div>
    )
}
