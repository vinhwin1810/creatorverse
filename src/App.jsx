import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/:id" element={<ViewCreator />} />
        <Route path="/:id/edit" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
