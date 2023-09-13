export default function CompanyOverviewCard({ heading, icon, iconAlt, text }) {
  return (
    <div className="link__container d-flex flex-column gap-1">
      <p>{heading}</p>
      <a
        href="#"
        className="overview__link d-flex align-items-center gap-1 py-1 px-2 rounded-pill"
      >
        <img src={icon} alt={iconAlt} /> {text}
      </a>
    </div>
  );
}
