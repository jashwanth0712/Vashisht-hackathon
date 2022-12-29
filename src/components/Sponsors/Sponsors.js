import DEVFOLIO from "./Devfolio_Logo.png";
import FILECOIN from "./FileCoin_Logo.png";
import POLYGON from "./Polygon_Logo.png";
import REPLIT from "./Replit_Logo.png";
import SOLONA from "./Solona_Logo.png";

function Sponsors() {
  return (
    <div fluid className="sponsors">
      <div className="sponsors__title">
        <h1>
          Our Amazing <strong className="purple">Sponsors</strong>
        </h1>
        {/* <p>
          On behalf of <strong className="yellow">GDSC </strong>and <strong className="yellow">CSclub</strong> IIITDM , we would like to publicly thank the
          generous sponsers without whom this event could not be held so
          smoothly. Our sponsors are an extension of our event, we make their
          presence obvious by integrating them in natural ways which promote the
          vision and brand. Till date our sponsors are very happy and eager to
          keep in business with us by supporting our vision with whole heart.
        </p> */}
      </div>
      <div className="sponsors__info">
        <h2>Gold</h2>
        <div className="sponsors__gold--imgs">
          <img src={DEVFOLIO} alt="Devfolio logo" />
          <img src={POLYGON} alt="Ploygon logo" />
        </div>
      </div>
      <div className="sponsors__info">
        <h2>Silver</h2>
        <div className="sponsors__silver--imgs">
          <img src={FILECOIN} alt="Filecoin logo" />
          <img src={REPLIT} alt="Replit logo" />
          <img src={SOLONA} alt="Solona logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
