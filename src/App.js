import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import ApiHandler from "./components/ApiHandler";

function App() {
  return (
    <>
      <Header />
      <ApiHandler/>
      <Footer />
    </>
  );
}

export default App;
