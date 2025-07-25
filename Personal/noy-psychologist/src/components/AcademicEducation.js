import React from "react";

const AcademicEducation = () => {
  return (
    <div className="section" id="academicEducation">
      <div className="about-wrapper inner-section">
        <h2>השכלה אקדמית</h2>
        <p>
          תואר ראשון בפסיכולוגיה בהצטיינות יתרה – המכללה האקדמית תל-אביב יפו
          תואר שני בפסיכולוגיה רפואית בהצטיינות יתרה – המכללה האקדמית תל-אביב
          יפו
        </p>
        <h3 className="qualifications-title">הכשרות מיוחדות:</h3>
        <ul className="qualifications">
          <li>בוגרת קורס גוף ונפש בפסיכולוגיה של משרד הבריאות</li>
          <li>בוגרת קורס טראומה מינית מורכבת של משרד הבריאות </li>
          <li>בוגרת קורס פסיכולוגיה התייחסותית של מכון מפרשים</li>
          <li>בוגרת קורס מיומנויות חברתיות בילדים ובנוער של מכון מפרשים</li>
          <li>
            בוגרת התכנית לימוד פסיכותרפיה קרוב – מסובייקטיביות
            לאינטרסובייקטיביות
          </li>
        </ul>
      </div>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
        <path
          d="M-314,267 C105,364 400,100 812,279"
          fill="none"
          stroke="rgb(232, 232, 232)"
          stroke-width="120"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default AcademicEducation;
