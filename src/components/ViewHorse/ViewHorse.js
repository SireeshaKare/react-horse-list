import React, { useEffect, useState } from 'react';
import { getHorsebyId } from '../../service/HorseList.service';
import { useParams } from 'react-router-dom';
import _ from 'lodash';

const ViewHorse = () => {
  const params = useParams();
  const [horseData, setHorseData] = useState({});

  useEffect(() => {
    getHorsebyId(params.id)
      .then(({ data }) => {
        setHorseData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const { id, name } = horseData;
  let food = _.get(horseData, 'profile.favouriteFood', '');
  let height = _.get(horseData, 'profile.physical.height', '');
  let weight = _.get(horseData, 'profile.physical.weight', '');

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> Horse Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Horse Id</label>
            <div>{id}</div>
          </div>
          <div className="row">
            <label> Horse Name</label>
            <div>{name}</div>
          </div>
          <div className="row">
            <label> Favourite food</label>
            <div>{food}</div>
          </div>
          <div className="row">
            <label> Height</label>
            <div>{height}</div>
          </div>
          <div className="row">
            <label> Weight</label>
            <div>{weight}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHorse;
