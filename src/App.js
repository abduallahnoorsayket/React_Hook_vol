import "./App.css";
import HookCounterFive from "./components/UseEffect/HookCounterFive";
import ClassCounter from "./components/UseState/ClassCounter";
import ClassCounterTwo from "./components/UseEffect/ClassCounterTwo";
import HookCounter from "./components/UseState/HookCounter";
import HookCounterFour from "./components/UseState/HookCounterFour";
import HookCounterThree from "./components/UseState/HookCounterThree";
import HookCounterTwo from "./components/UseState/HookCounterTwo";

function App() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <ClassCounterTwo />
      <br></br>
      <HookCounterFive />
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounterTwo/> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
