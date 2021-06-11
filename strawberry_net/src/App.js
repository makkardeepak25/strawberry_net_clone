import Routes from "./Pages/Routes/Routes";
function App() {
  

const db= process.env.REACT_APP_API_KEY

console.log(db);
  return (
    <div>
    <Routes/>
    </div>
  );
}

export default App;
