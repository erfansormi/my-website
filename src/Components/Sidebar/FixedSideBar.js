import React, { useContext } from "react";

//context
import { DataContext } from "../../Context/DataContextProvider";

//css
import styles from "./fixedSidebar.module.css";

//data
import { FixedSideBarData } from "../../Data/FixedSideBarData";

const FixedSideBar = () => {
    const { state, setState } = useContext(DataContext);

    return (
        <aside
            className={`${styles.sidebar} ${state.language == "FA" && ""} shadow-lg
             ${state.darkMode && "text-light bg-dark"}
             ${state.language == "FA" && "end-0"}`}
        >
            <ul>
                {FixedSideBarData[state.language].map((item, index) => (
                    <li key={index} className={`${styles.sidebar_list}
                     ${state.darkMode ? "dark-mode" : "light-mode"}`}>
                        <div>{item.icon}</div>
                        <div>
                            <span>{item.text}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside >
    );
};

export default FixedSideBar;
