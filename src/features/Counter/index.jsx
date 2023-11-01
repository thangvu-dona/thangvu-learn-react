import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { decrease, inscrease } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = inscrease(); // action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(); // action creator
    dispatch(action);
  };
  return (
    <div>
      Counter: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
