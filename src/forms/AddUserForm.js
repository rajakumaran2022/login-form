import { useState  } from "react";

const AddUserForm = (props) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const initialFormState = {
    id: null,
    username: "",
    email: "",
    mobileNumber: "",
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      if (!user.username || !user.email || !user.mobileNumber) return;
      props.addUser(user);
      console.log("object");
      setUser(initialFormState);
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
      <button className="login-button">LOGIN</button>
    </form>
  );
};

export default AddUserForm;
