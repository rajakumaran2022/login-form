const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>
          <h5>UserName</h5>
        </th>
        <th>
          <h5>Email</h5>
        </th>
        <th>
          <h5>Mobile Number</h5>
        </th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.mobileNumber}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="edit"
              >
                EDIT
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="delete"
              >
                DELETE
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
