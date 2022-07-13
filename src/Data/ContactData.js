import { IoCallSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaLocationArrow } from "react-icons/fa"

export const ContactData = {
    FA: [
        {
            title: "تماس با من",
            btn:"ارسال",
            icons: [
                {
                    title: "تلفن",
                    description: "09399112453",
                    icon: <IoCallSharp />
                },
                {
                    title: "ایمیل",
                    description: "erfansormi97@gmail.com",
                    icon: <MdEmail />
                },
                {
                    title: "آدرس",
                    description: "ایران، کرج، حصارک بالا",
                    icon: <FaLocationArrow />
                },
            ],
            inputs: [
                {
                    type: "text",
                    placeHolder: "نام"
                },
                {
                    type: "email",
                    placeHolder: "ایمیل"
                },
                {
                    type: "text",
                    placeHolder: "موضوع"
                },
                {
                    type: "area",
                    placeHolder: "متن پیام"
                },
            ]
        }
    ],
    EN: [
        {
            title: "contact me",
            btn:"send",
            icons: [
                {
                    title: "phone",
                    description: "09399112453",
                    icon: <IoCallSharp />
                },
                {
                    title: "email",
                    description: "erfansormi97@gmail.com",
                    icon: <MdEmail />
                },
                {
                    title: "address",
                    description: "HESARAK BALA, KARAJ, IRAN",
                    icon: <FaLocationArrow />
                },
            ],
            inputs: [
                {
                    type: "text",
                    placeHolder: "name"
                },
                {
                    type: "email",
                    placeHolder: "email"
                },
                {
                    type: "text",
                    placeHolder: "subject"
                },
                {
                    type: "area",
                    placeHolder: "message text"
                },
            ]
        }
    ]
}