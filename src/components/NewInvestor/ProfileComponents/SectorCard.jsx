export default function SectorCard({ sector }) {
  return (
    <div className="interested_card border rounded " id={sector.id}>
      <img
        className=""
        src={sector.image}
        alt="sector image"
        width={50}
        height={50}
      />
      <h6 className="m-0">{sector.label}</h6>
    </div>
  );
}
