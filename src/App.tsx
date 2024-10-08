// After finishing the Nativity Site I need to refactor this with components for modals, cards, and buttons

import Profile from "./assets/Edited Headshot.jpeg";
import Github from "./assets/github-mark-white.png";
import LinkedIn from "./assets/In-White-128.png";
import NatsiteHero from "./assets/Natsite.png";
import MailIcon from "./assets/Mail.svg";
import AmaviHero from "./assets/AmaviChorale.png";
import MovieHero from "./assets/Movie Lookup.png";
import RefactorHero from "./assets/Portfolio Hero.png";
import {
    FaAws,
    FaExternalLinkAlt,
    FaNode,
    FaReact,
    FaVuejs,
    FaGithub,
    FaDigitalOcean,
} from "react-icons/fa";
import {
    SiVite,
    SiExpress,
    SiCaddy,
    SiTailwindcss,
    SiTypescript,
    SiDocker,
    SiReactquery,
    SiReactrouter,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import GitHubCalendar from "react-github-calendar";
import { BadgeWIcon, BadgeWIconMobile } from "./components/BadgeWIcon";

function App() {
    return (
        <>
            <Mobile />
            <Desktop />
        </>
    );
}

function Mobile() {
    return (
        <>
            {/* Mobile */}
            <div className="lg:hidden flex flex-col h-full">
                <main className="">
                    <section className="bg-gradient-to-tl from-slate-900 to-primary-content">
                        <div className="card">
                            <figure className="flex m-auto mt-8 size-72">
                                <img
                                    className="rounded-es-[25px] rounded-ee-[25px]"
                                    src={Profile}
                                />
                            </figure>
                            <div className="card-body top-60">
                                <div className="flex flex-col font-Playfair">
                                    <h2 className="text-2xl">Hi, I'm Adam</h2>
                                    <div className="italic text-sm">
                                        (Adao is Adam in Portuguese)
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="">
                                        One day, the semester before I graduated
                                        from BYU-Idaho, while talking with my
                                        wife, a feeling hit me really strongly.
                                        "I should learn to code."
                                    </div>
                                    <div className="">
                                        The Monday after I got my degree I began
                                        a coding bootcamp at Devmountain
                                        specializing in web development. I was
                                        not prepared for the joy that came into
                                        my life as a result.
                                    </div>
                                    <div className="">
                                        I'm a new father, an avid golfer, a
                                        soccer player and coach, a Nebraska
                                        football fan, a hungry learner, and a{" "}
                                        <span className="italic text-info">
                                            Front-end Software Engineer
                                        </span>
                                    </div>
                                </div>

                                <section className="flex justify-end">
                                    <button
                                        className="btn btn-info hover:btn-ghost shadow-xl mt-4"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "my_modal_1"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                    >
                                        Click Me!
                                    </button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-xl">
                                                Gotcha! Now you have to reach
                                                out. I don't make the rules.
                                            </h3>
                                            {/* <p className="flex justify-center">Don't hesitate to reach out!</p> */}
                                            <div className="flex justify-center mt-10 flex-row">
                                                <button
                                                    onClick={() =>
                                                        (window.location.href =
                                                            "mailto:adaoj.dev@gmail.com")
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
                        </div>
                    </section>

                    <section className="flex flex-col items-center pt-12 p-4">
                        <h2 className="mb-10 text-4xl font-semibold">
                            My Tech Stack
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            <BadgeWIconMobile name="React">
                                <FaReact size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Typescript">
                                <SiTypescript size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Node.js">
                                <FaNode size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="PostgreSQL">
                                <BiLogoPostgresql size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Docker">
                                <SiDocker size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Vue.js">
                                <FaVuejs size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="TailwindCSS">
                                <SiTailwindcss size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Caddy">
                                <SiCaddy size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Express">
                                <SiExpress size={90} />
                            </BadgeWIconMobile>
                            <BadgeWIconMobile name="Vite">
                                <SiVite size={90} />
                            </BadgeWIconMobile>
                        </div>
                    </section>

                    <section className="flex flex-col justify-center px-4 py-12">
                        <h2 className="flex justify-center mb-10 text-3xl font-semibold">
                            Github Contributions
                        </h2>
                        <GitHubCalendar
                            username="adaoj7"
                            blockSize={12}
                            hideColorLegend
                        />
                    </section>

                    <section className="flex justify-center flex-col items-center bg-gradient-to-l from-slate-900 to-primary-content gap-8 p-8">
                        <h2 className="my-4 text-4xl font-semibold">
                            My Projects
                        </h2>
                        {/* Nativity Site v2 */}
                        <div className="card bg-base-300 shadow-xl">
                            {/* I need to take the screenshot from my large monitor */}
                            <figure className="h-full">
                                <img src={RefactorHero} alt="Natsite Hero" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Peoria Nativity Festival Site
                                </h2>
                                <p>
                                    This is a site replacement of a static Wix
                                    site for the Peoria Nativity Festival. With
                                    features such as login for volunteer shift
                                    management and StripeAPI for secure
                                    donations. Go check it out.
                                </p>
                                <div className="card-actions justify-end gap-4 mt-4">
                                    <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "natv2PhoneModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                        title="Tech Stack Modal"
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog
                                        id="natv2PhoneModal"
                                        className="modal"
                                    >
                                        <div className="modal-box grid grid-cols-3">
                                            <BadgeWIcon name="React">
                                                <FaReact size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="Typescript">
                                                <SiTypescript size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="TailwindCSS">
                                                <SiTailwindcss size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="Node.js">
                                                <FaNode size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="Express">
                                                <SiExpress size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="PostgreSQL">
                                                <BiLogoPostgresql size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="Docker">
                                                <SiDocker size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="Caddy">
                                                <SiCaddy size={70} />
                                            </BadgeWIcon>
                                            <BadgeWIcon name="Vite">
                                                <SiVite size={70} />
                                            </BadgeWIcon>
                                        </div>
                                        <form
                                            method="dialog"
                                            className="modal-backdrop"
                                        >
                                            {/* if there is a button in form, it will close the modal */}
                                            <button>close</button>
                                        </form>
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
                                        <FaGithub size={45} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Nativity Site v1 */}
                        <div className="card bg-base-300 shadow-xl">
                            {/* I need to take the screenshot from my large monitor */}
                            <figure className="h-full">
                                <img src={NatsiteHero} alt="Natsite Hero" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Peoria Nativity Festival Site
                                </h2>
                                <p>
                                    This is a site replacement of a static Wix
                                    site for the Peoria Nativity Festival. With
                                    features such as login for volunteer shift
                                    management and StripeAPI for secure
                                    donations. Go check it out.
                                </p>
                                <div className="card-actions justify-end gap-4 mt-4">
                                    <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "natv1PhoneModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                        title="Tech Stack Modal"
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog
                                        id="natv1PhoneModal"
                                        className="modal"
                                    >
                                        <div className="modal-box grid grid-cols-3">
                                            <BadgeWIconMobile name="React">
                                                <FaReact size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="TailwindCSS">
                                                <SiTailwindcss size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Node.js">
                                                <FaNode size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Express">
                                                <SiExpress size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="PostgreSQL">
                                                <BiLogoPostgresql size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Vite">
                                                <SiVite size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="AWS EC2">
                                                <FaAws size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Caddy">
                                                <SiCaddy size={70} />
                                            </BadgeWIconMobile>
                                        </div>
                                        <form
                                            method="dialog"
                                            className="modal-backdrop"
                                        >
                                            {/* if there is a button in form, it will close the modal */}
                                            <button>close</button>
                                        </form>
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
                                        <FaGithub size={45} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Amavi Chorale Site */}
                        <div className="card bg-base-300 shadow-xl">
                            <figure className="">
                                <img src={AmaviHero} alt="Amavi Hero" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Amavi Chorale Site
                                </h2>
                                <p>
                                    This site enables admins with comprehensive
                                    functionality for effective chorale
                                    management including email list
                                    subscriptions, audition management, event
                                    management, and donations utilizing
                                    StripeAPI.
                                </p>
                                <div className="card-actions justify-end gap-4 mt-4">
                                    <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "amaviPhoneModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                        title="Tech Stack Modal"
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog
                                        id="amaviPhoneModal"
                                        className="modal"
                                    >
                                        <div className="modal-box grid grid-cols-3">
                                            <BadgeWIconMobile name="React">
                                                <FaReact size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="TailwindCSS">
                                                <SiTailwindcss size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Node.js">
                                                <FaNode size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Express">
                                                <SiExpress size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="PostgreSQL">
                                                <BiLogoPostgresql size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Vite">
                                                <SiVite size={70} />
                                            </BadgeWIconMobile>
                                        </div>
                                        <form
                                            method="dialog"
                                            className="modal-backdrop"
                                        >
                                            {/* if there is a button in form, it will close the modal */}
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                    <a
                                        href="https://github.com/crecendo-coders/amavi-dev"
                                        title="Amavi Chorale Repo"
                                    >
                                        <FaGithub size={45} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Movie Lookup w/ Vue */}
                        <div className="card bg-base-300 shadow-xl">
                            <figure className="">
                                <img src={MovieHero} alt="Movie Hero" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Movie Lookup w/ Vue
                                </h2>
                                <p>
                                    Movie lookup using the Movie Database API to
                                    display 10 movies based on what is searched.
                                </p>
                                <div className="card-actions justify-end gap-4 mt-4">
                                    <button
                                        className="btn btn-primary hover:btn-ghost"
                                        onClick={() => {
                                            if (document) {
                                                (
                                                    document.getElementById(
                                                        "moviePhoneModal"
                                                    ) as HTMLFormElement
                                                ).showModal();
                                            }
                                        }}
                                        title="Tech Stack Modal"
                                    >
                                        Tech Stack
                                    </button>
                                    <dialog
                                        id="moviePhoneModal"
                                        className="modal"
                                    >
                                        <div className="modal-box grid grid-cols-3">
                                            <BadgeWIconMobile name="Vue">
                                                <FaVuejs size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Node.js">
                                                <FaNode size={70} />
                                            </BadgeWIconMobile>
                                            <BadgeWIconMobile name="Vite">
                                                <SiVite size={70} />
                                            </BadgeWIconMobile>
                                        </div>
                                        <form
                                            method="dialog"
                                            className="modal-backdrop"
                                        >
                                            {/* if there is a button in form, it will close the modal */}
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                    <a
                                        href="https://github.com/adaoj7/nativity_site"
                                        title="GitHub Repo"
                                    >
                                        <FaGithub size={45} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer footer-center h-36 p-4 bg-base-300 text-base-content">
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

function Desktop() {
    return (
        <div className="hidden lg:flex flex-col h-full">
            <header className="">
                {/* Move modal button to bottom corner on scroll */}
                <section className="fixed bottom-10 right-10 z-50">
                    <button
                        className="btn btn-info hover:btn-ghost hover:animate-bounce shadow-xl"
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
                                Gotcha! Now you have to reach out. I don't make
                                the rules.
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
                                    <img src={LinkedIn} className="h-10 mx-5" />
                                </a>
                                <a
                                    href="https://github.com/adaoj7"
                                    title="Link to My GitHub"
                                >
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

            <main className="">
                <section className=" h-screen bg-gradient-to-tl from-slate-900 to-primary-content">
                    <div className="h-full flex flex-row items-center ml-20">
                        <figure className="card">
                            <div className="card-body">
                                <div className="w-[450px]">
                                    <img
                                        className="rounded-ss-[75px] rounded-se-[75px] rounded-es-[75px] rounded-ee-[75px]"
                                        src={Profile}
                                    />
                                </div>
                            </div>
                        </figure>
                        <div className="card">
                            <div className="card-body">
                                <div className="flex flex-wrap items-center  font-Playfair">
                                    <h2 className="text-6xl">Hi, I'm Adam</h2>
                                    <div className="italic m-4">
                                        (Adao is Adam in Portuguese)
                                    </div>
                                </div>
                                <div className="flex flex-col text-lg mt-4">
                                    <div className=" ">
                                        One day, the semester before I graduated
                                        from BYU-Idaho, while talking with my
                                        wife, a feeling hit me really strongly.
                                        "I should learn to code."
                                    </div>
                                    <div className="mt-4  ">
                                        The Monday after I got my degree I began
                                        a coding bootcamp at Devmountain
                                        specializing in web development. I was
                                        not prepared for the joy that came into
                                        my life as a result.
                                    </div>
                                    <div className="mt-4  ">
                                        I'm a new father, an avid golfer, a
                                        soccer player and coach, a Nebraska
                                        football fan, a hungry learner, and a{" "}
                                        <span className="italic text-info">
                                            Front-end Software Engineer
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col items-center my-12">
                    <h2 className="mb-10 text-4xl font-semibold">
                        My Tech Stack
                    </h2>
                    <div className="grid grid-cols-5 gap-4">
                        <BadgeWIcon name="Typescript">
                            <SiTypescript size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="React">
                            <FaReact size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="React Router">
                            <SiReactrouter size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="React Query">
                            <SiReactquery size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="GraphQL">
                            <GrGraphQl size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="TailwindCSS">
                            <SiTailwindcss size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Node.js">
                            <FaNode size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Express">
                            <SiExpress size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Vue.js">
                            <FaVuejs size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Vite">
                            <SiVite size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="PostgreSQL">
                            <BiLogoPostgresql size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Docker">
                            <SiDocker size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="AWS">
                            <FaAws size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Digital Ocean">
                            <FaDigitalOcean size={90} />
                        </BadgeWIcon>
                        <BadgeWIcon name="Caddy">
                            <SiCaddy size={90} />
                        </BadgeWIcon>
                    </div>
                </section>

                <section className="flex flex-col items-center my-12">
                    <h2 className="mb-10 text-4xl font-semibold">
                        Github Contributions
                    </h2>
                    <GitHubCalendar username="adaoj7" />
                </section>

                <section className="flex flex-col items-center bg-gradient-to-l from-slate-900 to-primary-content py-12 gap-12">
                    <h2 className="mb-4 text-4xl font-semibold">My Projects</h2>
                    {/* Nativity Site v2 */}
                    <div className="card card-side bg-base-300 shadow-xl">
                        {/* I need to take the screenshot from my large monitor */}
                        <figure className="">
                            <img
                                src={RefactorHero}
                                alt="Natsite Hero"
                                className="h-[320px] w-[700px] object-cover object-top"
                            />
                        </figure>
                        <div className="card-body w-[400px]">
                            <h2 className="card-title">
                                Peoria Nativity Festival Site v2
                            </h2>
                            <p>
                                I am currently working on the refactor of v1 of
                                the Nativity site. This has been done with React
                                using Typescript with TanStack Query for data
                                fetching and ReactRouter for navigation.
                            </p>

                            <div className="card-actions justify-end flex flex-row flex-nowrap">
                                <button
                                    className="btn btn-primary hover:btn-ghost"
                                    onClick={() => {
                                        if (document) {
                                            (
                                                document.getElementById(
                                                    "natv2DesktopModal"
                                                ) as HTMLFormElement
                                            ).showModal();
                                        }
                                    }}
                                    title="Tech Stack Modal"
                                >
                                    Tech Stack
                                </button>
                                <dialog
                                    id="natv2DesktopModal"
                                    className="modal"
                                >
                                    <div className="modal-box grid grid-cols-4">
                                        <BadgeWIcon name="Typescript">
                                            <SiTypescript size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="React">
                                            <FaReact size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="React Router">
                                            <SiReactrouter size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="React Query">
                                            <SiReactquery size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="TailwindCSS">
                                            <SiTailwindcss size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Node.js">
                                            <FaNode size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Express">
                                            <SiExpress size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Vite">
                                            <SiVite size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="PostgreSQL">
                                            <BiLogoPostgresql size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Docker">
                                            <SiDocker size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Digital Ocean">
                                            <FaDigitalOcean size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Caddy">
                                            <SiCaddy size={70} />
                                        </BadgeWIcon>
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button>close</button>
                                    </form>
                                </dialog>
                                <a
                                    className="btn btn-primary hover:btn-ghost text-base"
                                    href="https://pc-fn.org"
                                    title="Link to Nativity Site v2"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                                <a
                                    href="https://github.com/adaoj7/natsite-refactor"
                                    title="Nativity Refactor Site Repo"
                                >
                                    <FaGithub size={50} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Nativity Site v1 */}
                    <div className="card card-side bg-base-300 shadow-xl">
                        {/* I need to take the screenshot from my large monitor */}

                        <div className="card-body w-[400px]">
                            <h2 className="card-title">
                                Peoria Nativity Festival Site v1
                            </h2>
                            <p>
                                This is a site replacement of a static Wix site
                                for the Peoria Nativity Festival. With features
                                such as login for volunteer shift management and
                                StripeAPI for secure donations. Go check it out.
                            </p>

                            <div className="card-actions justify-end flex flex-row">
                                <button
                                    className="btn btn-primary hover:btn-ghost"
                                    onClick={() => {
                                        if (document) {
                                            (
                                                document.getElementById(
                                                    "natv1DesktopModal"
                                                ) as HTMLFormElement
                                            ).showModal();
                                        }
                                    }}
                                    title="Tech Stack Modal"
                                >
                                    Tech Stack
                                </button>
                                <dialog
                                    id="natv1DesktopModal"
                                    className="modal"
                                >
                                    <div className="modal-box grid grid-cols-4">
                                        <BadgeWIcon name="React">
                                            <FaReact size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="React Router">
                                            <SiReactrouter size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="TailwindCSS">
                                            <SiTailwindcss size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Node.js">
                                            <FaNode size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Express">
                                            <SiExpress size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Vite">
                                            <SiVite size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="PostgreSQL">
                                            <BiLogoPostgresql size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="AWS EC2">
                                            <FaAws size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Caddy">
                                            <SiCaddy size={70} />
                                        </BadgeWIcon>
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button>close</button>
                                    </form>
                                </dialog>
                                <button
                                    className="btn btn-primary hover:btn-ghost text-base"
                                    onClick={() =>
                                        (window.location.href =
                                            "https://adamj-developer.com")
                                    }
                                    title="Link to Nativity Site"
                                >
                                    <FaExternalLinkAlt />
                                </button>
                                <a
                                    href="https://github.com/adaoj7/nativity_site"
                                    title="Nativity Site Repo"
                                >
                                    <FaGithub size={50} />
                                </a>
                            </div>
                        </div>
                        <figure className="">
                            <img
                                src={NatsiteHero}
                                alt="Natsite Hero"
                                className="h-[320px] w-[700px] object-cover"
                            />
                        </figure>
                    </div>
                    {/* Amavi Chorale Site */}
                    <div className="card card-side bg-base-300 shadow-xl">
                        <figure className="">
                            <img
                                src={AmaviHero}
                                alt="Amavi Hero"
                                className="h-[320px] w-[700px] object-cover"
                            />
                        </figure>
                        <div className="card-body w-[400px]">
                            <h2 className="card-title">Amavi Chorale Site</h2>
                            <p>
                                This site enables admins with comprehensive
                                functionality for effective chorale management
                                including email list subscriptions, audition
                                management, event management, and donations
                                utilizing StripeAPI.
                            </p>
                            <div className="card-actions justify-end flex flex-row">
                                <button
                                    className="btn btn-primary hover:btn-ghost"
                                    onClick={() => {
                                        if (document) {
                                            (
                                                document.getElementById(
                                                    "amaviDesktopModal"
                                                ) as HTMLFormElement
                                            ).showModal();
                                        }
                                    }}
                                    title="Tech Stack Modal"
                                >
                                    Tech Stack
                                </button>
                                <dialog
                                    id="amaviDesktopModal"
                                    className="modal"
                                >
                                    <div className="modal-box grid grid-cols-4">
                                        <BadgeWIcon name="React">
                                            <FaReact size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="TailwindCSS">
                                            <SiTailwindcss size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Node.js">
                                            <FaNode size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Express">
                                            <SiExpress size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Vite">
                                            <SiVite size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="PostgreSQL">
                                            <BiLogoPostgresql size={70} />
                                        </BadgeWIcon>
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button>close</button>
                                    </form>
                                </dialog>
                                <a
                                    href="https://github.com/crecendo-coders/amavi-dev"
                                    title="Amavi Chorale Repo"
                                >
                                    <FaGithub size={50} />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Movie Lookup w/ Vue */}
                    <div className="card card-side bg-base-300 shadow-xl">
                        <div className="card-body w-[400px]">
                            <h2 className="card-title">Movie Lookup w/ Vue</h2>
                            <p>
                                Movie lookup using the Movie Database API to
                                display 10 movies based on what is searched.
                            </p>
                            <div className="card-actions justify-end flex flex-row">
                                <button
                                    className="btn btn-primary hover:btn-ghost"
                                    onClick={() => {
                                        if (document) {
                                            (
                                                document.getElementById(
                                                    "movieDesktopModal"
                                                ) as HTMLFormElement
                                            ).showModal();
                                        }
                                    }}
                                    title="Tech Stack Modal"
                                >
                                    Tech Stack
                                </button>
                                <dialog
                                    id="movieDesktopModal"
                                    className="modal"
                                >
                                    <div className="modal-box grid grid-cols-4">
                                        <BadgeWIcon name="Vue">
                                            <FaVuejs size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Node.js">
                                            <FaNode size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Express">
                                            <SiExpress size={70} />
                                        </BadgeWIcon>
                                        <BadgeWIcon name="Vite">
                                            <SiVite size={70} />
                                        </BadgeWIcon>
                                    </div>
                                    <form
                                        method="dialog"
                                        className="modal-backdrop"
                                    >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button>close</button>
                                    </form>
                                </dialog>
                                <a
                                    href="https://github.com/adaoj7/movie-search"
                                    title="Movie Search Repo"
                                >
                                    <FaGithub size={50} />
                                </a>
                            </div>
                        </div>
                        <figure className="">
                            <img
                                src={MovieHero}
                                alt="Movie Hero"
                                className="h-[320px] w-[700px] object-cover"
                            />
                        </figure>
                    </div>
                </section>

                <footer className="footer footer-center h-28 p-4 bg-base-300 text-base-content">
                    <aside className="text-base">
                        <p>
                            Copyright © 2024 - All right reserved by me, Adam
                            Johnson
                        </p>
                        <p>Built w/ React TS, Tailwind, and DaisyUI</p>
                    </aside>
                </footer>
            </main>
        </div>
    );
}

export default App;
