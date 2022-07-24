import React, { useContext, useEffect, useRef, useState } from "react";

//context
import { DataContext } from "../../Context/DataContextProvider";

//components
import FixedSideBar from "../Sidebar/FixedSideBar";
import Banner from "./Banner/Banner";
import LanguageVSNightMode from "../Other/Language&NightMode";
import AboutMeContainer from "./About/AboutMeContainer";
import SkillsContainer from "./Skills/SkillsContainer";
import PortfolioContainer from "./Portfolios/PortfolioContainer";
import ContactContainer from "./ContactMe/ContactContainer";
import Footer from "./Footer/Footer"

//css
import styles from "./home.module.css";

const Home = () => {
    const { state } = useContext(DataContext);

    const [width, setWidth] = useState(window.innerWidth)

    const mainRef = useRef()

    useEffect(() => {
        // if child-index == odd => return different backgroundColor
        const childs = mainRef.current.childNodes;

        childs.forEach((item, index) => {
            if (index % 2 == 1) {
                if (state.darkMode) {
                    item.style.backgroundColor = "rgb(39, 43, 46)"
                }

                if (!state.darkMode) {
                    item.style.backgroundColor = "#e9e9e9"
                }
            }
        });

        // update width page
        const resize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", resize)

    }, [window.innerWidth, state])

    return (
        <>
            <LanguageVSNightMode />
            <FixedSideBar />
            <main
                ref={mainRef}
                dir={`${state.language == "FA" && "rtl"}`}
                className={`
                    ${state.language == "FA" && width >= 768 && `${styles.right_margin}`}
                    ${state.language != "FA" && width >= 768 && `${styles.left_margin}`}
                    ${state.darkMode && "text-light bg-dark"} 
                    ${styles.main}
                `}
            >
                <article id="home" >
                    <Banner />
                </article>
                <div id="about">
                    <AboutMeContainer />
                </div>
                <div className={styles.skills_container} id="skills">
                    <SkillsContainer />
                </div>
                <div className={styles.portfolios_container} id="portfolio">
                    <PortfolioContainer />
                </div>
                <div id="contact">
                    <ContactContainer />
                </div>
            </main>
            <footer
                dir={`${state.language == "FA" && "rtl"}`}
                className={`
                    ${state.darkMode ? "text-light bg-dark" : "text-dark bg-light"}
                    ${state.language == "FA" && width >= 768 && `${styles.right_margin}`}
                    ${state.language != "FA" && width >= 768 && `${styles.left_margin}`}
                    ${styles.footer}
                `}>
                <Footer />
            </footer>
        </>
    );
};

export default Home;
