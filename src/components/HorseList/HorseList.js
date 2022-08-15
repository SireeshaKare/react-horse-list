/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import getHorses from '../../service/HorseList.service';
import HorseListTable from './HorseListTable';

const HorseList = () => {
  const [horses, setHorses] = useState([]);

  useEffect(() => {
    getHorses()
      .then(({ data }) => {
        setHorses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">Horse List</h2>
      <div className="row">
        <HorseListTable data={horses} />
      </div>
    </div>
  );
};

export default HorseList;
