import "./CompanyAbout.scss";

export default function CompanyAbout({ about }) {
  return (
    <article className="company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 justify-content-between mt-2">
      <h6 className="div__heading">About the Company:</h6>
      <p className="about__text">{about}</p>
    </article>
  );
}
