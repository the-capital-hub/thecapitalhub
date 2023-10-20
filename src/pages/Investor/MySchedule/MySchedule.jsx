import { useRef, useState, useEffect } from "react";
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
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import MeetingRequestModal from "../../../components/InvestorOneLink/InvestorOneLinkAppointment/Calendar/MeetingRequestsModal/ViewMeetingRequestModal";
import { ModalBsLauncher } from "../../../components/PopUp/ModalBS";
import { useSearchParams } from "react-router-dom";

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
  const viewReq = useRef();

  const [view, setView] = useState("week");
  const [meetingsData, setMeetingsData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.title = "My Schedule | The Capital Hub";
    dispatch(setPageTitle("My Schedule"));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const isView = searchParams.get("view");

  useEffect(() => {
    if (isView === "true") {
      viewReq.current.click();
      searchParams.delete("view");
      setSearchParams(searchParams);
    }
  }, [isView, searchParams, setSearchParams]);

  // Fetch meetingData for user here
  useEffect(() => {
    async function getMeetings() {
      try {
        const { data } = await getAllMeetings(loggedInUser.oneLinkId);
        // console.log("Meetings", data);

        const result = data.map((meeting, index) => {
          return {
            ...meeting,
            start: new Date(meeting.start),
            end: new Date(meeting.end),
          };
        });

        // Save to State
        setMeetingsData(result);
      } catch (error) {
        console.log("Error fetching meetings", error);
      }
    }

    getMeetings();
  }, []);

  // function handleViewSelect(selectedView) {
  //   console.log(selectedView);
  //   setView(selectedView);
  // }

  const handleViewRequestClick = () => {
    viewReq.current.click();
  };

  return (
    <MaxWidthWrapper>
      <>
        <div className="mySchedule__wrapper px-3 border-start">
          {/* <div className="pb-4 pt-2">
          <SmallProfileCard text="My Schedule" />
        </div> */}
          <section className="section__wrapper bg-white rounded-3 border mb-5 pb-5 d-flex flex-column gap-5">
            {/* View Select */}
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center border-bottom p-3">
              <div className="d-flex align-items-center">
                <ViewSelect setView={setView} view={view} />
              </div>
              <div className="mt-3 mt-lg-0">
                <button
                  className="btn-capital lh-1 py-2 py-md-3 me-2"
                  onClick={handleViewRequestClick}
                >
                  View requests
                </button>
                <button className="btn-capital lh-1 py-2 py-md-3">
                  Create Meeting
                </button>
              </div>
            </div>

            <div className="schedule__container px-3">
              {/* Scheduler */}
              {meetingsData ? (
                <div className="calender__div">
                  <CalendarContainer
                    view={view}
                    meetingsData={meetingsData || EVENTS}
                    setView={setView}
                  />
                </div>
              ) : (
                <SpinnerBS className="d-flex w-100 justify-content-center" />
              )}

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
        <ModalBsLauncher id={"meetingRequestsModal"} launchRef={viewReq} />
        <MeetingRequestModal />
      </>
    </MaxWidthWrapper>
  );
}
