import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <p className="font-style">body</p>
      {/* <p className="material-symbols-outlined">person </p> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
