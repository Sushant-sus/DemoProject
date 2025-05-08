import MainBodyV2 from "./components/body/MainBodyV2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LayoutTable from "./components/Layout/LayoutList";
// import LayoutItemList from "./components/LayoutItems/LayoutItemList";
// import LayoutItem from "./components/LayoutItems/LayoutItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainBodyV2 />} />
          {/* <Route path="/layout/item/:layoutId" element={<LayoutItem />} /> */}

          {/* <Route path="/layout" element={<LayoutTable />} /> */}
          {/* <Route
            path="/layout/item/list"
            element={<LayoutItemList />}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
