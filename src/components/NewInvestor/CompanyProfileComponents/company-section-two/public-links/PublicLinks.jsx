import {
  Facebook,
  Google,
  Twitter,
  Linkedin,
  PlayStore,
  Instagram,
  Website,
} from "../../../../../Images/Investor/CompanyProfile";
import SocialLink from "./SocialLink";

export default function PublicLinks({ socialLinks }) {
  const Icons = {
    website: Website,
    google: Google,
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    playstore: PlayStore,
    instagram: Instagram,
  };

  return (
    <div
      className="public__links d-flex flex-column gap-4"
      style={{ color: "var(--d-l-grey)" }}
    >
      <h6 className="div__heading">Public Links</h6>
      <div className="d-flex gap-3 flex-wrap">
        {socialLinks
          ? Object.keys(socialLinks).map((key, index) => {
              return (
                <SocialLink
                  icon={Icons[key]}
                  name={key}
                  key={key}
                  socialLinks={socialLinks}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}
