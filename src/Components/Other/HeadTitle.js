import React from 'react'

// css
import styles from "./headTitle.module.css"

const HeadTitle = ({ title }) => {
    return (
        <div className={`${styles.head_title_container}`}>
            <h2>
                {title}
            </h2>
        </div>
    )
}

export default HeadTitle