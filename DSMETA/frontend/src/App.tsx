import Button from "./components/Button";
import Header from "./components/Header";
import Card from "./components/Card";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer />
      <Header />
      <Card />
    </>
  )
}

export default App
