import featureImg from "../assets/Images/feature.jpg";
import featureStyle from "../assets/Features.module.css";
const FEATURES = [
  {
    id: 1,
    TITLE: "RESPONSIVENESS",
    description:
      "We maintain clear & promt communication to keep our clients informed & empowered throughout every stage of their legal journey.",
  },
  {
    id: 2,
    TITLE: "STRATEGIC THINKING",
    description:
      "We create, craft effective solution to even the mostcompolex legal problems, which helps us to acheive the best possible outcomes for individuals, Businesses & Communities we serve.",
  },
  {
    id: 3,
    TITLE: "DELIGENCY",
    description:
      "Our firm defines Deligency s reflecting our commitment to clients through prepartion, attention to detail & rentless advocacy",
  },
];
function StandoutFeatures() {
  return (
    <div>
      {FEATURES.map((feature, index) =>
        index % 2 == 0 ? (
          <div
            className={`d-flex flex-wrap flex-lg-nowrap align-items-center ${featureStyle.featureCont}`}
            key={index}
          >
            <div>
              <img
                className={`${featureStyle.featureImg}`}
                src={featureImg}
                alt="img here"
              />
            </div>
            <div>
              <h3>{feature.TITLE}</h3>
              <div>{feature.description}</div>
            </div>
          </div>
        ) : (
          <div
            className={`d-flex flex-wrap flex-lg-nowrap flex-column-reverse flex-lg-column-initial align-items-center ${featureStyle.featureCont}`}
            key={index}
          >
            <div>
              <h3>{feature.TITLE}</h3>
              <div>{feature.description}</div>
            </div>{" "}
            <div>
              <img
                className={`${featureStyle.featureImg}`}
                src={featureImg}
                alt="img here"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default StandoutFeatures;
