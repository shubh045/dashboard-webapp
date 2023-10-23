"use client";

import '@styles/profileform.css';
import {useState} from 'react';
import Profile from './Profile';

const ProfileForm = ({isModalOpen,closeModal,user, setUser, isProfileAdded, setIsProfileAdded}) => {

    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={isModalOpen ? "modal-background" : ""}>
        <div className={isModalOpen ? "overlay" : ""} onClick={() => closeModal(false)}></div>
        <div className={isOpen ? "modal-container" : "modal-container modal-container-second"}>
            <div className="modal-head">
                <h3>Add New Profile</h3>
                <p onClick={() => closeModal(false)}>x</p>
            </div>
            <div className="modal-nav">
                <div className="modal-nav-item" onClick={() => setIsOpen(true)}>
                    <p>Basic</p>
                    <hr className={isOpen ? 'hr' : 'secondary-hr'}  />
                </div>
                <div className="modal-nav-item" onClick={() => setIsOpen(false)}>
                    <p>Contact</p>
                    <hr className={!isOpen ? 'hr' : 'secondary-hr'}  />
                </div>
            </div>
            <Profile nextTab={setIsOpen} isOpen={isOpen} closeModal={closeModal} user={user} setUser={setUser} isProfileAdded={isProfileAdded} setIsProfileAdded={setIsProfileAdded} />
        </div>
    </div>
  )
}

export default ProfileForm