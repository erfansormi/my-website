import React, { useContext, useEffect, useRef } from "react";

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
    })

    return (
        <>
            <LanguageVSNightMode />
            <FixedSideBar />
            <main
                ref={mainRef}
                dir={`${state.language == "FA" && "rtl"}`}
                className={`${state.language == "FA"
                    ? `${styles.right_margin}`
                    : `${styles.left_margin}`
                    }
                    ${state.darkMode && "text-light bg-dark"} 
                    ${styles.main}
                    main-element`}
            >
                <article id="home">
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
                <footer className={styles.footer_container}>
                    <Footer />
                </footer>
            </main>
        </>
    );
};

export default Home;
