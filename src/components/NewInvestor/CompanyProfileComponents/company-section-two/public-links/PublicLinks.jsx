import {
  Facebook,
  Google,
  Twitter,
  Linkedin,
  PlayStore,
} from "../../../../../Images/Investor/CompanyProfile";
import SocialLink from "./SocialLink";

export default function PublicLinks() {
  // Fetch public links data for the company
  const socialLinks = {
    google: { name: "Website", icon: Google },
    facebook: { name: "Facebook", icon: Facebook },
    twitter: { name: "Twitter", icon: Twitter },
    playstore: { name: "Playstore", icon: PlayStore },
    linkedin: { name: "LinkedIn", icon: Linkedin },
  };

  return (
    <div className="public__links d-flex flex-column gap-4">
      <h6 className="div__heading">Public Links</h6>
      <div className="d-flex gap-3 flex-wrap">
        <SocialLink
          icon={socialLinks.google.icon}
          name={socialLinks.google.name}
        />
        <SocialLink
          icon={socialLinks.facebook.icon}
          name={socialLinks.facebook.name}
        />
        <SocialLink
          icon={socialLinks.twitter.icon}
          name={socialLinks.twitter.name}
        />
        <SocialLink
          icon={socialLinks.playstore.icon}
          name={socialLinks.playstore.name}
        />
        <SocialLink
          icon={socialLinks.linkedin.icon}
          name={socialLinks.linkedin.name}
        />
      </div>
    </div>
  );
}
