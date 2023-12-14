import { useRef, useState, useEffect } from "react";
// import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import "../Syndicates/Syndicates.scss";
import "./MySchedule.scss";
import ViewSelect from "../../../components/NewInvestor/MyScheduleComponents/ViewSelect";
import CalendarContainer from "../../../components/NewInvestor/MyScheduleComponents/CalenderContainer";
import Meetings from "../../../components/NewInvestor/MyScheduleComponents/Meetings";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsMobileView,
  setPageTitle,
} from "../../../Store/features/design/designSlice";
import ViewMeetingRequestModal from "../../../components/InvestorOneLink/InvestorOneLinkAppointment/Calendar/ViewMeetingRequestsModal/ViewMeetingRequestModal";
import { ModalBsLauncher } from "../../../components/PopUp/ModalBS";
import { useSearchParams } from "react-router-dom";
import { selectUserOneLinkId } from "../../../Store/features/user/userSlice";
import TutorialTrigger from "../../../components/Shared/TutorialTrigger/TutorialTrigger";
import { investorOnboardingSteps } from "../../../components/OnBoardUser/steps/investor";
import moment from "moment";
import { FaRegCalendarAlt } from "react-icons/fa";

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
  const oneLinkId = useSelector(selectUserOneLinkId);
  const isMobileView = useSelector(selectIsMobileView);
  const viewReq = useRef();
  const dateRef = useRef();

  const [view, setView] = useState("week");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMobileView) {
      setView("day");
    }
  }, [isMobileView]);

  useEffect(() => {
    document.title = "My Schedule | The Capital Hub";
    dispatch(setPageTitle("My Schedule"));
  }, [dispatch]);

  const [searchParams, setSearchParams] = useSearchParams();
  const isView = searchParams.get("view");

  useEffect(() => {
    if (isView === "true") {
      viewReq.current.click();
      searchParams.delete("view");
      setSearchParams(searchParams);
    }
  }, [isView, searchParams, setSearchParams]);

  // // Fetch meetingData for user here
  // useEffect(() => {
  //   async function getMeetings() {
  //     try {
  //       const { data } = await getAllMeetings(oneLinkId);
  //       // console.log("Meetings", data);

  //       const result = data.map((meeting, index) => {
  //         return {
  //           ...meeting,
  //           start: new Date(meeting.start),
  //           end: new Date(meeting.end),
  //         };
  //       });

  //       // Save to State
  //       setMeetingsData(result);
  //     } catch (error) {
  //       console.log("Error fetching meetings", error);
  //     }
  //   }

  //   getMeetings();
  // }, [oneLinkId]);

  // function handleViewSelect(selectedView) {
  //   console.log(selectedView);
  //   setView(selectedView);
  // }

  const handleViewRequestClick = () => {
    viewReq.current.click();
  };

  const handleDateClick = (e) => {
    dateRef.current.showPicker();
  };

  return (
    <MaxWidthWrapper>
      <>
        <div className="mySchedule__wrapper">
          {/* <div className="pb-4 pt-2">
          <SmallProfileCard text="My Schedule" />
        </div> */}

          {/* Onboarding popup */}
          <TutorialTrigger
            steps={investorOnboardingSteps.mySchedulePage}
            className={"mb-3"}
          />

          <section className="section__wrapper rounded-4 border mb-3 pb-5 d-flex flex-column gap-5">
            {/* View Select */}
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center border-bottom p-3">
              <div className="d-flex align-items-center">
                {!isMobileView && <ViewSelect setView={setView} view={view} />}
                {isMobileView && (
                  <>
                    <label
                      htmlFor="myScheduleDatePicker"
                      className="d-flex align-items-center gap-3 fs-4"
                      onClick={handleDateClick}
                    >
                      <input
                        type="date"
                        name="date"
                        id="myScheduleDatePicker"
                        className="date-picker visually-hidden"
                        value={date}
                        ref={dateRef}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <span>{moment(date).format("DD-MM-YYYY")}</span>
                      <FaRegCalendarAlt size={25} color="var(--d-l-grey)" />
                    </label>
                  </>
                )}
              </div>
              <div className="mt-3 mt-lg-0">
                <button
                  className="btn btn-investor lh-1 py-2 py-md-3 me-2"
                  onClick={handleViewRequestClick}
                  id="viewRequests"
                >
                  View Requests
                </button>
                {/* <button className="btn-capital lh-1 py-2 py-md-3">
                  Create Meeting
                </button> */}
              </div>
            </div>

            <div className="schedule__container px-md-3">
              {/* Scheduler */}
              <div className="calender__div">
                <CalendarContainer
                  view={view}
                  setView={setView}
                  oneLinkId={oneLinkId}
                  date={date}
                  setDate={setDate}
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
        <ModalBsLauncher id={"meetingRequestsModal"} launchRef={viewReq} />
        <ViewMeetingRequestModal />
      </>
    </MaxWidthWrapper>
  );
}
