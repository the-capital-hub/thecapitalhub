import React from 'react'
import './meetourteam.scss'

const MeetOurTeam = () => {
  return (
    <>
    <div class="meetourteam_container">
        <div class="card">
          {/* <img src={LightSpeedIcon} alt="" /> */}
          <div class="info">
            <p class="name">Raju</p>
            <p class="designation">Web Developer</p>
          </div>
        </div>
        <div class="card">
          {/* <img src={MatrixIcon} alt="" /> */}
          <div class="info">
            <p class="name">Hari</p>
            <p class="designation">Graphic Designer</p>
          </div>
        </div>
        <div class="card">
          {/* <img src={NexusIcon} alt="" /> */}
          <div class="info">
            <p class="name">Hari</p>
            <p class="designation">UI/UX Designer</p>
          </div>
        </div>
        <div class="card">
          {/* <img src={GIcon} alt="" /> */}
          <div class="info">
            <p class="name">Raghu</p>
            <p class="designation">Project Manager</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetOurTeam
