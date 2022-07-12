import './Button.css'
import iconBtn from '../assets/images/icon.svg';

function Button(){
    return(
        <button className="icon">
            <img src={iconBtn} alt="Icon" />
        </button>
    )
}

export default Button;