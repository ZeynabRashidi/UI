import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Nav/Navbar";
import Categories from "../src/components/pages/Categories";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar />
      <Categories />

      <Footer></Footer>
    </div>
  );
}

export default App;
