

import Product from "./Pages/Product_Page/Product";
import { Home } from "./Pages/Home/Home";

import {PaymentMethods} from './Components/Payment/PaymentMethods'

import Routes from "./Pages/Routes/Routes";

function App() {
  

const db= process.env.REACT_APP_API_KEY

console.log(db);
  return (
    <div>
    <Routes/>

    {/* <PaymentMethods/>     */}

    </div>
  );
}

export default App;
