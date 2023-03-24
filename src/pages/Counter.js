import React, { useReducer } from "react";
// import { initialState, reducer } from '../state/formReducer';

const Counter = () => {
  //inital state declare
  const initalState = 0;
  //write reducer function logics
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      return state - action.payload.count;
    }
  };
  //how to call useReducer hook test
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <button
          className=" px-4 py-3 bg-blue-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
          onClick={() =>
            dispatch({
              type: "DECREMENT",
              payload: {count: 5},
            })
          }
        >
          Decreiment --
        </button>
        <p className="text-5xl text-center font-bold text-purple-500">
          {state}
        </p>
        <button
          className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
          onClick={() => dispatch({ type: "INCREMENT", payload: {count: 5} })}
        >
          Increment ++
        </button>
      </div>
    </div>
  );
};

export default Counter;
