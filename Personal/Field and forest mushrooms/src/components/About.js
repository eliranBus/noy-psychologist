import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../languages/MultiLingualContent";
import decorative from "../assets/decoratives/2.png";
import logo from "../assets/images/logo2.jpg";
import sign from "../assets/decoratives/sign.png";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="about-wrapper inner-section">
        <h2>
          <MultiLingualContent contentID="about" />
        </h2>
        <p>
          <MultiLingualContent contentID="aboutText1" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutText2" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutText3" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutText4" />
        </p>
        <br />
        <h3 className="whatsInSite">
          <MultiLingualContent contentID="aboutWhatsInSite" />
        </h3>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet1" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet2" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet3" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet4" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet5" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet6" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet7" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet8" />
        </p>
        <br />
        <div className="news">
          <h3 className="whatsInSite">
            <MultiLingualContent contentID="news" />
          </h3>
          <div className="news-text">
            <h4>פטריות לבקניות</h4>
            <p>
              תופעת הלבקנות/אלביניזם ידועה בכל מערכות החי והצומח כולל האדם
              והפטריות: זו הפרעה גנטית בה קיים חוסר בצבען/פיגמנט בשם מלנין והצבע
              לבן. הלבקנות אינה נחשבת מחלה ועוברת בתורשה.
            </p>
            <p>
              בעולם ובארץ ידועות תצפיות של מינים לבקנים, ולאחרונה נאספו לאוסף
              אוניברסיטת ת.א מספר מינים: בקבוצה של ישעורית אפורה נאספו מספר
              פרטים לבנים (י.גולדרינג) וביער אורנים נמצאה אורנייה מצויה
              (א.שדמי). כדי לוודא שאין זה מין בלתי מוכר – בדקנו ד.נ.א והזיהוי
              אומת. מסתבר שהגן האחראי על האלבינזם לא מתבטא בבדיקה רגילה.
            </p>
            <p>
              חשוב לציין שהסוג בשם לבקנית בארץ אינו נובע מהתופעה אלא מצבעו הלבן
              והצעתי התקבלה רישמית להחליפו בעברית ל עציצית.
            </p>
            <p>
              בעולם פורסמו כמה מאמרים של חוקרי פטריות-מאכל המנסים לטפח ולגדל
              מינים אלביניסטים, כדוגמת המאייטקה.
            </p>
          </div>
          <LazyLoadImage src={sign} alt="" className="sign-img" />
        </div>
        <br />
        <h3 className="whatsInSite">
          <MultiLingualContent contentID="thanks" />
        </h3>
        <p>
          <MultiLingualContent contentID="thanksText1" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText2" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText3" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText4" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText5" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText6" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText7" />
        </p>
        <br />
        <LazyLoadImage src={logo} alt="logo" className="logoPng" />
        <br />
        <p>
          <MultiLingualContent contentID="aboutFinalText" />
        </p>
        <br />
      </div>
      <LazyLoadImage src={decorative} alt="" className="decorative-about" />
    </div>
  );
};

export default About;
