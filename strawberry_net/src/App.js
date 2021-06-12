import Routes from "./Pages/Routes/Routes";



export const API_KEY= process.env.REACT_APP_API_KEY
export const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY


function App() {
  

  return (
    <div>
    <Routes/>
    </div>
  );
}

export default App;
