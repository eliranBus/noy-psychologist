import React from "react";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="about-wrapper inner-section">
        <h2>אודות</h2>
        <p>מטפלת בילדים, בנוער ובמבוגרים בקליניקה פרטית בגדרה.</p>
        <p>
          מטפלת בגישה אינטגרטיבית, תוך שילוב כלים מתוך העולם הפסיכודינמי,
          הקוגניטיבי-התנהגותי (CBT), קבלה וחמלה (ACT) ואקזסטנציאליזם, בהתאם
          לצרכי המטופל.
        </p>
        <p>פסיכולוגית לאחר התמחות רפואית (מ.ר 27-164954).</p>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="lightblue"
          stroke-width="120"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default About;
