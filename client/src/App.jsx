import "./App.scss";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
import FindRoute from "./app/page/FindRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <FindRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
