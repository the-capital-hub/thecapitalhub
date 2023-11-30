import React, { useEffect, useState } from "react";
import "./Achievements.scss";
import img_1 from "../../../Images/Investor/Achievements/img_1.png";
import img_2 from "../../../Images/Investor/Achievements/img_2.png";
import img_3 from "../../../Images/Investor/Achievements/img_3.png";
import silver from "../../../Images/Investor/Achievements/silver.png";
import gold from "../../../Images/Investor/Achievements/gold.png";
import bronze from "../../../Images/Investor/Achievements/bronze.png";
import rectangle from "../../../Images/Investor/Achievements/Rectangle.png";
import { getUserAchievements } from "../../../Service/user";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

function Achievements() {
  const [completedAchievements, setCompletedAchievements] = useState([]);
  const [inCompleteAchievements, setInCompleteAchievements] = useState([]);
  const [goldCount, setGoldCount] = useState(0);  // Initialize count to 0
  const [silverCount, setSilverCount] = useState(0);  // Initialize count to 0
  const [bronzeCount, setBronzeCount] = useState(0);  // Initialize count to 0
  const [loading, setLoading] = useState(false);

  const getAchievements = async () => {
    try {
      setLoading(true);
      const response = await getUserAchievements();
      setCompletedAchievements(response?.data.completed);
      setInCompleteAchievements(response?.data.incomplete);

      const gCount = response?.data.completed?.filter(medal => medal.badge === "gold") || [];
      setGoldCount(gCount.length);

      const sCount = response?.data.completed?.filter(medal => medal.badge === "silver") || [];
      setSilverCount(sCount.length);

      const bCount = response?.data.completed?.filter(medal => medal.badge === "bronze") || [];
      setBronzeCount(bCount.length);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAchievements();
  }, []);



  const badgeImageMap = {
    silver: silver,
    bronze: bronze,
    gold: gold,
  };

  // const achievements1 = [
  //   {
  //     image: img_1,
  //     h1: "Welcome !",
  //     p: "Priyanka Nelson",
  //   },
  //   {
  //     image: img_3,
  //     h1: "Yoyager !",
  //     p: "First Post",
  //   },
  //   {
  //     image: img_2,
  //     h1: "On Fire !",
  //     p: "Every day Posted",
  //   },
  //   {
  //     image: img_3,
  //     h1: "Yoyager !",
  //     p: "First Post",
  //   },
  //   {
  //     image: img_2,
  //     h1: "On Fire !",
  //     p: "Every day Posted",
  //   },
  // ];
  // const achievements2 = [
  //   {
  //     image: img_3,
  //     h1: "Employer",
  //     p: "Selected a  company in company profile page",
  //   },
  //   {
  //     image: img_3,
  //     h1: "Founder ",
  //     p: " Created a company in company profile page ",
  //   },
  //   {
  //     image: img_3,
  //     h1: "One-Stop Shop",
  //     p: " Edited and opened your one-link for the first time",
  //   },
  //   {
  //     image: img_2,
  //     h1: " It's just paperwork ",
  //     p: " Added some documentation to the folders",
  //   },
  // ];

  const medals = [
    {
      image: gold,
      h1: `Gold(${goldCount})`,
    },
    {
      image: silver,
      h1: `Silver(${silverCount})`,
    },

    {
      image: bronze,
      h1: `Bronze(${bronzeCount})`,
    },
    {
      image: img_3,
      h1: `In Complete(${inCompleteAchievements?.length})`,
    },
  ];
  return (
    <section className="startup_achievements_section d-flex flex-column align-items-evenly    py-2 my-5 my-md-3 mx-2 mx-md-5 bg-white shadow-sm rounded-4   ">
      <div className="achievements_users  d-flex flex-md-row  gap-4 mx-auto  ">
        {medals?.map((item, index) => (
          <div
            key={index}
            className=" single-card d-flex flex-md-row  align-items-center gap-2 "
          >
            <img
              src={item.image}
              alt="image"
              width={55}
              height={55}
              className="rounded-pill"
            />
            <h5>{item.h1}</h5>
          </div>
        ))}
      </div>
      <hr className="hr" />

      <div className="Achievements   d-flex flex-md-row  gap-4 mx-auto ">
        {completedAchievements?.map((item, index) => (
          <div className="single-card  " key={index}>
            <img src={badgeImageMap[item.badge]} alt="achievement" />
            <div className="image_text">
              <img src={rectangle} alt="rectangle" />
              <div className="text py-2 w-75">
                <h6>{item.title}</h6>
                <p className="m-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Achievements   d-flex flex-md-row  gap-4  mx-auto ">
        {inCompleteAchievements?.map((item, index) => (
          <div className="single-card  " key={index}>
            <img src={img_3} alt="achievement" />
            <div className="image_text">
              <img src={rectangle} alt="rectangle" />
              <div className="text w-75 py-2">
                <h6>{item.title}</h6>
                <p className="m-0">{`${item.description} (${item.badge})`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading &&
        <div className="container p-5 text-center my-5 bg-white rounded-5 shadow-sm ">
          <SpinnerBS />
        </div>
      }
    </section>
  );
}

export default Achievements;
