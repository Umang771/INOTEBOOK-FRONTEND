import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import NoteState from './context/NoteState';
import Login from './component/Login';
import SignUp from './component/SignUp';
//import About from './component/About';

import Background from './wallpaperflare.com_wallpaper.jpg';
import Editnote from './component/Editnote';
import UserInfo from './component/UserInfo';
import ContactUs from './component/ContactUs';

function App() {
  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "right"
  };
  return (
    <>
      <NoteState>
        {/* //all the routes and components are wrtapped under notestate so that they can use NoteContext and its functions */}
       <div style={sectionStyle}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/contactUs" element={<ContactUs/>}>
            </Route>
            <Route path="/Login" element={<Login />}>
            </Route>
            <Route path="/UserInfo" element={<UserInfo />}>
            </Route>
            <Route path="/SignUp" element={<SignUp />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
{/*             <Route path="#Editnote" element={<Editnote/>}>
            </Route> */}
          </Routes>
        </Router>
       </div>
      </NoteState>
    </>
  );
}

export default App;
