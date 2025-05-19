const PRACTICES = [
  {
    id: 1,
    description: "Litigation, Abitration & Alternate Dispute resolution.",
  },
  { id: 2, description: "Real Estate & conveyancing." },
  { id: 3, description: "Family laws." },
  { id: 4, description: "Law of Crimes" },
  { id: 5, description: "Insolvency & Bankruptcy laws." },
  { id: 6, description: "Corporate & commercial laws." },
  { id: 7, description: "Legal aid." },
];
function Practices() {
  return (
    <div>
      <h1>OUR PRACTICES</h1>
      <ul>
        {PRACTICES.map((practice) => {
          return <li>{practice.description}</li>;
        })}
      </ul>
    </div>
  );
}

export default Practices;
