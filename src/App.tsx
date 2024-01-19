import { useState } from "react";
import "./App.css";
import Profile from "./assets/Edited Headshot.jpeg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-row h-full">
            <header className=" flex justify-center w-2/3">
                <div className="fixed top-52">
                    <h1 className="flex text-6xl text-white whitespace-nowrap">
                        Hi, I'm Adam Johnson
                    </h1>
                    {/* <p className="flex text-4xl text-white">React Developer</p> */}
                    <div className="px-2 mt-8">

                    <p className="w-[575px] text-white">
                        I found my love for tech after already finishing my
                        degree in Public Policy and Administration. One day, the
                        semester before I graduated while talking with my wife,
                        a feeling hit me really strongly.{" "}
                        <span className="font-bold text-info">
                            "I should learn to code."{" "}
                        </span>
                    </p>
                    <p className="w-[575px] mt-4 text-white">
                        The Monday after I graduated from university I began a
                        coding bootcamp at Devmountain specializing in web
                        development. I was not prepared for the joy that came
                        into my life as a result.
                    </p>
                    <p className="w-[575px] mt-4 text-white">
                        I am a new father, an avid golfer, a soccer player and
                        coach, a hungry learner, and a <span className="font-bold text-info">React web developer.</span>
                    </p>
                    </div>
                    <div>
                      
                    </div>
                </div>
            </header>
            <main className="flex flex-col h-[8000px]">
                <div className="border-[20px] m-10 mt-32 mr-56 border-black rounded-lg">
                    <img className="w-[500px]" src={Profile} />
                </div>
                <div className="flex h-2/3">
                    <button
                        onClick={() => setCount((count) => count + 1)}
                        className="flex btn btn-info w-80 rounded-full"
                    >
                        count is {count}
                    </button>
                </div>
                <form>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">
                                Enter your email address
                            </span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item"
                            />
                            <button
                                className="btn btn-info rounded-full join-item"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </main>
        </div>
    );
}

export default App;
