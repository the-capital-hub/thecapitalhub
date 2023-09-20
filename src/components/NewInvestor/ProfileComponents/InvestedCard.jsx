import fisdomStartUpIcon from "../../../Images/Investor/Profile/fisdom_startup.png";

export default function InvestedCard({ startUp }) {
  const text =
    "One classical breakdown of economic activity distinguishes three sectors: Primary: involves the retrieval and production of raw-material commodities, such as corn, coal, wood or iron";

  return (
    <div className="invested_card border rounded shadow-sm" id={startUp.id}>
      <div className="card_title">
        <img src={startUp.image} alt="startup icon" width={50} />
        <h5 className="green_underline pb-2">{startUp.name}</h5>
      </div>
      <div className="p-2">
        <p className="green_underline mb-1">Sector:</p>
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
}
