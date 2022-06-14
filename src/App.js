import './App.css';
import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"
import Contact from "./Contact"
import Skills from "./Skills"
// import SkillContainer from "./SkillContainer"

function App() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("./skills")
    .then((res) => res.json())
    .then((skillData) => setSkills(skillData));
  }, [])


// make main component and import to app for routing?

  return (
    <div className="App">
      <Top />
      <Middle/>
      <Skills/>

{/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Top/>} />
    <Route path="middle" element={<Middle/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="skills-deets" element={<SkillContainer skills={skills}/>} />
    <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
</Routes>
</BrowserRouter> */}
  

  <Contact/>
  <Bottom/>
    </div>
  );
}

export default App;

// {/* <BrowserRouter>
//      <Routes>
//        {/* <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} /> */}
//        <Route path="/" element={<Main />}>
//           <Route path="/welcome" element={<WelcomeHeader />} />
//           <Route path="artists" element={<ArtistPage />} />
//           <Route path="directors" element={<DirectorPage/>} />
//           <Route path="galleries" element={<GalleryPage/>} />
//           <Route path="pieces" element={<PiecePage/>} />
//           <Route path="your-pieces" element={<ArtistProfile/>} />
//           <Route path="*" element={
//         <main style={{ padding: "1rem" }}>
//           <p>There's nothing here!</p>
//         </main>
//       }
//     />
//        </Route>
//      </Routes>
//    </BrowserRouter>
