import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/main";
import NotFound from "./pages/notFound";
import News from "./pages/news/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/item/:id" element={<News/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
