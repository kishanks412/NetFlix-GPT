import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Provider store={appStore}>
          <Body />
        </Provider>
      </div>
    </div>
  );
}

export default App;
