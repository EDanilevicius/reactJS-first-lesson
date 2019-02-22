import React from "react";
import "./index.scss";

function Main() {
  return (
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
              Microsoft productivity software (Word, Excel, etc.) Adobe Creative
              Suite, Windows
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
  );
}

export default Main;
