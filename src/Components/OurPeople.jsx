import person from "../assets/Images/person.jpg";
import peopleStyle from "../assets/People.module.css";
function OurPeople() {
  return (
    <div className="d-grid">
      <h1 className="text-center">Our people</h1>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap">
        <div>
          <img
            className={`${peopleStyle.personImg}`}
            src={person}
            alt="Ameya Ovhal"
          ></img>
          <div className={`${peopleStyle.personName}`}>Adv. Ameya Ovhal</div>
        </div>
        <div>
          <img
            className={`${peopleStyle.personImg}`}
            src={person}
            alt="Mukta"
          ></img>
          <div className={`${peopleStyle.personName}`}>Adv. Mukta</div>
        </div>
        <div>
          <img
            className={`${peopleStyle.personImg}`}
            src={person}
            alt="Gayatri"
          ></img>
          <div className={`${peopleStyle.personName}`}>Adv. Gayatri</div>
        </div>
      </div>
    </div>
  );
}

export default OurPeople;
