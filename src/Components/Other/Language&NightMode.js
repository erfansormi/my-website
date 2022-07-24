import React, { useContext } from 'react'

//context
import { DataContext } from '../../Context/DataContextProvider'

//components
import NightMode from './NightMode'
import Language from './Language'

// css
import styles from "./la&nm.module.css"

const LanguageVSNightMode = () => {
    const { state, setState } = useContext(DataContext);

    return (
        <div className={`${styles.container} 
        ${state.language == "EN" ? "end-0 me-1 flex-row-reverse" : "ms-1"}`}>
            <Language />
            <NightMode />
        </div >
    )
}

export default LanguageVSNightMode