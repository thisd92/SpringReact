import Button from "./Button";
import "./Table.css"

function Table() {
    return (
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
                    <tr>
                        <td className="none-576">#341</td>
                        <td className="none-320">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="none-576">15</td>
                        <td className="none-576">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <Button saleId={1}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="none-576">#341</td>
                        <td className="none-320">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="none-576">15</td>
                        <td className="none-576">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <Button saleId={2} />
                        </td>                                </tr>
                    <tr>
                        <td className="none-576">#341</td>
                        <td className="none-320">28/06/2022</td>
                        <td>Anakin</td>
                        <td className="none-576">15</td>
                        <td className="none-576">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <Button saleId={3} />
                        </td>                                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;