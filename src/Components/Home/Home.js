import React, { useContext } from "react";

//context
import { DataContext } from "../../Context/DataContextProvider";

//components
import FixedSideBar from "../Sidebar/FixedSideBar";
import Banner from "../Banner/Banner";

//css
import styles from "./home.module.css";

const Home = () => {
    const { state, setState } = useContext(DataContext);

    return (
        <main dir={`${state.language == "FA" && "rtl"}`}>
            <FixedSideBar />
            <article
                className={`${state.language == "FA"
                        ? `${styles.right_margin}`
                        : `${styles.left_margin}`
                    }`}
            >
                <Banner />
            </article>
        </main>
    );
};

export default Home;
