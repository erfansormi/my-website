import React, { useContext } from 'react'

// context
import { DataContext } from '../../Context/DataContextProvider'

// css
import styles from "./progressbar.module.css"

const Progressbar = ({ value, title }) => {
    const { state } = useContext(DataContext)

    return (
        <div className={`w-100 ${styles.progress_container}`}>
            <div className={`progress w-100 ${styles.progress_box}`}>
                <div className="progress-bar progress-bar-striped"
                    role="progressbar" style={{ width: `${value}%` }}
                    aria-valuenow={value}
                    aria-valuemin={0} aria-valuemax={100}>
                    <div className={`${state.darkMode ? "text-light" : "text-dark"} ${styles.top_value}`}>
                        {value}
                    </div>
                    <div className={`${state.darkMode ? "text-light" : "text-dark"} ${styles.top_title}`}>
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progressbar