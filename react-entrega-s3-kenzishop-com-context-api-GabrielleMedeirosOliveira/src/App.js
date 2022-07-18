import Router from "./routes";
import GlobalStyle from "./globalStyle/global.js";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
