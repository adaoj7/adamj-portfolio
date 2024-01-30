import { useState } from "react";
import "./App.css";
import Profile from "./assets/Edited Headshot.jpeg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-evenly text-white">
                <section>
                    <p className="font-bold">Adam Johnson</p>
                    <p className="font-bold">React Web Developer</p>
                </section>
                <section>
                    <p className="underline">adaojohnson902@gmail.com</p>
                </section>
            </header>
            <main className="h-[8000px]">
                <h1 className="flex justify-center font-bold text-4xl text-white">
                    Hi, I'm Adam
                </h1>
                 <div className="flex flex-row justify-around">
                    <section className="w-1/3">
                        {/* <p className="flex text-4xl text-white">React Developer</p> */}
                        <div className="text-lg">
                            <p className="text-white">
                                I found my love for tech after already finishing
                                my Bachelor's degree in Public Policy and
                                Administration. One day, the semester before I
                                graduated while talking with my wife, a feeling
                                hit me really strongly.{" "}
                                <span className="font-bold text-info">
                                    "I should learn to code."{" "}
                                </span>
                            </p>
                            <p className="text-white">
                                The Monday after I graduated from university I
                                began a coding bootcamp at Devmountain
                                specializing in web development. I was not
                                prepared for the joy that came into my life as a
                                result.
                            </p>
                            <p className=" text-white text-nowrap">
                                I'm a new father, an avid golfer, a soccer
                                player and coach, a hungry learner, and a{" "}
                            </p>
                            <span className="font-bold text-info">
                                React Web Developer
                            </span>
                        <div>
                            <a href="https://www.linkedin.com/in/adamj7/">
                                LinkedIn
                            </a>
                            <a href="https://github.com/adaoj7">GitHub</a>
                        </div>
                        </div>
                    </section>
                    <section>
                        <div className="">
                            <div className="border-[15px] w-[350px] border-black rounded-xl">
                                <img className="" src={Profile} />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
