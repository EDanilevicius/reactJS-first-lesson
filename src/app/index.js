import React from "react";

// import Header from "./components/Header/index";
// import Main from "./components/Main/index";
// import Footer from "./components/Footer/index";
import { Header, Main, Footer, ErrorBoundary } from "./components/index";

import "./index.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "en",
      showHeader: true,
      error: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log("ERROR", error);
    console.log("ERROR", info);
  }

  render() {
    const { language, showHeader, error } = this.state;

    if (error) {
      return <div>Oooops something went very very wrong</div>;
    }

    return (
      <ErrorBoundary
        message={
          <div>
            <h1>Opps! Something went very wrong! Sorry :/</h1>
          </div>
        }
      >
        <div className="App">
          <button
            type="button"
            onClick={() =>
              this.setState(state => ({ showHeader: !state.showHeader }))
            }
          >
            <span id="emoji-button" role="img" aria-Label="hide header">
              ‍{showHeader ? "🏴☠" : "👁‍"}
            </span>
          </button>
          {showHeader && (
            <Header
              onLanguage={lang => this.setState({ language: lang })}
              language={language}
            />
          )}
          <Main language={language} />
        </div>
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
