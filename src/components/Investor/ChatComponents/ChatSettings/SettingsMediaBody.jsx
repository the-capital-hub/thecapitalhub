import { useSelector } from "react-redux";
import Modal from "../../../PopUp/Modal/Modal";
import BSCarousel from "../../../Carousel/BSCarousel/BSCarousel";
import BSCarouselItem from "../../../Carousel/BSCarousel/BSCarouselItem/BSCarouselItem";

export default function SettingsMediaBody({ toggleModal, showModal }) {
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const communityProfile = useSelector((state) => state.chat.communityProfile);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );

  const images = isCommunitySelected
    ? communityProfile?.images
    : chatProfile?.images;

  return (
    <>
      <div
        className="px-2 py-3 d-flex gap-2"
        style={{ maxHeight: "20vh", overflow: "auto", maxWidth: "80vw" }}
      >
        {/* Loop media images here */}
        {communityProfile?.images?.length || chatProfile?.images?.length ? (
          <>
            {images?.map(({ image }, index) => (
              <div
                className="bg-white rounded-2 d-flex justify-content-center align-items-center shadow-sm p-2"
                style={{ height: "100px" }}
              >
                <img
                  key={index}
                  src={image}
                  alt="media item"
                  className="rounded-2 object-fit-scale"
                  style={{ height: "90px", width: "auto", maxWidth: "90px" }}
                />
              </div>
            ))}
          </>
        ) : (
          <p className="text-center w-100 p-0 m-0">No media.</p>
        )}
      </div>
      {showModal && images?.length && (
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
              {images?.map(({ image }, index) => (
                <BSCarouselItem key={index} index={index}>
                  <img
                    src={image}
                    alt="media item"
                    className="rounded-2"
                    style={{
                      width: "50vw",
                      height: "50vh",
                      objectFit: "contain",
                    }}
                  />
                </BSCarouselItem>
              ))}
            </BSCarousel>
          </div>
        </Modal>
      )}
    </>
  );
}
