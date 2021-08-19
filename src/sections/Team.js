import React from "react";
import "./styles/Team.css";

function Team() {
  return (
    <div id="team">
      <h2>Team</h2>

      <div className="team__content">
        <div className="team__profileImg"></div>

        <div className="team__text">
          <h3>Octavio Mestre</h3>
          <p>
            Octavio has been advising clients in Latin America for over 20
            years. During his years at Merrill Lynch and HSBC he advised clients
            from virtually every county in Latin America and the Caribbean
            regarding the appropriate structuring of their wealth. He is well
            versed in the specific legal concerns in each country and is able to
            adequately discuss the relevant issues with clients and their
            attorneys.
          </p>
          <p>
            He has a Bachelor’s Degree in Business Management and a Law Degree
            and is a member of the Society of Trust and Estate Practitioners
            (STEP).
          </p>
          <p>Octavio is fluent in English, Spanish and Portuguese.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
