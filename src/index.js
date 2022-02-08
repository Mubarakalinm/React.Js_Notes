import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
// import EventHandle01 from "./Components/EventHandling";
// import EventBind from "./Components/EventBind02";
// import NameList from "./Components/ListRendering05";
// import Form from "./Components/Form";
// import LifeCycleA from "./Components/LifecyleMethods";
import FragmentDemo from "./Components/FragmentDemo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    {/* <EventHandle01/> */}
    {/* <EventBind/> */}
    {/* <NameList/> */}
    {/* <Form /> */}
    {/* <LifeCycleA /> */}
    <FragmentDemo />
  </StrictMode>,
  rootElement
);
