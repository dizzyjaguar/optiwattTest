import logo from "./logo.svg";
import "./App.css";
import Feature from "./Feature";
import { ReactComponent as Icon1 } from "./assets/icon1.svg";

function App() {
  return (
    <div className="App">
      <h3>FEATURES</h3>
      <h1>Here is more fo what it can do you for you</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit mus
        turpis sed sapien amet, purus condimentum sit.
      </p>
      <div className="FeatureGrid">
        <Feature title={"Feature 1"} icon={<Icon1 />} />
        <Feature title={"Feature 1"} icon={<Icon1 />} />
        <Feature title={"Feature 1"} icon={<Icon1 />} />
        <Feature title={"Feature 1"} icon={<Icon1 />} />
        <Feature title={"Feature 1"} icon={<Icon1 />} />
        <Feature title={"Feature 1"} icon={<Icon1 />} />
      </div>
      <button>Register your Tesla</button>
    </div>
  );
}

export default App;
