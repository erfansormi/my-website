import React, { useRef, useState, useContext } from 'react'

// emeiljs
import emailjs from "@emailjs/browser"

// components
import HeadTitle from '../../Other/HeadTitle'
import Input from '../../Other/Input';
import Loading from "../../Loading/Loading"
import Notif from "../../Notification/Notif"

// context
import { DataContext } from '../../../Context/DataContextProvider';

//css 
import styles from "./contact.module.css"

const ContactMe = ({ item }) => {
    const { state } = useContext(DataContext);

    const { title, icons, inputs, btn } = item;

    const form = useRef();

    // state
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [loading, setLoading] = useState(false)
    const [notif, setNotif] = useState(false)

    // functions
    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)

        emailjs.sendForm('service_9jaj78h', 'template_475lwnd', form.current, 'EuTWTWO2NCl2lVsaX')
            .then((result) => {
                setInputValue({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
                setLoading(false)
                setNotif(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-100'>
            <HeadTitle title={title} />
            <div className='row gx-5 mt-4'>

                {/* inputs */}
                <div className={`col-8 ${styles.inputs_container} shadow`}>
                    <form ref={form} onSubmit={sendEmail}
                        className="col-12 row gx-4">
                        {inputs.map((item, index) =>
                            index < 2 ?
                                <div
                                    className={`col-6`}
                                    key={index}>
                                    <Input value={inputValue[item.name]}
                                        handleChange={handleChange}
                                        htmlName={item.name}
                                        type={item.type}
                                        text={item.placeHolder} />
                                </div>
                                :
                                <div
                                    className={`col-12`}
                                    key={index}>
                                    <Input value={inputValue[item.name]}
                                        handleChange={handleChange}
                                        htmlName={item.name}
                                        type={item.type}
                                        text={item.placeHolder} />
                                </div>
                        )}
                        <div className='mt-3'>
                            <button
                                className={`btn-orange btn w-25`}
                                type={"submit"}
                                value="Send">
                                {btn}
                            </button>
                        </div>
                    </form>
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
                                    {item.type == "link" ?
                                        <a href={item.href}
                                            className={`${styles.contact_me_link}
                                            text-light opacity-50`}>
                                            {item.description}
                                        </a>
                                        :
                                        <span
                                            className={`text-light opacity-50`}>
                                            {item.description}
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
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
                />
            }
        </div>
    )
}

export default ContactMe