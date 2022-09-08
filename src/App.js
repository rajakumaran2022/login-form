import React, { useState } from "react";
import AddUserForm from "./forms/AddUserForm";
import UserTable from "./Table/UserTable";
import EditUserForm from "./forms/EditUserForm";
import "./contact.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const usersData = [
    {
      id: 1,
      username: "raj",
      email: "raj@gmail.com",
      mobileNumber: 1274356748,
    },
    {
      id: 2,
      username: "kumar",
      email: "kumar@fmail.com",
      mobileNumber: 1274456748,
    },
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    username: "",
    email: "",
    mobileNumber: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      username: user.username,
      email: user.email,
      mobileNumber: user.mobileNumber,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 login">
          {editing ? (
            <div>
              <h4>EDIT LOGIN</h4>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h4>LOGIN</h4>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="col-md-8 user">
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
