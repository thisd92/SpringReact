import Form from "./Form";
import "./Card.css"
import Table from "./Table";

const Card = () => {
    return(
        <main>
            <section id="vendas-sec">
                <div className="container-form">
                    <div className="card">
                        <h2 id="titulo-form">Vendas</h2>
                        <Form />
                        <Table />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Card;