import React from 'react'
// import { Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SkillContainer from "./SkillContainer"

export default function Skills() {


    return (
        <div className="skills">
                <h2>My Skills.</h2>
                <div className="skill-row">
                    <img className="code-img" src="https://media.giphy.com/media/SLGxGjoAunELLwBIbx/giphy.gif"
                        alt="code-img"/>

                    <h3>Design + Development</h3>
                    <p>I may be green in the realms of coding and programming, but I'm a hard worker and a fast learner.
                        <em>Who</em> doesn't enjoy that combination!?</p>
                        {/* <div>
                            <nav
                                style={{
                                borderBottom: "solid 1px",
                                paddingBottom: "1rem"
                            }}
                            >
                            <Link to="/skills-deets">Tech Skills</Link>
                            </nav>
                        </div> */}
                </div>

                <div className="skill-row">
                    <img className="buzz-img" src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/264838092_10222973739746665_1614480621864476184_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0debeb&_nc_ohc=dZ1JEq3L98sAX9O28VB&_nc_ht=scontent-lga3-2.xx&oh=323bf01a457565352f5d3661e3729915&oe=61B4C44F" alt="buzz-img"/>

                    <h3>Illustrator</h3>
                    <p>I've been drawing since I was six years old and have been making comics ever since. While largely
                        self-taught, I
                        maintain a consistent interest in foundational training and innovation in my creative
                        expression.</p>

                </div>
                <hr/>
                </div>
    )
}

//     <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         <Link to="/skill-deets">Tech Skills</Link>
//       </nav>



// |{" "}