import React, { useContext } from 'react'

// data
import { PortfolioData } from '../../../Data/PortfolioData'

// context
import { DataContext } from "../../../Context/DataContextProvider"

// components
import Portfolio from './Portfolio'
import HeadTitle from '../../Other/HeadTitle'

// css
import styles from "./portfolio.module.css"

const PortfolioContainer = () => {
    const { state } = useContext(DataContext)

    return (
        <div className={`${styles.container}`}>
            <HeadTitle title={PortfolioData[state.language].title} />
            <div className={`${styles.portfolios_container} row`}>
                {PortfolioData[state.language].portfolios.map((item, index) =>
                    <Portfolio key={index}
                        img={item.img}
                        title={item.title}
                        link={item.link}
                    />
                )}
            </div>
        </div>
    )
}

export default PortfolioContainer