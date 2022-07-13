import React, { useContext } from 'react'

//context
import { DataContext } from '../../Context/DataContextProvider'

// css
import styles from "./input.module.css"

const Input = ({ type, text }) => {
    const { state, setState } = useContext(DataContext);

    if (type == "area") {
        return (
            <textarea
                className={`col-12 ${styles.mixed_style}
                ${state.darkMode ?
                        `${styles.dark_area} text-light`
                        : `${styles.light_area} text-dark`}`}
                placeholder={text}
                spellCheck={false}
            >
            </textarea>
        )
    }

    if (type == "text" || "email") {
        return (
            <input
                className={`${styles.mixed_style}
                ${state.darkMode ?
                        `${styles.dark_input} text-light`
                        : `${styles.light_input} text-dark`}`}
                type={type}
                placeholder={text}
                spellCheck={false}
            />
        )
    }
}

export default Input