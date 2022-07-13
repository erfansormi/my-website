import React, { useContext } from 'react'

// context
import { DataContext } from '../../../Context/DataContextProvider'

// components
import HeadTitle from '../../Other/HeadTitle'
import ContactMe from './ContactMe'

// data
import { ContactData } from '../../../Data/ContactData'

//css 
import styles from "./contact.module.css"

const ContactContainer = () => {
    const { state } = useContext(DataContext);

    return (
        <>
            {ContactData[state.language].map((item, index) =>
                <ContactMe item={item} key={index} />
            )}
        </>
    )
}

export default ContactContainer