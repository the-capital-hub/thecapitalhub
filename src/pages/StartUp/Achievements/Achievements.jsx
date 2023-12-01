import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./Achievements.scss";

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
  const [goldCount, setGoldCount] = useState(0);
  const [silverCount, setSilverCount] = useState(0);
  const [bronzeCount, setBronzeCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeMedal, setActiveMedal] = useState("gold");
  const [filteredAchievements, setFilteredAchievements] = useState([]);

  const getAchievements = async () => {
    try {
      setLoading(true);
      const response = await getUserAchievements();
      setCompletedAchievements(response?.data.completed);
      setInCompleteAchievements(response?.data.incomplete);

      const gCount =
        response?.data.completed?.filter((medal) => medal.badge === "gold") ||
        [];
      setGoldCount(gCount.length);

      const sCount =
        response?.data.completed?.filter((medal) => medal.badge === "silver") ||
        [];
      setSilverCount(sCount.length);

      const bCount =
        response?.data.completed?.filter((medal) => medal.badge === "bronze") ||
        [];
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

  const handleMedalClick = (medalType) => {
    setActiveMedal(medalType);
    if (medalType === "incomplete") {
      setFilteredAchievements(inCompleteAchievements);
    } else {
      setFilteredAchievements(
        completedAchievements.filter((item) => item.badge === medalType)
      );
    }
  };

  const badgeImageMap = {
    silver: silver,
    bronze: bronze,
    gold: gold,
  };

  const medals = [
    { image: gold, h1: `Gold (${goldCount})`, badge: "gold" },
    { image: silver, h1: `Silver (${silverCount})`, badge: "silver" },
    { image: bronze, h1: `Bronze (${bronzeCount})`, badge: "bronze" },
    {
      image: img_3,
      h1: `Incomplete (${inCompleteAchievements?.length})`,
      badge: "incomplete",
    },
  ];

  return (
    <section className="startup_achievements_section d-flex flex-column align-items-evenly py-2 my-5 my-md-3 mx-2 mx-md-5 bg-white shadow-sm rounded-4">
      <Nav
        variant="underline"
        fill
        defaultActiveKey="gold"
        className="nav-tabs"
      >
        {medals?.map((item, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              eventKey={item.badge}
              onClick={() => handleMedalClick(item.badge)}
              className="text-decoration-none border-top-0 border-start-0 border-end-0"
            >
              <img
                src={item.image}
                alt="image"
                width={55}
                height={55}
                className={`rounded-pill ${
                  activeMedal === item.h1.toLowerCase() ? "active-medal" : ""
                }`}
              />
              <h5>{item.h1}</h5>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="Achievements d-flex flex-md-row gap-4 mx-auto">
        {loading ? (
          <div className="container p-5 text-center my-5 bg-white rounded-5 ">
            <SpinnerBS />
          </div>
        ) : filteredAchievements?.length ? (
          <section className="row m-0 row-cols-auto justify-content-around">
            {filteredAchievements.map((item, index) => (
              <div className="single-card col" key={index}>
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
          </section>
        ) : (
          <h5 className="text-center my-5">No {activeMedal} achievement yet</h5>
        )}
      </div>
    </section>
  );
}

export default Achievements;
