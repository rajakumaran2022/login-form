import {  useState } from "react";

const EditUserForm = (props) => {

  const [user, setUser] = useState(props.currentUser);

  // useEffect(() => {
  //   setUser(props.currentUser);
  // }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.username || !user.email || !user.mobileNumber) return;
        props.updateUser(user.id, user);
      }}
    >
        <div className="d-flex align-items-center justify-content-between">
      <label>UserName</label>
      <input
        type="text"
        required="required"
        onChange={handleInputChange}
        name="username"
        value={user.username}
      />
      </div>
      <br></br>
      <div className="d-flex align-items-center justify-content-between">
      <label>Email</label>
      <input
        type="email"
        required="required"
        onChange={handleInputChange}
        name="email"
        value={user.email}
      />
      </div>
      <br></br>
      <div className="d-flex align-items-center justify-content-between">
      <label>MobileNumber</label>
      <input
        type="tel"
        minLength="10"
        maxLength="10"
        required="required"
        onChange={handleInputChange}
        name="mobileNumber"
        value={user.mobileNumber}
      />
      </div>
      <br></br>
      <button className="login-button1">UPDATE</button>
   
    </form>
  );
};

export default EditUserForm;
