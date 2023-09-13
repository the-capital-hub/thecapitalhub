export default function DealsCard({ image, children }) {
  return (
    <div
      className="deals__card d-flex gap-2 py-2 px-3 rounded-4"
      style={{ backgroundColor: "#efefef" }}
    >
      <img src={image} alt="" style={{ width: "50px", height: "auto" }} />
      <div className="">{children}</div>
    </div>
  );
}
