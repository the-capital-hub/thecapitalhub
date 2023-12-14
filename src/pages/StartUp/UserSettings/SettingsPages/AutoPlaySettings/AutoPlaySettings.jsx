import React from 'react'
import './AutoPlaySettings.scss'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function AutoPlaySettings() {
    const navigate = useNavigate();

  return (
    <div className="auto-play-settings">
    <h4 className="m-0 px-3 py-3 d-flex align-items-center gap-2">
      <Button
        className="back-button btn-sm  rounded-circle border-none"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft size={15} />
      </Button>
    Autoplay videos
    </h4>
    <div className="border-top px-3 py-3 d-flex flex-column gap-2">
      <span className="fs-6 text-secondary">
      Autoplay videos that appear on  Capital hub.
      </span>
      <div className="onboarding_switch_wrapper">

      <div className="form-check form-switch">
          <input
            className={`form-check-input `}
            type="checkbox"
            role="switch"
            id="onboardingToggle"
            defaultChecked={false}
         
          />
        </div>
        </div>

      <span className="fs-6 text-secondary">
      Autoplay videos in your feed
      </span>
    </div>
  </div>
  )
}

export default AutoPlaySettings