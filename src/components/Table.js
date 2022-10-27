export const Table = ({ userInfo, handleClick }) => {
  const handleNameClick = (event) => {
    handleClick(event.target.id);
  };
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head-row">
          <th className="table-head-header">name</th>
          <th className="table-head-header">username</th>
          <th className="table-head-header">email</th>
          <th className="table-head-header">phone</th>
        </tr>
      </thead>
      <tbody className="table-body users">
        {userInfo.map((user, index) => {
          return (
            <tr key={index} className="user">
              <td className="table-body-data">
                <button
                  onClick={handleNameClick}
                  className="data-name"
                  type="button"
                  id={user.id}
                >
                  {user.name}
                </button>
              </td>
              <td className="table-body-data">
                <p className="data-username"> {user.username}</p>
              </td>
              <td className="table-body-data">
                <p className="data-email"> {user.email}</p>
              </td>
              <td className="table-body-data">
                <p className="data-phone"> {user.phone}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
