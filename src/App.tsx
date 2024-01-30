import "./App.css";
import Profile from "./assets/Edited Headshot.jpeg";
import Github from "./assets/github-mark-white.png";
import LinkedIn from "./assets/In-White-128.png";

function App() {
    return (
        <div className="flex flex-col h-full font-OpenSans">
            <header className="flex justify-evenly text-white h-20">
                <section className="flex flex-col justify-center ">
                    <p className="font-bold">Adam Johnson</p>
                    <p className="text-sm">React Web Developer</p>
                </section>
                <section className="flex flex-row justify-center">
                 <button onClick={() => window.location.href = 'mailto:adaojohnson902@gmail.com'} className="flex items-center hover:text-gray-300">Contact Me</button>
                </section>
            </header>
            <main className="h-[2000px]">
                <section className="flex flex-row justify-evenly h-1/4 mt-20">
                <section className="flex items-center justify-start ">
                        <div>
                            <div className="border-[15px] w-[350px] border-black rounded-xl">
                                <img className="" src={Profile} />
                            </div>
                            <div className="flex justify-center mt-10 flex-row">
                                <a href="https://www.linkedin.com/in/adamj7/">
                                    <img
                                        src={LinkedIn}
                                        className="h-10 mr-10"
                                    />
                                </a>
                                <a href="https://github.com/adaoj7">
                                    <img src={Github} className="h-10 ml-10" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="flex w-1/3 justify-center items-center">
                        <div className=" text-lg">
                            <h2 className="text-white text-4xl font-Playfair mb-6">
                                Hi, I'm Adam
                            </h2>
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
                            <p className="mt-3 text-white">
                                The Monday after I got my degree I began a
                                coding bootcamp at Devmountain specializing in
                                web development. I was not prepared for the joy
                                that came into my life as a result.
                            </p>
                            <p className="mt-3 text-white text-nowrap">
                                I'm a new father, an avid golfer, a soccer
                                player and coach, a hungry learner, and a{" "}
                            </p>
                            <span className="font-bold text-info">
                                React Web Developer
                            </span>
                            <div className="flex flex-row justify-center mt-20"></div>
                        </div>
                    </div>
                    
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
