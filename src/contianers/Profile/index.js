import UserProfile from "../../assets/user-profile.svg";
import Button from "../../components/Button";
import "./index.css";

const Profile = () => (
  <div className="Profile__main">
    <img src={UserProfile} className="Profile__image" alt="user profile" />
    <div className="Profile__description">
      <p className="Profile__name">First Name Last Name</p>
      <div className="Profile__edit--button">
        <Button>Edit Profile</Button>
      </div>
    </div>
  </div>
);

export default Profile;
