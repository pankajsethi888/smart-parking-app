import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SQLdb = () => {
  const [number, setNumber] = useState("");
  const [parkedCarList, setParkedCarList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setParkedCarList(response.data);
    });
  }, [parkedCarList]);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      carNumber: number,
      timeOfPark: new Date().toISOString().slice(0, 19).replace("T", " "),
    }).then(() => {
      setParkedCarList([...parkedCarList, { carNumber: number }]);
    });
  };

  const deleteReview = (number) => {
    Axios.delete(`http://localhost:3001/api/delete/${number}`);
    history.go(0);
  };

  return (
    <div className="sqldb">
      <div className="form">
        <label>
          <h2>Vehicle Number:</h2>
        </label>
        <input
          type="text"
          name="carNumber"
          onChange={(e) => setNumber(e.target.value)}
        ></input>

        <button className="submit-button" onClick={submitReview}>
          Submit
        </button>
        {parkedCarList.map((val) => {
          return (
            <div className="plate">
              <p>
                {val.carNumber} | ({val.timeOfPark})
              </p>
              <button
                onClick={() => {
                  deleteReview(val.carNumber);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SQLdb;
