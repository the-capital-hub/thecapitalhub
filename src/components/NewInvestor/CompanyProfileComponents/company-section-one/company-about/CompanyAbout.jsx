import "./CompanyAbout.scss";

export default function CompanyAbout({ about,vision,mission,noOfEmployees }) {
  return (
    <>
    <article className="company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 justify-content-between mt-2">
      <h6 className="div__heading">About the Company:</h6>
      <p className="about__text">{about}</p>
    </article>
    <article className="company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 justify-content-between mt-2">
      <h6 className="div__heading">No of Employees:</h6>
      <p className="about__text">{noOfEmployees}</p>
    </article>
    <article className="company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 justify-content-between mt-2">
      <h6 className="div__heading">Vision:</h6>
      <p className="about__text">{vision}</p>
    </article>
    <article className="company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 justify-content-between mt-2">
      <h6 className="div__heading">Mission:</h6>
      <p className="about__text">{mission}</p>
    </article>

   </>
  );
}
