import React from "react";
import success from "../../../Images/industryImage/CRM/image 79.png";
import building from "../../../Images/industryImage/CRM/image 79-1.png";
import graph from "../../../Images/industryImage/CRM/image 79-2.png";
import tech from "../../../Images/industryImage/CRM/image 79-3.png";
import { Link } from "react-router-dom";
import "./milestones.scss";
import UserMilestones from "./UserMilestones";

const Milestones = ({pageTheme}) => {
  const data = [
    {
      para: "Your Profile is successfully created, please complete the remaining profile",
      image: success,
      link: "Complete Profile",
      component: <UserMilestones pageTheme={pageTheme}/>,
    },
    {
      para: "Company Profile is successfully created, please complete the remaining detail",
      image: building,
      link: "Complete Profile",
      component: <UserMilestones pageTheme={pageTheme}/>,
    },
    {
      para: "Your Profile is successfully created, please complete the remaining profile",
      image: graph,
      link: "Complete Profile",
      component: <UserMilestones pageTheme={pageTheme}/>,
    },
    {
      para: "Your Profile is successfully created, please complete the remaining profile",
      image: tech,
      link: "Complete Profile",
      component: <UserMilestones pageTheme={pageTheme}/>,
    },
    {
      para: "Your Profile is successfully created, please complete the remaining profile",
      image: building,
      link: "Complete Profile",
      component: <UserMilestones pageTheme={pageTheme}/>,
    },
  ];
  return (
    <div className="ConnectionCard_container m-3 pb-2 d-flex flex-md-row justify-content-start gap-4">
      {" "}
      <>
        {data.map((item, index) => (
          <div className="milestone-card " key={index}>
            <div
              className="d-flex flex-column align-items-center h-100 text-decoration-none"
              // to={`/user/${
              //   item?.firstName.toLowerCase() +
              //   "-" +
              //   item?.lastName.toLowerCase()
              // }/${item.oneLinkId}`}
              style={{ color: "inherit" }}
            >
              <img src={item?.image} alt="" />
              {item.component}
              <p className="m-0" style={{ paddingBottom: "10px" }}>
                {item?.para}
              </p>
              <Link
                //to={`/chats?userId=${item?._id}`}
                className="text-decoration-none"
                
              >
                <button className="message btn rounded-pill px-3" style={{backgroundColor:pageTheme==="investor"?"rgba(211, 243, 107, 1)":"#fd5901"}}>
                  <span style={{ fontSize: "14px", marginLeft: "2px",color:pageTheme==="investor"?"#000":"#fff" }}>
                    {item.link}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Milestones;
