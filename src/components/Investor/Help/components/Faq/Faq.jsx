import React from "react";

import "./Faq.scss";

export default function Faq() {
  return (
    <div className="accordion d-flex flex-column gap-3" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What is the "One Like" feature on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              The "One Like" feature on CapitalHub allows users to express their
              interest in a startup's profile with a single click.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            How do I use the "One Like" feature to express interest in a
            startup's profile?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              To use "One Like," simply navigate to the startup's profile and
              click the "Like" button. This action notifies the startup that you
              are interested in their project.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="h3">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c3"
            aria-expanded="false"
            aria-controls="c3"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="c3"
          className="accordion-collapse collapse"
          aria-labelledby="h3"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h4">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c4"
            aria-expanded="false"
            aria-controls="c4"
          >
            What happens after I "One Like" a startup's profile?

          </button>
        </h2>
        <div
          id="c4"
          className="accordion-collapse collapse"
          aria-labelledby="h4"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            When you "One Like" a startup, they receive a notification indicating your interest. This can potentially lead to further discussions and connections.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h5">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c5"
            aria-expanded="false"
            aria-controls="c5"
          >
             How does the "Explore" feature on CapitalHub work?

          </button>
        </h2>
        <div
          id="c5"
          className="accordion-collapse collapse"
          aria-labelledby="h5"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            The "Explore" feature allows users to discover and filter startups, founders, and investors according to their preferences and criteria.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h6">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c6"
            aria-expanded="false"
            aria-controls="c6"
          >
            Can I filter startups by industry or sector using the "Explore" feature?

          </button>
        </h2>
        <div
          id="c6"
          className="accordion-collapse collapse"
          aria-labelledby="h6"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Yes, you can filter startups by industry, sector, or other relevant criteria to find opportunities that align with your interests.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h7">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c7"
            aria-expanded="false"
            aria-controls="c7"
          >
            What criteria can I use to filter founders or investors in the "Explore" section?

          </button>
        </h2>
        <div
          id="c7"
          className="accordion-collapse collapse"
          aria-labelledby="h7"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            The criteria may include location, experience, investment preferences, and more, enabling you to find the right founders or investors for your needs.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h8">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c8"
            aria-expanded="false"
            aria-controls="c8"
          >
           Are the search results in "Explore" updated in real-time?

          </button>
        </h2>
        <div
          id="c8"
          className="accordion-collapse collapse"
          aria-labelledby="h8"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            The search results are typically updated in real-time, ensuring you have access to the most current profiles that match your filters.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h9">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c9"
            aria-expanded="false"
            aria-controls="c9"
          >
            Can I save my search preferences in the "Explore" section for future use?

          </button>
        </h2>
        <div
          id="c9"
          className="accordion-collapse collapse"
          aria-labelledby="h9"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Depending on the platform's features, you may have the option to save your search preferences or set up alerts for new matches.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h10">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c10"
            aria-expanded="false"
            aria-controls="c10"
          >
            How do I contact startups, founders, or investors I find in the "Explore" section?

          </button>
        </h2>
        <div
          id="c10"
          className="accordion-collapse collapse"
          aria-labelledby="h10"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            You can often contact them directly through the platform via messaging or other communication methods.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h11">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c11"
            aria-expanded="false"
            aria-controls="c11"
          >
            Can I use the "Explore" feature to network with other users on CapitalHub?

          </button>
        </h2>
        <div
          id="c11"
          className="accordion-collapse collapse"
          aria-labelledby="h11"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Yes, the "Explore" feature not only helps you find opportunities but also facilitates networking and connections with like-minded users
            </p>
          </div>
        </div>
      </div>













{/* 



      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div> */}
{/* 
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is the "One Like" feature visible to other users on CapitalHub?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              No, the "One Like" feature is a private action. It does not
              display your interest to other users, maintaining your privacy
            </p>
          </div>
        </div>
      </div> */}


    </div>
  );
}
