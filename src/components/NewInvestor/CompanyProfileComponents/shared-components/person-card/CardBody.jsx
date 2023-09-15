export default function CardBody({ children }) {
  return (
    <div className="card__body d-flex justify-content-between py-3">
      {children}
    </div>
  );
}
