import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";

<div>Holi</div>;
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<div>Content not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*
http://hp-api.herokuapp.com/api/characters 
{"name":"Harry Potter",
"alternate_names":[],
"species":"human",
"gender":"male",
"house":"Gryffindor",
"dateOfBirth":"31-07-1980",
"yearOfBirth":1980,
"wizard":true,
"ancestry":"half-blood",
"eyeColour":"green",
"hairColour":"black",
"wand":{"wood":"holly",
"core":"phoenix feather",
"length":11},
"patronus":"stag",
"hogwartsStudent":true,
"hogwartsStaff":false,
"actor":"Daniel Radcliffe",
"alternate_actors":[],
"alive":true,
"image":"http://hp-api.herokuapp.com/images/harry.jpg"},
http://hp-api.herokuapp.com/api/characters
https://www.figma.com/file/oIGGpFh6M0a2AtRwULdqO3/SDG-HP-Wireframe?node-id=0%3A1
*/
