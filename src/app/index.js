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
      <main>
        <section className="Section">
          <div className="Section--left">
            <h3>Education</h3>
          </div>
          <div className="Section--right">
            <h3>Withering Madness University - Planet Vhoorl</h3>
            <p>
              <span>Major:</span> Public relations
            </p>
            <p>
              <span>Minor:</span> Scale Tending
            </p>
          </div>
        </section>

        <section className="Section">
          <div className="Section--left">
            <h3>Skills</h3>
          </div>
          <div className="Section--right">
            <div>
              <h3>Office skills</h3>
              <p>
                Office and records management, database administration, event
                organization, customer support, travel coordination.
              </p>
            </div>
            <div>
              <h3>Computer skills</h3>
              <p>
                Microsoft productivity software (Word, Excel, etc.) Adobe
                Creative Suite, Windows
              </p>
            </div>
          </div>
        </section>

        <section className="Section">
          <div className="Section--left">
            <h3>Experience</h3>
          </div>
          <div className="Section--right">
            <div>
              <div className="Section--right-job-title">
                <h3>Doomsday Cult </h3>
                <span>Very Good Student, 2018.10.11 - present </span>
              </div>
              <ul>
                <li>
                  Inspired and won highest peasant death competition among
                  servants
                </li>
                <li>Helped coordinate managers to grow cult following</li>
                <li>Provided untimely deaths to all who opposed</li>
              </ul>
            </div>
            <div>
              <div className="Section--right-job-title">
                <h3>The Watering Hole </h3>
                <span>Very Good Student, 2015.10.11 - 2016.05.11 </span>
              </div>
              <ul>
                <li>Worked on grass-roots promotional campaigns</li>
                <li>Reduced theft and property damage percentages</li>
                <li>Janitor work, Laundry</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="Section">
          <div className="Section--left">
            <h3>Hobbies</h3>
          </div>
          <div className="Section--right">
            <p>World Domination, Deep Sea Diving, Murder Most Foul</p>
          </div>
        </section>
        <section className="Section">
          <div className="Section--left">
            <h3>References</h3>
          </div>
          <div className="Section--right">
            <p>Available on request</p>
          </div>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
