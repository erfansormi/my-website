import React from 'react'

// components
import HeadTitle from '../../Other/HeadTitle'
import Input from '../../Other/Input';

//css 
import styles from "./contact.module.css"

const ContactMe = ({ item }) => {
    const { title, icons, inputs, btn } = item;

    return (
        <div className='w-100'>
            <HeadTitle title={title} />
            <div className='row gx-5 mt-4'>
                {/* inputs */}
                <div className={`col-8 ${styles.inputs_container} shadow`}>
                    <div className='row gx-4'>
                        {inputs.map((item, index) =>
                            index < 2 ?
                                <div
                                    className={`col-6`}
                                    key={index}>
                                    <Input type={item.type} text={item.placeHolder} />
                                </div>
                                :
                                <div
                                    className={`col-12`}
                                    key={index}>
                                    <Input type={item.type} text={item.placeHolder} />
                                </div>
                        )}
                        <div className='mt-3'>
                            <button className={`btn-orange btn w-25`}>
                                {btn}
                            </button>
                        </div>
                    </div>
                </div>

                {/* icons */}
                <div className={`col-4`}>
                    {icons.map((item, index) =>
                        <div key={index} className={`${styles.icon_container} shadow`}>
                            <div className='mx-4'>
                                {item.icon}
                            </div>
                            <div>
                                <div>
                                    <h5>
                                        {item.title}
                                    </h5>
                                </div>
                                <div>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContactMe