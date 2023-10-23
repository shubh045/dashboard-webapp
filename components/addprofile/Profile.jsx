import "@styles/profileform.css";

const Profile = ({ nextTab, isOpen, closeModal, user, setUser, isProfileAdded, setIsProfileAdded }) => {

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({...prev, [name]: value}));
  }

  const handleNextButton = () => {
    if(user.name.length>0 && user.email.length>0 && user.phone.length>0){
      nextTab(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProfileAdded(true);
    closeModal(false);
    // setUser({});
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      {isOpen && (
        <div className="modal-formc">
          <div className="input-field-container">
            <label htmlFor="name">Enter Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Eg. John Doe"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field-container">
            <label htmlFor="email"> Enter Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Eg. John@xyz.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field-container">
            <label htmlFor="phone">Enter Phone*</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Eg. 9123456789&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v"
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="button" onClick={handleNextButton}>
              Next
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <div className="modal-formc">
          <div className="input-field-container">
            <label htmlFor="instagram">
              Instagram Link <span>(Optional)</span>
            </label>
            <input
              type="text"
              name="instagram"
              id="instagram"
              placeholder="Eg. ..instagram.com/username"
              onChange={handleChange}
            />
          </div>
          <div className="input-field-container">
            <label htmlFor="youtube">
              Youtube Link <span>(Optional)</span>
            </label>
            <input
              type="text"
              name="youtube"
              id="youtube"
              placeholder="Eg. ..youtebe/username"
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button id="back-button" type="button" onClick={() => closeModal(false)}>
              Back
            </button>
            <button type="submit">
              Done
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Profile;
