import React, { useReducer } from "react";
import "./App.css";
import HookCounterFive from "./components/UseEffect/HookCounterFive";
import ClassCounter from "./components/UseState/ClassCounter";
import ClassCounterTwo from "./components/UseEffect/ClassCounterTwo";
import HookCounter from "./components/UseState/HookCounter";
import HookCounterFour from "./components/UseState/HookCounterFour";
import HookCounterThree from "./components/UseState/HookCounterThree";
import HookCounterTwo from "./components/UseState/HookCounterTwo";
import ClassMouse from "./components/UseEffect/ClassMouse";
import HookMouse from "./components/UseEffect/HookMouse";
import MouseContainer from "./components/UseEffect/MouseContainer";
import IntervalClassCounter from "./components/UseEffect/IntervalClassCounter";
import IntervalHookCounter from "./components/UseEffect/IntervalHookCounter";
import DataFetching from "./components/UseEffect/DataFetching";
// import ComponentC from "./components/UseContext/ComponentC";
// import CounterOne from "./components/UseReducer/CounterOne";
// import CounterTwo from "./components/UseReducer/CounterTwo";
import CounterThree from "./components/UseReducer/CounterThree";
import ComponentA from "./components/UseReducer/ComponentA";
import ComponentD from "./components/UseReducer/ComponentD";
import ComponentB from "./components/UseReducer/ComponentB";
import ComponentC from "./components/UseReducer/ComponentC";
import DataFetchingOne from "./components/UseReducer/DataFetchingOne";
import DataFetchingTwo from "./components/UseReducer/DataFetchingTwo";
import ParentComponent from "./components/UseCallback/ParentComponent";
import Counter from "./components/UseMemo/Counter";
import FocusInput from "./components/UseRef/FocusInput";
import ClassTimer from "./components/UseRef/ClassTimer";
import HookTimer from "./components/UseRef/HookTimer";
import DocTitleOne from "./components/CustomHook/DocTitleOne";
import DocTitleTwo from "./components/CustomHook/DcoTitleTwo";
import CounterOne from "./components/CustomHook/CounterOne";
import CounterTwo from "./components/CustomHook/CounterTwo";
import UserForm from "./components/CustomHook/UserForm";
// export const UserContext = React.createContext();
// export const channelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <UserForm />
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
    </div>
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     <br></br>
    //     Count - {count}
    //     <br></br>
    //     <br></br>
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
  );
}

export default App;

{
  /* <CounterThree /> */
}
{
  /* <CounterTwo /> */
}
{
  /* <CounterOne /> */
}
{
  /* <UserContext.Provider value={"Abdullah"}>
        <channelContext.Provider value={"SayketChannel"}>
          <ComponentC />
        </channelContext.Provider>
      </UserContext.Provider> */
}
{
  /* <DataFetching /> */
}
{
  /* <ClassMouse /> */
}
{
  /* <IntervalClassCounter />
      <IntervalHookCounter /> */
}
{
  /* <MouseContainer /> */
}
{
  /* <HookMouse /> */
}
<br></br>;
{
  /* <ClassCounterTwo /> */
}
<br></br>;
{
  /* <HookCounterFive /> */
}
{
  /* <HookCounterFour /> */
}
{
  /* <HookCounterThree /> */
}
{
  /* <HookCounterTwo /> */
}
{
  /* <ClassCounterTwo/> */
}
{
  /* <ClassCounter /> */
}
{
  /* <HookCounter /> */
}
