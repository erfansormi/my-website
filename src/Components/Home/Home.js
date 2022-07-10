import React, { useContext } from "react";

//context
import { DataContext } from "../../Context/DataContextProvider";

//components
import FixedSideBar from "../Sidebar/FixedSideBar";
import Banner from "../Banner/Banner";
import LanguageVSNightMode from "../Other/Language&NightMode";

//css
import styles from "./home.module.css";

const Home = () => {
    const { state, setState } = useContext(DataContext);

    return (
        <>
            <LanguageVSNightMode />
            <FixedSideBar />
            <main
                dir={`${state.language == "FA" && "rtl"}`}
                className={`${state.language == "FA"
                    ? `${styles.right_margin}`
                    : `${styles.left_margin}`
                    }`}
            >
                <article>
                    <Banner />
                </article>
            </main>
        </>
    );
};

export default Home;
