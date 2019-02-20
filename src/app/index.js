import React from "react";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Evaldas Danilevicius</h1>
        <hr />
        <p className="Header--contact">Phone: 866272991</p>
        <p className="Header--contact">
          Email:{" "}
          <a
            href="mailto:evaldas@pons.lt"
            target="blank"
            rel="noopener noreferrer"
          >
            evaldas@pons.lt
          </a>
        </p>
        <p className="Header--summary">
          Bacon ipsum dolor amet turkey ham porchetta alcatra boudin, prosciutto
          doner beef ribs. Pork chop fatback ground round, corned beef drumstick
          brisket tri-tip bresaola ham biltong short ribs jowl kielbasa pork
          loin chicken. Strip steak kielbasa t-bone burgdoggen fatback swine
          spare ribs meatball landjaeger pork belly tri-tip short loin. Chuck
          turducken chicken tenderloin bresaola ribeye, pork chop burgdoggen
          hamburger landjaeger pastrami sirloin flank ground round buffalo. Cow
          turducken meatloaf capicola pork tongue ham hock bresaola tail pig
          chuck.
        </p>
        <img
          className="Header--profile-image"
          alt="Evaldas"
          src="https://media.licdn.com/dms/image/C5603AQGtAC1y0a_T5w/profile-displayphoto-shrink_200_200/0?e=1556150400&v=beta&t=WCiR1rNb0NJM17MMR1gpFgclEe851JdDOGZC6QbSmpg"
        />
      </header>
    </div>
  );
}

export default App;
