import { Authentication } from "./Pages/Authentication/Authentication";

import Product from "./Pages/Product_Page/Product";
import { Home } from "./Pages/Home/Home";
import { Card } from "./Components/Product_card/Card";
function App() {
  return (
    <div>
      
      <Home />
      <Product />

      <Authentication />
      <Card/>
    </div>
  );
}

export default App;
