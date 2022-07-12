import './Form.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    return (
        <div className="formulario">
            <form className="form" action="">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="input-data"
                    dateFormat="dd/MM/yyyy"
                />
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => { }}
                    className="input-data"
                    dateFormat="dd/MM/yyyy"
                />
            </form>
        </div>
    )
}

export default Form;