import React, { useEffect, useState } from "react";
import "./AchievementsComponents.scss";
import img_1 from "../../../Images/Investor/Achievements/img_1.png";
import img_2 from "../../../Images/Investor/Achievements/img_2.png";
import img_3 from "../../../Images/Investor/Achievements/img_3.png";
import rectangle from "../../../Images/Investor/Achievements/Rectangle.png";
import { getUserAchievements } from "../../../Service/user";

function AchievementsComponents() {
  const [completedAchievements, setCompletedAchievements] = useState([]);

  const getAchievements = async () => {
    try {
      const response = await getUserAchievements();
      setCompletedAchievements(response?.data.completed);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getAchievements();
  }, [])
  const achievements = [
    {
      image: img_1,
      h1: "Employer",
      p: "Selected a  company in company profile page(bronze)",
    },
    {
      image: img_2,
      h1: "Founder",
      p: "Created a company in company profile page (bronze)",
    },
    {
      image: img_3,
      h1: "One-Stop Shop",
      p: " Edited and opened your one-link for the first time (bronze)",
    },
    {
      image: img_2,
      h1: "Founder",
      p: "Created a company in company profile page (bronze)",
    },
    {
      image: img_3,
      h1: "One-Stop Shop",
      p: " Edited and opened your one-link for the first time (bronze)",
    },
  ];
  return (
    <div className="achievements_components m-3 pb-2 d-flex flex-md-row justify-content-start gap-4">
      {completedAchievements?.map((item, index) => (
        <div className="single-card" key={index}>
          <img src={img_1} alt="achievement" />
          <div className="image_text">
            <img src={rectangle} alt="rectangle" />
            <div className="text">
              <h6>{item.title}</h6>
              {/* <h6>{item.p}</h6> */}

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AchievementsComponents;
