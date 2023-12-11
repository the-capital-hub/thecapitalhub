import { useSelector } from "react-redux";
import Modal from "../../../PopUp/Modal/Modal";
import BSCarousel from "../../../Carousel/BSCarousel/BSCarousel";
import BSCarouselItem from "../../../Carousel/BSCarousel/BSCarouselItem/BSCarouselItem";
import "./SettingsMediaBody.scss";

export default function SettingsMediaBody({ toggleModal, showModal }) {
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const communityProfile = useSelector((state) => state.chat.communityProfile);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );

  const images = isCommunitySelected
    ? communityProfile?.images
    : chatProfile?.images;

  const videos = isCommunitySelected
    ? communityProfile?.videos
    : chatProfile?.videos;

  console.log("All media:", [...images, ...videos]);

  return (
    <>
      <div
        className="px-2 py-3 d-flex gap-2 media-body"
        style={{ maxHeight: "20vh", overflow: "auto", maxWidth: "80vw" }}
      >
        {/* Loop media images here */}
        {communityProfile?.images?.length || chatProfile?.images?.length ? (
          <>
            {images?.map(({ image, _id: id }, index) => (
              <div
                className="bg-white rounded-2 d-flex justify-content-center align-items-center shadow-sm p-2"
                style={{ height: "100px", width: "100px" }}
              >
                <img
                  key={id}
                  src={image}
                  alt="media item"
                  className="rounded-2 object-fit-contain"
                  width={90}
                  height={90}
                />
              </div>
            ))}
            {videos?.map(({ video, _id: id }, index) => {
              return (
                <div
                  className="bg-white rounded-2 d-flex justify-content-center align-items-center shadow-sm p-2"
                  style={{ height: "100px", width: "100px" }}
                >
                  <video
                    src={video}
                    key={id}
                    width={90}
                    height={90}
                    className="rounded-2"
                  ></video>
                </div>
              );
            })}
          </>
        ) : (
          <p className="text-center w-100 p-0 m-0">No media.</p>
        )}
      </div>
      {showModal && [...images, ...videos]?.length && (
        <Modal className="chat-media-popup d-flex flex-column">
          <header className="d-flex justify-content-between align-items-center p-0 mb-2 border-bottom">
            <span>All Media</span>
            <button
              className="btn btn-sm btn-light m-2"
              onClick={() => toggleModal(false)}
            >
              X
            </button>
          </header>
          <div className="all-media">
            <BSCarousel
              id="showAllMedia"
              dataLength={images?.length}
              className="border rounded"
            >
              {[...images, ...videos]?.map(({ _id: id, ...media }, index) => (
                <BSCarouselItem key={id} index={index}>
                  {media?.image && (
                    <img
                      src={media.image}
                      alt="media"
                      className="rounded-2"
                      style={{
                        width: "50vw",
                        height: "50vh",
                        objectFit: "contain",
                      }}
                    />
                  )}
                  {media?.video && (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: "50vw", height: "50vh" }}
                    >
                      <video
                        controls
                        className=""
                        style={{
                          width: "70%",
                        }}
                      >
                        <source src={media?.video} type={"video/mp4"} />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </BSCarouselItem>
              ))}
            </BSCarousel>
          </div>
        </Modal>
      )}
    </>
  );
}
