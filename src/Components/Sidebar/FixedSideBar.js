import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom"

//context
import { DataContext } from "../../Context/DataContextProvider";

//css
import styles from "./fixedSidebar.module.css";

//data
import { FixedSideBarData } from "../../Data/FixedSideBarData";

const FixedSideBar = () => {
    const { state } = useContext(DataContext);
    let location = useLocation()

    const handleLink = (item) => {
        window.location.hash = item.link;
    }

    return (
        <aside
            className={`${styles.sidebar} ${state.language == "FA" && ""} shadow-lg
             ${state.darkMode && "text-light bg-dark"}
             ${state.language == "FA" && "end-0"}`}
        >
            <ul>
                {FixedSideBarData[state.language].map((item, index) => (
                    <NavLink
                        to={item.link}
                        onClick={() => handleLink(item)}
                        key={index}
                        className={`${styles.sidebar_list}
                                ${state.darkMode ? "border-dark-mode text-light"
                                : "border-light-mode text-dark"}
                                ${window.location.pathname.includes(`${item.link}`)
                                ? `${styles.active_link}`
                                : ""}`}
                    >
                        <div>{item.icon}</div>
                        <div>
                            <span>{item.text}</span>
                        </div>
                    </NavLink>
                ))}
            </ul>
        </aside >
    );
};

export default FixedSideBar;
