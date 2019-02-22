import React from "react";

// import Header from "./components/Header/index";
// import Main from "./components/Main/index";
// import Footer from "./components/Footer/index";
import { Header, Main, Footer } from "./components/index";

import "./index.scss";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Main />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
