import React from 'react'

//css 
import styles from "./contact.module.css"

const Icons = ({ icon, title, href, type, description }) => {
    return (
        <div className={`${styles.icon_container} shadow`}>
            <div className='mx-4'>
                {icon}
            </div>
            <div>
                <div className="text-capitalize">
                    <h5>
                        {title}
                    </h5>
                </div>
                <div>
                    {type == "link" ?
                        <a href={href}
                            className={`${styles.contact_me_link}
                                            text-light opacity-50`}>
                            {description}
                        </a>
                        :
                        <span
                            className={`text-light opacity-50`}>
                            {description}
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Icons