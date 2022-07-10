import React, { useContext } from 'react'

//context
import { DataContext } from '../../Context/DataContextProvider'

// css
import styles from "./la&nm.module.css"

const Language = () => {
    const { state, setState } = useContext(DataContext);

    //function
    const changeHandler = (event) => {
        setState({ ...state, language: event.target.value })
    }

    return (
        <div className="d-flex">
            <select onChange={changeHandler} id="language-select" className={`form-select ${state.darkMode && `${styles.dark_select}`}`}>
                <option value={"FA"}>فارسی</option>
                <option value={"EN"}>English</option>
            </select>
        </div>
    )
}

export default Language