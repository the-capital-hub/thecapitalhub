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
            What is the "OneLink" feature on Capital Hub?
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
              The "OneLink" feature on Capital Hub allows users to express their
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
            How do I use the "OneLink" feature to express interest in a
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
              To use "OneLink," simply navigate to the startup's profile and
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
            Is the "OneLink" feature visible to other users on Capital Hub?
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
              No, the "OneLink" feature is a private action. It does not
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
            What happens after I "OneLink" a startup's profile?

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
            When you "OneLink" a startup, they receive a notification indicating your interest. This can potentially lead to further discussions and connections.
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
             How does the "Explore" feature on Capital Hub work?

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
            Can I use the "Explore" feature to network with other users on Capital Hub?

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

















      <div className="accordion-item">
        <h2 className="accordion-header" id="h12">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c12"
            aria-expanded="false"
            aria-controls="c12"
          >
             Can I upload documents to Capital Hub for my startup or investment profile?
          </button>
        </h2>
        <div
          id="c12"
          className="accordion-collapse collapse"
          aria-labelledby="h12"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Yes, Capital Hub allows users to upload relevant documents, such as business plans, pitch decks, financial statements, and more, to enhance their profiles.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h13">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c13"
            aria-expanded="false"
            aria-controls="c13"
          >
             How do I upload documents to my Capital Hub profile?
          </button>
        </h2>
        <div
          id="c13"
          className="accordion-collapse collapse"
          aria-labelledby="h13"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            To upload documents, access your profile, and look for the "Document Upload" section. Follow the instructions to upload and manage your files.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h14">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c14"
            aria-expanded="false"
            aria-controls="c14"
          >
            Are there any restrictions on the types of documents I can upload?

          </button>
        </h2>
        <div
          id="c14"
          className="accordion-collapse collapse"
          aria-labelledby="h14"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            While Capital Hub generally accepts a wide range of document types, it's important to adhere to any guidelines or restrictions outlined on the platform.
            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h15">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c15"
            aria-expanded="false"
            aria-controls="c15"
          >
            Are the uploaded documents visible to all users, or can I control who accesses them?
          </button>
        </h2>
        <div
          id="c15"
          className="accordion-collapse collapse"
          aria-labelledby="h15"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            You can typically control the visibility of your documents. You can choose to share them with specific users or make them public on your profile.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h16">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c16"
            aria-expanded="false"
            aria-controls="c16"
          >
           What is the "Create Post" feature on Capital Hub?
          </button>
        </h2>
        <div
          id="c16"
          className="accordion-collapse collapse"
          aria-labelledby="h16"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            The "Create Post" feature allows users to share updates, insights, and information with the Capital Hub community through posts.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h17">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c17"
            aria-expanded="false"
            aria-controls="c17"
          >
            How do I create a post on Capital Hub? 
          </button>
        </h2>
        <div
          id="c17"
          className="accordion-collapse collapse"
          aria-labelledby="h17"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            To create a post, log in to your Capital Hub account, navigate to the "Create Post" section, and follow the provided prompts to compose and share your content.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h18">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c18"
            aria-expanded="false"
            aria-controls="c18"
          >
            What can I post on Capital Hub using the "Create Post" feature?
          </button>
        </h2>
        <div
          id="c18"
          className="accordion-collapse collapse"
          aria-labelledby="h18"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            You can share a variety of content, including news, articles, updates about your startup, investment insights, industry trends, and more.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h19">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c19"
            aria-expanded="false"
            aria-controls="c19"
          >
            Are there any guidelines or restrictions for the content I post on Capital Hub?
          </button>
        </h2>
        <div
          id="c19"
          className="accordion-collapse collapse"
          aria-labelledby="h19"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Capital Hub typically has community guidelines to ensure that the content shared is relevant, respectful, and compliant with platform policies.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h20">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c20"
            aria-expanded="false"
            aria-controls="c20"
          >
           What is the "Create Community" feature, and how does it work?
          </button>
        </h2>
        <div
          id="c20"
          className="accordion-collapse collapse"
          aria-labelledby="h20"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            "Create Community" allows users to establish their own dedicated community spaces within Capital Hub, tailored to specific interests or industries.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h21">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c21"
            aria-expanded="false"
            aria-controls="c21"
          >
            How can I create a community on Capital Hub?
          </button>
        </h2>
        <div
          id="c21"
          className="accordion-collapse collapse"
          aria-labelledby="h21"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            To create a community, go to the "Create Community" section, provide the necessary details, and customize your community's settings and preferences.

            </p>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="h22">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c22"
            aria-expanded="false"
            aria-controls="c22"
          >
             What are some use cases for creating a community on Capital Hub?
          </button>
        </h2>
        <div
          id="c22"
          className="accordion-collapse collapse"
          aria-labelledby="h22"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            You can create a community to discuss industry-specific topics, connect with like-minded individuals, or facilitate discussions around a particular niche.

            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h23">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c23"
            aria-expanded="false"
            aria-controls="c23"
          >
            Can I invite specific users to join my community, or is it open to all Capital Hub members? 
          </button>
        </h2>
        <div
          id="c23"
          className="accordion-collapse collapse"
          aria-labelledby="h23"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Depending on your preferences, you can make your community public and open to all members or send invitations to specific users to join.
            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h24">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c24"
            aria-expanded="false"
            aria-controls="c24"
          >
            What is the "My Community" feature, and how does it help me manage my community? 
          </button>
        </h2>
        <div
          id="c24"
          className="accordion-collapse collapse"
          aria-labelledby="h24"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            "My Community" is a dashboard that allows community administrators to oversee and customize their community, manage members, and moderate content.

            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h25">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c25"
            aria-expanded="false"
            aria-controls="c25"
          >
           How do I access the "My Community" dashboard as a community administrator?
          </button>
        </h2>
        <div
          id="c25"
          className="accordion-collapse collapse"
          aria-labelledby="h25"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
              
            As an administrator, you can access the "My Community" dashboard by visiting your community and clicking on the administrative options.

            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h26">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c26"
            aria-expanded="false"
            aria-controls="c26"
          >
           Can I customize the look and feel of my community using "My Community"?
          </button>
        </h2>
        <div
          id="c26"
          className="accordion-collapse collapse"
          aria-labelledby="h26"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Yes, "My Community" typically provides customization options for the community's appearance, rules, and settings.

            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h27">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c27"
            aria-expanded="false"
            aria-controls="c27"
          >
            What tools are available in "My Community" for member management and moderation?
          </button>
        </h2>
        <div
          id="c27"
          className="accordion-collapse collapse"
          aria-labelledby="h27"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            "My Community" often offers tools for member invites, content moderation, member roles, and other features to help you maintain a positive community environment.
            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h28">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c28"
            aria-expanded="false"
            aria-controls="c28"
          >
            What is the "Saved Posts" feature on Capital Hub?
          </button>
        </h2>
        <div
          id="c28"
          className="accordion-collapse collapse"
          aria-labelledby="h28"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            he "Saved Posts" feature allows users to bookmark and organize posts that they find interesting and want to revisit later.

            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h29">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c29"
            aria-expanded="false"
            aria-controls="c29"
          >
             How do I save a post on Capital Hub for future reference?
          </button>
        </h2>
        <div
          id="c29"
          className="accordion-collapse collapse"
          aria-labelledby="h29"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            To save a post, you can typically click on a "Save" or "Bookmark" option associated with the post.
            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h30">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c30"
            aria-expanded="false"
            aria-controls="c30"
          >
           Can I organize and categorize my saved posts?
          </button>
        </h2>
        <div
          id="c30"
          className="accordion-collapse collapse"
          aria-labelledby="h30"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Depending on the platform's features, you may have options to create folders or tags to categorize and organize your saved posts for easier access.

            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h31">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c31"
            aria-expanded="false"
            aria-controls="c31"
          >
            Are saved posts visible to other users on Capital Hub?
          </button>
        </h2>
        <div
          id="c31"
          className="accordion-collapse collapse"
          aria-labelledby="h31"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Saved posts are generally private and visible only to you. They serve as a personal collection of content you wish to revisit.
            </p>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header" id="h32">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#c32"
            aria-expanded="false"
            aria-controls="c32"
          >
            Can I unsave or remove posts from my saved posts collection? 
          </button>
        </h2>
        <div
          id="c32"
          className="accordion-collapse collapse"
          aria-labelledby="h32"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>
            Yes, you can typically unsave or remove posts from your saved posts collection at any time
            </p>
          </div>
        </div>
      </div> 



    </div>
  );
}
