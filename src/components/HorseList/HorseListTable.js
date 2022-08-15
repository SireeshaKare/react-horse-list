import React from 'react';
import { useNavigate } from 'react-router-dom';

const HorseListTable = ({ data }) => {
  let navigate = useNavigate();

  const handleButtonClick = (id) => {
    let path = `/horse/${id}`;

    navigate(path);
  };

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Horse Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((res) => {
          return (
            <tr key={res.id}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleButtonClick(res.id)}
                >
                  View
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default HorseListTable;
