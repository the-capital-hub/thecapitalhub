import { Form } from "react-bootstrap";
import "./ProfileInformationForm.scss";
import { Button, InputGroup } from "react-bootstrap";
import IconCloudUpload from "../../../Investor/SvgIcons/IconCloudUpload";

export default function ProfileInformationForm() {
  async function handleProfileInfoSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form
      onSubmit={handleProfileInfoSubmit}
      className="px-3 px-lg-4 pb-4 d-flex flex-column gap-3 profile-information-form"
    >
      <Form.Group controlId="onelink-profilePicture" className="form-group">
        <p className="mb-3 fs-5">Profile Picture</p>
        <Form.Label style={{ cursor: "pointer" }} className="picture-label">
          <IconCloudUpload height={40} width={40} />
        </Form.Label>
        <input
          type="file"
          name="profilePicture"
          id="onelink-profilePicture"
          className="visually-hidden"
        />
      </Form.Group>

      <InputGroup className="flex-column flex-md-row gap-4">
        <Form.Group controlId="onelink-designation" className="form-group">
          <Form.Label className="text-capitalize">Designation</Form.Label>
          <Form.Control type="text" name="designation" />
        </Form.Group>
        <Form.Group controlId="onelink-location" className="form-group">
          <Form.Label className="text-capitalize">location</Form.Label>
          <Form.Control type="text" name="location" />
        </Form.Group>
      </InputGroup>

      <Form.Group controlId="onelink-bio" className="form-group">
        <Form.Label className="text-capitalize">bio</Form.Label>
        <Form.Control as={"textarea"} rows={5} type="text" name="bio" />
      </Form.Group>

      <div className="divider d-flex align-items-center">
        <span
          className=""
          style={{
            flex: "1 1 0",
            opacity: "0.5",
            borderTop: "1px solid var(--darkMode-currentTheme)",
          }}
        ></span>
        <span className="px-3 my-3 fs-6 opacity-75">Social Links</span>
        <span
          className=""
          style={{
            flex: "1 1 0",
            opacity: "0.5",
            borderTop: "1px solid var(--darkMode-currentTheme)",
          }}
        ></span>
      </div>

      <InputGroup className="flex-column flex-md-row gap-4">
        <Form.Group controlId="onelink-website" className="form-group">
          <Form.Label className="text-capitalize">website</Form.Label>
          <Form.Control type="url" name="website" />
        </Form.Group>
        <Form.Group controlId="onelink-linkedin" className="form-group">
          <Form.Label className="text-capitalize">LinkedIn</Form.Label>
          <Form.Control type="url" name="linkedin" />
        </Form.Group>
      </InputGroup>
      <InputGroup className="flex-column flex-md-row gap-4">
        <Form.Group controlId="onelink-facebook" className="form-group">
          <Form.Label className="text-capitalize">facebook</Form.Label>
          <Form.Control type="url" name="facebook" />
        </Form.Group>
        <Form.Group controlId="onelink-twitter" className="form-group">
          <Form.Label className="text-capitalize">twitter</Form.Label>
          <Form.Control type="url" name="twitter" />
        </Form.Group>
      </InputGroup>
      <Form.Group controlId="onelink-instagram" className="form-group">
        <Form.Label className="text-capitalize">instagram</Form.Label>
        <Form.Control type="url" name="instagram" />
      </Form.Group>

      {/* Action button */}
      <div className="d-flex">
        <Button type="submit" variant="investor" className="ms-auto">
          Save
        </Button>
      </div>
    </Form>
  );
}
