import "./App.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { Aside } from "./components/aside/aside";

function App() {
  return (
    <span className="App">
      <Header />
      <Main />
      <Footer />
      <Aside />
    </span>
  );
}

export default App;
