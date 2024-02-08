import "./App.css";
import Profile from "./assets/Edited Headshot.jpeg";
import Github from "./assets/github-mark-white.png";
import LinkedIn from "./assets/In-White-128.png";
import NatsiteHero from "./assets/Natsite.png";
import MailIcon from "./assets/Mail.svg"
import AmaviHero from './assets/AmaviChorale.png'
import MovieHero from './assets/Movie Lookup.png'

function App() {
    return (
        <div className="flex flex-col h-full font-OpenSans">
            <header className="flex justify-around text-white h-24 bg-primary-content">
                <section className="flex flex-col justify-center ">
                    <p className="font-bold">Adam Johnson</p>
                    <p className="text-sm">React Web Developer</p>
                </section>
                {/* Move modal button to bottom corner on scroll */}
                <section className="flex flex-row justify-center items-center">
                    <button
                        className="hover:text-gray-400"
                        onClick={() =>
                            // @ts-ignore
                            document.getElementById("my_modal_1").showModal()
                        }
                    >
                        Click Me!
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Don't hesitate to reach out!</p>
                            <div className="flex justify-center mt-10 flex-row">
                                <button
                                    onClick={() =>
                                        (window.location.href =
                                            "mailto:adaojohnson902@gmail.com")
                                    }
                                    className="flex items-center hover:text-gray-300"
                                >
                                    <img src={MailIcon} className="h-10 mx-5 fill-white" title='Will Open Your Default Email Client'/>
                                </button>
                                <a href="https://www.linkedin.com/in/adamj7/" title="Link to My LinkedIn">
                                    <img src={LinkedIn} className="h-10 mx-5" />
                                </a>
                                <a href="https://github.com/adaoj7" title="Link to My GitHub">
                                    <img src={Github} className="h-10 mx-5" />
                                </a>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </section>
            </header>
            <main className="h-[2000px]">
                <section className="flex flex-row justify-start h-1/4 bg-primary-content">
                    <section className="flex items-center justify-start ml-52">
                        <div>
                            <div className="border-[15px] w-[350px] border-black rounded-2xl shadow-2xl">
                                <img className="" src={Profile} />
                            </div>
                        </div>
                    </section>
                    <div className="flex w-full p-20 justify-center items-center mt-10">
                        <div className=" text-lg pr-20">
                            <h2 className="text-white text-4xl font-Playfair font-semibold mb-6">
                                Hi, I'm Adam
                            </h2>
                            <p className="text-white">
                                One day, the semester before I
                                graduated from college, while talking with my wife, a feeling
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
                <section className="flex justify-center flex-col items-center mt-4">
                    <h2 className="mb-10 text-4xl font-Playfair font-semibold">My Projects</h2>
                    <div className="card card-side w-2/3 bg-base-300 shadow-xl mt-10 mb-4">
                        {/* I need to take the screenshot from my large monitor */}
                        <figure className="w-2/3">
                            <img src={NatsiteHero} alt="Natsite Hero" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Nativity Site</h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions justify-end flex flex-row">
                                <button
                                    className="btn btn-primary hover:btn-ghost text-base"
                                    onClick={() =>
                                        (window.location.href =
                                            "https://adaoj.dev")
                                    }
                                >
                                    Hosted Site
                                </button>
                                <a href="https://github.com/adaoj7/nativity_site" title='GitHub Repo'>
                                    <img
                                        src={Github}
                                        alt="Github Logo"
                                        className="h-12"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side w-2/3 bg-base-300 shadow-xl my-4">
                        <figure className="w-2/3">
                            <img src={AmaviHero} alt="Amavi Hero" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Amavi Chorale Site</h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions justify-end flex flex-row">
                                
                                <a href="https://github.com/adaoj7/nativity_site" title='GitHub Repo'>
                                    <img
                                        src={Github}
                                        alt="Github Logo"
                                        className="h-12"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side w-2/3 bg-base-300 shadow-xl my-4">
                        <figure className="w-2/3">
                            <img src={MovieHero} alt="Movie Hero" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Movie Lookup w/ Vue</h2>
                            <p>
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions justify-end flex flex-row">
                                
                                <a href="https://github.com/adaoj7/nativity_site" title='GitHub Repo'>
                                    <img
                                        src={Github}
                                        alt="Github Logo"
                                        className="h-12"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
