import { useEffect, useState } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import Meetings from "../../../components/NewInvestor/MyScheduleComponents/Meetings";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { getAllMeetings } from "../../../Service/user";

const MEETINGTYPES = ["daily", "weekly", "monthly"];
const EVENTS = [
  {
    start: new Date(2023, 8, 18, 9, 30),
    end: new Date(2023, 8, 18, 12, 45),
    title: "Work",
  },
  {
    start: new Date(2023, 8, 19, 10, 0),
    end: new Date(2023, 8, 19, 11, 30),
    title: "Test Event",
  },
  {
    start: new Date(2023, 8, 20, 12, 0),
    end: new Date(2023, 8, 20, 13, 0),
    title: "Test Event",
  },
  {
    start: new Date(2023, 8, 21, 13, 30),
    end: new Date(2023, 8, 21, 16, 45),
    title: "Test Event",
  },
  {
    start: new Date("2023-10-18T11:00:00.000Z"),
    end: new Date("2023-10-18T12:15:00.000Z"),
    title: "Test Event",
  },
];

export default function MySchedule() {
  // Fetch loggedInUser
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [view, setView] = useState("week");
  const [meetingsData, setMeetingsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    window.title = "My Schedule | The Capital Hub";
    dispatch(setPageTitle("My Schedule"));
  }, []);

  // Fetch meetingData for user here
  useEffect(() => {
    async function getMeetings() {
      try {
        const { data } = await getAllMeetings(loggedInUser.oneLinkId);
        console.log("Meetings", data);

        // Save to State
        setMeetingsData(data);
      } catch (error) {
        console.log("Error fetching meetings", error);
      }
    }

    getMeetings();
  }, []);

  function handleViewSelect(selectedView) {
    console.log(selectedView);
    setView(selectedView);
  }

  console.log("from state", meetingsData);
  return (
    <MaxWidthWrapper>
      <div className="mySchedule__wrapper px-3 border-start">
        {/* <div className="pb-4 pt-2">
          <SmallProfileCard text="My Schedule" />
        </div> */}
        <section className="section__wrapper bg-white rounded-3 border mb-5 pb-5 d-flex flex-column gap-5">
          {/* View Select */}
          <div className="d-flex flex-column flex-lg-row gap-4 justify-content-between align-items-center border-bottom p-3">
            <ViewSelect handleViewSelect={handleViewSelect} />
            <button className="btn-capital lh-1 py-0 py-md-3">
              Create Meeting
            </button>
          </div>

          <div className="schedule__container px-3">
            {/* Scheduler */}
            <div className="calender__div">
              <CalendarContainer
                view={view}
                meetingsData={meetingsData || EVENTS}
                setView={setView}
              />
            </div>

            {/* Meetings */}
            <div className="meetings__div p-3 border rounded-4 d-flex flex-column gap-3">
              {MEETINGTYPES.map((type, index) => {
                return (
                  <Meetings
                    key={type}
                    meetingType={type}
                    meetingsData={EVENTS}
                    view={view}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
