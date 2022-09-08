import { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  /* C R U D OPERATIONS WITH API*/

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const arr = data.map((data) => {
    return (
      <tr>
        <td>{data.title}</td>
        <td>{data.category}</td>
        <td>{data.description}</td>
      </tr>
    );
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        title,
        description,
        category,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 login">
          <form onSubmit={postData}>
            <div className="d-flex align-items-center justify-content-around">
              <label>title</label>
              <input
                type="text"
                required="required"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                name="title"
              />
            </div>
            <br></br>
            <div className="d-flex align-items-center justify-content-around">
              <label>description</label>
              <input
                type="text"
                required="required"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name="description"
              />
            </div>
            <br></br>
            <div className="d-flex align-items-center justify-content-around">
              <label>category</label>
              <input
                type="text"
                required="required"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                name="category"
              />
            </div>
            <br></br>
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
        <div className="col-md-6 user">{arr}</div>
      </div>
    </div>
  );
};

export default Api;
