import React, { useContext } from "react";

//context
import { DataContext } from "../../Context/DataContextProvider";

// css
import styles from "./input.module.css";

const Input = ({ type, text, htmlName, handleChange, value }) => {
    //context
    const { state } = useContext(DataContext);

    if (type == "area") {
        return (
            <textarea
                className={`col-12 ${styles.mixed_style}
                ${state.darkMode
                        ? `${styles.dark_area} text-light`
                        : `${styles.light_area} text-dark`
                    }`}
                placeholder={text}
                spellCheck={false}
                name={htmlName}
                value={value}
                onChange={handleChange}
            ></textarea>
        );
    }

    if (type == "text" || "email") {
        return (
            <input
                className={`${styles.mixed_style}
                ${state.darkMode
                        ? `${styles.dark_input} text-light`
                        : `${styles.light_input} text-dark`
                    }`}
                type={type}
                placeholder={text}
                spellCheck={false}
                name={htmlName}
                value={value}
                onChange={handleChange}
            />
        );
    }
};

export default Input;
