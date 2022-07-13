import React, { useContext, useEffect, useRef } from "react";

//context
import { DataContext } from "../../Context/DataContextProvider";

//components
import FixedSideBar from "../Sidebar/FixedSideBar";
import Banner from "../Banner/Banner";
import LanguageVSNightMode from "../Other/Language&NightMode";
import AboutMeContainer from "./AboutMeContainer";
import SkillsContainer from "./SkillsContainer";
import PortfolioContainer from "./Portfolios/PortfolioContainer";
import ContactContainer from "./ContactMe/ContactContainer";

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
                <article>
                    <Banner />
                </article>
                <div>
                    <AboutMeContainer />
                </div>
                <div className={styles.skills_container}>
                    <SkillsContainer />
                </div>
                <div className={styles.portfolios_container}>
                    <PortfolioContainer />
                </div>
                <div>
                    <ContactContainer />
                </div>
            </main>
        </>
    );
};

export default Home;
