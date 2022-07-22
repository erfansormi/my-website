import React, { useState, useRef } from 'react'

// components
import Input from '../../Other/Input';

//css 
import styles from "./contact.module.css"

// functions
import { errorSend } from '../../Functions/Functions';

// emeiljs
import emailjs from "@emailjs/browser"

const Inputs = ({ inputs, btn, setLoading, setNotif, setErrorSendEmail }) => {
    const form = useRef()

    // state
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    // functions
    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // isOffline
        if (window.navigator.onLine == false) {
            errorSend(setLoading, setErrorSendEmail);
        }

        // send
        emailjs.sendForm('service_9jaj78h', 'template_475lwnd', form.current, 'EuTWTWO2NCl2lVsaX')
            .then((result) => {
                if (/^2/.test(result.status)) {
                    setInputValue({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    })
                    setLoading(false)
                    setNotif(true)
                }
                else {
                    errorSend(setLoading, setErrorSendEmail);
                }
            });
    };

    return (
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
    )
}

export default Inputs