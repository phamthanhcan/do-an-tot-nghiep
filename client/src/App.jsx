import "./App.scss";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
import FindRoute from "./app/page/FindRoute";
import Home from "./app/page/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
