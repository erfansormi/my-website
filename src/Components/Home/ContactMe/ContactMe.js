import React, { useState, useContext } from 'react'

// components
import HeadTitle from '../../Other/HeadTitle'
import Loading from "../../Loading/Loading"
import Notif from "../../Notification/Notif"
import Icons from './Icons';
import Inputs from './Inputs'

// context
import { DataContext } from '../../../Context/DataContextProvider';

//css 
import styles from "./contact.module.css"

// aos
import AOS from "aos"

const ContactMe = ({ item }) => {
    const { state } = useContext(DataContext);
    const { title, icons, inputs, btn } = item;

    AOS.init()

    // state
    const [loading, setLoading] = useState(false);
    const [notif, setNotif] = useState(false);
    const [errorSendEmail, setErrorSendEmail] = useState(false);


    return (
        <div className='w-100'>
            <HeadTitle title={title} />
            <div className='row gx-5 mt-4' data-aos="fade-up">

                {/* inputs */}
                <Inputs
                    inputs={inputs}
                    btn={btn}
                    setErrorSendEmail={setErrorSendEmail}
                    setLoading={setLoading}
                    setNotif={setNotif}
                />

                {/* icons */}
                <div className={`col-lg-5 col-xl-4 col-12 p-0 px-lg-3 px-xxl-4 mt-4 mt-lg-0`}>
                    {icons.map((item, index) =>
                        <Icons
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            href={item.href}
                            type={item.type}
                            description={item.description} />
                    )}
                </div>
            </div>

            {/* loading */}
            {loading &&
                <Loading loading={loading} setLoading={setLoading} />
            }

            {/* notif */}
            {
                notif &&
                <Notif
                    notif={notif}
                    message={`${state.language == "FA" ? "ایمیل با موفقیت فرستاده شد!" : ""}
                    ${state.language == "EN" ? "Email Sented Successfully!" : ""} `}
                    setNotif={setNotif}
                    muiColor="success"
                />
            }

            {
                errorSendEmail &&
                <Notif
                    notif={errorSendEmail}
                    message={`${state.language == "FA" ? "خطایی پیش آمده است!" : ""}
                    ${state.language == "EN" ? "an error has accurred" : ""} `}
                    setNotif={setErrorSendEmail}
                    muiColor="error"
                />
            }
        </div>
    )
}

export default ContactMe