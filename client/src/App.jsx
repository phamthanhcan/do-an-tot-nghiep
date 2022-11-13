import "./App.scss";
import Header from "./app/layout/Header";
import Footer from "./app/layout/Footer";
import FindRoute from "./app/page/FindRoute";
import Home from "./app/page/Home";
import Login from "./app/page/auth/Login";
import Register from "./app/page/auth/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
