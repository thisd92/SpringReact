import './Button.css'
import iconBtn from '../assets/images/icon.svg';
import { BASE_URL } from '../utils/request';
import { toast } from 'react-toastify';
import axios from 'axios';

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(resp => {
        toast.info("SMS enviado com sucesso!");
    });
}

function Button( {saleId} : Props ){
    return(
        <button className="icon" onClick={() => handleClick(saleId)}>
            <img src={iconBtn} alt="IconNotification" />
        </button>
    )
}

export default Button;