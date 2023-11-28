export default function DealsCard({ image, children, isFunds }) {
  return (
    <div
      className="deals__card d-flex gap-2 py-2 px-3 rounded-4"
      style={{ backgroundColor: "#efefef" }}
    >
      <img
        src={image}
        alt=""
        style={
          isFunds
            ? { width: "30px", height: "30px" }
            : { width: "50px", height: "50px" }
        }
      />
      <div className="d-flex flex-column justify-content-center">
        {children}
      </div>
    </div>
  );
}
