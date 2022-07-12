import './Form.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

const Form = () => {
    
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <div className="formulario">
            <form className="form" action="">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => setMinDate(date)}
                    className="input-data"
                    dateFormat="dd/MM/yyyy"
                />
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => setMaxDate(date)}
                    className="input-data"
                    dateFormat="dd/MM/yyyy"
                />
            </form>
        </div>
    )
}

export default Form;