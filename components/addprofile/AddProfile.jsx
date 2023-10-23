import ProfileForm from "./ProfileForm";
import { useState } from "react";

import { BsWhatsapp } from "react-icons/bs";
import {AiOutlineInstagram, AiOutlineYoutube} from 'react-icons/ai';
import {HiOutlineMail} from 'react-icons/hi';

const AddProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileAdded, setIsProfileAdded] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  if (isModalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className={!isProfileAdded ? "card profile-card1" : "card"} id="profile-card">
        {!isProfileAdded && (
          <>
            <button
              type="button"
              className="add-icon"
              onClick={() => setIsModalOpen(true)}
            >
              +
            </button>
            <p id="add-profile-text">Add Profile</p>
          </>
        )}

        {isProfileAdded && (
          <div className="user-data">
            <h3 className="user-name">{user.name}</h3>
            <div className="user-socials">
              <div className="inner-social-container">
                <div className="social-container">
                  <div id="whatsapp">
                    <BsWhatsapp />
                  </div>
                  <p>{`+91 ${user.phone}`}</p>
                </div>
                <div className="social-container">
                  <div id="instagram1">
                    <AiOutlineInstagram />
                  </div>
                  <p>{user.instagram.slice(14)}</p>
                </div>
              </div>

              <div className="inner-social-container">
                <div className="social-container">
                  <div id="mail">
                    <HiOutlineMail />
                  </div>
                  <p>{user.email}</p>
                </div>
                <div className="social-container">
                  <div id="youtube1">
                    <AiOutlineYoutube />
                  </div>
                  <p>{user.youtube.slice(8)}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isModalOpen && (
        <ProfileForm
          closeModal={setIsModalOpen}
          isModalOpen={isModalOpen}
          user={user}
          setUser={setUser}
          isProfileAdded={isProfileAdded}
          setIsProfileAdded={setIsProfileAdded}
        />
      )}
    </>
  );
};

export default AddProfile;
