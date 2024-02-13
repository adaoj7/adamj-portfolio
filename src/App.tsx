import "./App.css";
import Profile from "./assets/Edited Headshot.jpeg";
import Github from "./assets/github-mark-white.png";
import LinkedIn from "./assets/In-White-128.png";
import NatsiteHero from "./assets/Natsite.png";
import MailIcon from "./assets/Mail.svg";
import AmaviHero from "./assets/AmaviChorale.png";
import MovieHero from "./assets/Movie Lookup.png";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";

function App() {
    return (
        <>
            {/* Mobile */}
            <div className="lg:hidden flex flex-col h-full font-OpenSans">
                <header className="relative">
                    {/* Move modal button to bottom corner on scroll */}
                </header>
                <main className="overflow-y-hidden">
                    <section className="flex flex-col justify-around h-screen bg-primary-content">
                        <section className="flex items-center justify-center h-[40%]">
                            <div className="w-[60%]">
                                <img
                                    className="rounded-ss-[25px] rounded-se-[25px] rounded-es-[25px] rounded-ee-[25px]"
                                    src={Profile}
                                />
                            </div>
                        </section>
                        <div className="flex px-8 flex-col">
                            <div className="flex flex-wrap h-[370px]">
                                <h2 className="text-white font-Playfair font-semibold mb-6 text-3xl">
                                    Hi, I'm Adam
                                </h2>
                                <p className="text-white">
                                    One day, the semester before I graduated
                                    from college, while talking with my wife, a
                                    feeling hit me really strongly.{" "}
                                    <span className="font-bold text-info">
                                        "I should learn to code."{" "}
                                    </span>
                                </p>
                                <p className="mt-3 text-white">
                                    The Monday after I got my degree I began a
                                    coding bootcamp at Devmountain specializing
                                    in web development. I was not prepared for
                                    the joy that came into my life as a result.
                                </p>
                                <p className="mt-3 text-white">
                                    I'm a new father, an avid golfer, a soccer
                                    player and coach, a hungry learner, and a{" "}
                                </p>
                                <span className="font-bold text-info h-[40px]">
                                    React Web Developer
                                </span>
                                <div className="flex flex-row justify-center mt-20"></div>
                            </div>

                            <section className="flex justify-end">
                                <button
                                    className="btn btn-info hover:btn-ghost shadow-xl"
                                    onClick={() =>
                                        // @ts-ignore
                                        document
                                            .getElementById("my_modal_1")
                                            // @ts-ignore
                                            .showModal()
                                    }
                                >
                                    Click Me!
                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-xl">
                                            Gotcha! Now you have to reach out. I
                                            don't make the rules.
                                        </h3>
                                        {/* <p className="flex justify-center">Don't hesitate to reach out!</p> */}
                                        <div className="flex justify-center mt-10 flex-row">
                                            <button
                                                onClick={() =>
                                                    (window.location.href =
                                                        "mailto:adaojohnson902@gmail.com")
                                                }
                                                className="flex items-center hover:text-gray-300"
                                            >
                                                <img
                                                    src={MailIcon}
                                                    className="h-10 mx-5 fill-white"
                                                    title="Will Open Your Default Email Client"
                                                />
                                            </button>
                                            <a
                                                href="https://www.linkedin.com/in/adamj7/"
                                                title="Link to My LinkedIn"
                                            >
                                                <img
                                                    src={LinkedIn}
                                                    className="h-10 mx-5"
                                                />
                                            </a>
                                            <a
                                                href="https://github.com/adaoj7"
                                                title="Link to My GitHub"
                                            >
                                                <img
                                                    src={Github}
                                                    className="h-10 mx-5"
                                                />
                                            </a>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">
                                                    Close
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </section>
                        </div>
                    </section>
                    <section className="flex justify-center flex-col items-center mt-4">
                        <h2 className="my-10 text-6xl font-Playfair font-semibold">
                            My Projects
                        </h2>
                        <div className="card w-2/3 bg-base-300 shadow-xl mt-10 mb-4">
                            {/* I need to take the screenshot from my large monitor */}
                            <figure className="h-full">
                                <img
                                    src={NatsiteHero}
                                    alt="Natsite Hero"
                                    className=""
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Peoria Nativity Festival Site
                                </h2>
                                <p>
                                    This is a site rebuild of a static Wix site
                                    for the Peoria Nativity Festival.
                                </p>
                                <p>
                                    Tech stack: React, Node with Express, and
                                    PostgreSQL hosted on an EC2 instance with
                                    Caddy for the reverse proxy and https
                                    certificate
                                </p>
                                <div className="card-actions justify-end flex flex-row">
                                    <button
                                        className="btn btn-primary hover:btn-ghost text-base"
                                        onClick={() =>
                                            (window.location.href =
                                                "https://adamj-developer.com")
                                        }
                                    >
                                        <FaExternalLinkAlt />
                                    </button>
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
                                        <img
                                            src={Github}
                                            alt="Github Logo"
                                            className="h-12"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-2/3 bg-base-300 shadow-xl my-4">
                            <figure className="">
                                <img src={AmaviHero} alt="Amavi Hero" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Amavi Chorale Site
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end flex flex-row">
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
                                        <img
                                            src={Github}
                                            alt="Github Logo"
                                            className="h-12"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card w-2/3 bg-base-300 shadow-xl my-4">
                            <figure className="">
                                <img src={MovieHero} alt="Movie Hero" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Movie Lookup w/ Vue
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end flex flex-row">
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
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
                <footer className="footer footer-center h-28 p-4 bg-base-300 text-base-content mt-8">
                    <aside className="text-base">
                        <p>
                            Copyright © 2024 - All right reserved by me, Adam
                            Johnson
                        </p>
                        <p>Built w/ React, Tailwind, and DaisyUI</p>
                    </aside>
                </footer>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex flex-col h-full font-OpenSans">
                <header className="">
                    {/* Move modal button to bottom corner on scroll */}
                    <section className="fixed bottom-12 right-12">
                        <button
                            className="btn btn-info hover:btn-ghost shadow-xl"
                            onClick={() => {
                                if (document) {
                                    (
                                        document.getElementById(
                                            "modalDesktop"
                                        ) as HTMLFormElement
                                    ).showModal();
                                }
                            }}
                        >
                            Click Me!
                        </button>
                        <dialog id="modalDesktop" className="lg:modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-xl">
                                    Gotcha! Now you have to reach out. I don't
                                    make the rules.
                                </h3>
                                {/* <p className="flex justify-center">Don't hesitate to reach out!</p> */}
                                <div className="flex justify-center mt-10 flex-row">
                                    <button
                                        onClick={() =>
                                            (window.location.href =
                                                "mailto:adaojohnson902@gmail.com")
                                        }
                                        className="flex items-center hover:text-gray-300"
                                    >
                                        <img
                                            src={MailIcon}
                                            className="h-10 mx-5 fill-white"
                                            title="Will Open Your Default Email Client"
                                        />
                                    </button>
                                    <a
                                        href="https://www.linkedin.com/in/adamj7/"
                                        title="Link to My LinkedIn"
                                    >
                                        <img
                                            src={LinkedIn}
                                            className="h-10 mx-5"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/adaoj7"
                                        title="Link to My GitHub"
                                    >
                                        <img
                                            src={Github}
                                            className="h-10 mx-5"
                                        />
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
                <main className="overflow-x-hidden">
                    <section className="flex flex-row justify-start h-screen bg-primary-content">
                        <section className="flex items-center justify-start ml-44">
                            <div>
                                <div className=" w-[450px]">
                                    <img
                                        className="rounded-ss-[75px] rounded-se-[75px] rounded-es-[75px] rounded-ee-[75px]"
                                        src={Profile}
                                    />
                                </div>
                            </div>
                        </section>
                        <div className="flex w-full p-20 justify-center items-center mt-10">
                            <div className=" text-lg pr-20">
                                <h2 className="text-white text-6xl font-Playfair font-semibold mb-6">
                                    Hi, I'm Adam
                                </h2>
                                <p className="text-white">
                                    One day, the semester before I graduated
                                    from college, while talking with my wife, a
                                    feeling hit me really strongly.{" "}
                                    <span className="font-bold text-info">
                                        "I should learn to code."{" "}
                                    </span>
                                </p>
                                <p className="mt-3 text-white">
                                    The Monday after I got my degree I began a
                                    coding bootcamp at Devmountain specializing
                                    in web development. I was not prepared for
                                    the joy that came into my life as a result.
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
                        <h2 className="my-10 text-6xl font-Playfair text-white font-semibold">
                            My Projects
                        </h2>
                        <div className="card card-side w-3/4 h-auto bg-base-300 shadow-xl mt-10 mb-4">
                            {/* I need to take the screenshot from my large monitor */}
                            <figure className="w-3/4 h-full">
                                <img src={NatsiteHero} alt="Natsite Hero" />
                            </figure>
                            <div className="card-body w-[20px]">
                                <h2 className="card-title">Nativity Site</h2>
                                <p>
                                    This is a site rebuild of a static Wix site
                                    for the Peoria Nativity Festival. With
                                    features such as login for volunteer shift
                                    management and StripeAPI for secure
                                    donations.
                                </p>

                                <div className="card-actions justify-end flex flex-row">
                                    <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "natModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog id="natModal" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">
                                                Hello!
                                            </h3>
                                            <p className="py-4">
                                                Press ESC key or click the
                                                button below to close
                                            </p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    <button
                                        className="btn btn-primary hover:btn-ghost text-base"
                                        onClick={() =>
                                            (window.location.href =
                                                "https://adamj-developer.com")
                                        }
                                    >
                                        <FaExternalLinkAlt />
                                    </button>
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
                                        <img
                                            src={Github}
                                            alt="Github Logo"
                                            className="h-12"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side w-3/4 h-auto bg-base-300 shadow-xl my-4">
                            <figure className="w-3/4 h-full">
                                <img src={AmaviHero} alt="Amavi Hero" />
                            </figure>
                            <div className="card-body w-[20px]">
                                <h2 className="card-title">
                                    Amavi Chorale Site
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end flex flex-row">
                                <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "amaviModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog id="amaviModal" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">
                                                Hello!
                                            </h3>
                                            <p className="py-4">
                                                Press ESC key or click the
                                                button below to close
                                            </p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
                                        <img
                                            src={Github}
                                            alt="Github Logo"
                                            className="h-12"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card card-side w-3/4 h-auto bg-base-300 shadow-xl my-4">
                            <figure className="w-3/4 h-full">
                                <img src={MovieHero} alt="Movie Hero" />
                            </figure>
                            <div className="card-body w-[20px]">
                                <h2 className="card-title">
                                    Movie Lookup w/ Vue
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end flex flex-row">
                                <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "movieModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog id="movieModal" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">
                                                Hello!
                                            </h3>
                                            <p className="py-4">
                                                Press ESC key or click the
                                                button below to close
                                            </p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
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
                <footer className="footer footer-center h-28 p-4 bg-base-300 text-base-content mt-8">
                    <aside className="text-base">
                        <p>
                            Copyright © 2024 - All right reserved by me, Adam
                            Johnson
                        </p>
                        <p>Built w/ React, Tailwind, and DaisyUI</p>
                    </aside>
                </footer>
            </div>
        </>
    );
}

export default App;
