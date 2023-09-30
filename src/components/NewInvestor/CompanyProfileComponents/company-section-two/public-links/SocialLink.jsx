import "./SocialLink.scss";

export default function SocialLink({ icon, name }) {
  return (
    <a
      href=".."
      className="social__link text-capitalize"
      style={{ width: "fit-content" }}
    >
      <img src={icon} alt={name} />
      {name}
    </a>
  );
}
