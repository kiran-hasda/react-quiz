import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  // return { count: 0, step: 1 };

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "SetCount":
      return { ...state, count: action.payload };
    case "SetStep":
      return { ...state, step: action.payload };
    case "Reset":
      return initialState;
    default:
      throw new Error("Unknown Action");
  }
  //   if (action.type === "inc") return state + action.payload;
  //   if (action.type === "dec") return state + action.payload;
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "SetCount") return action.payload;
}

function DateCounter() {
  //const [count, setCount] = useState(0);

  //const [count, dispatch] = useReducer(reducer, 0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // dispatch({ type: "dec", payload: -1 });
    // dispatch(-1);
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    //dispatch({ type: "inc", payload: 1 });
    //dispatch(1);
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "SetCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    //  setStep(Number(e.target.value));
    dispatch({ type: "SetStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "Reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
