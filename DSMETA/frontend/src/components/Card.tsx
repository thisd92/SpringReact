import "./Card.css"
import './Form.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import Button from "./Button";
import "./Table.css"
import axios from "axios";
import { Sale } from "../models/sals";
import { BASE_URL } from "../utils/request";

const Card = () => {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = maxDate.toISOString().slice(0, 10);

    const url = 'localhost:8080/sales'

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(resp => {
                setSales(resp.data.content)
            })
    }, [minDate, maxDate])

    return (
        <main>
            <section id="vendas-sec">
                <div className="container-form">
                    <div className="card">
                        <h2 id="titulo-form">Vendas</h2>
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
                        <div className="container-table">
                            <table className="table-vendas">
                                <thead>
                                    <tr>
                                        <th className="none-576">ID</th>
                                        <th className="none-320">Data</th>
                                        <th>Vendedor</th>
                                        <th className="none-576">Visitas</th>
                                        <th className="none-576">Vendas</th>
                                        <th>Total</th>
                                        <th>Notificar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sales.map(sale => {
                                        return (
                                            <tr key={sale.id}>
                                                <td className="none-576">#{sale.id}</td>
                                                <td className="none-320">{new Date(sale.date).toLocaleDateString()}</td>
                                                <td>{sale.sellerName}</td>
                                                <td className="none-576">{sale.visited}</td>
                                                <td className="none-576">{sale.deals}</td>
                                                <td>{sale.amount.toFixed(2)}</td>
                                                <td>
                                                    <Button saleId={sale.id} />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Card;