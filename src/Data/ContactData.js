import { IoCallSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaLocationArrow } from "react-icons/fa"

export const ContactData = {
    FA: [
        {
            title: "تماس با من",
            btn: "ارسال",
            icons: [
                {
                    title: "تلفن",
                    description: "09399112453",
                    icon: <IoCallSharp />,
                    type: "link",
                    href: "tel:+09399112453"
                },
                {
                    title: "ایمیل",
                    description: "erfansormi97@gmail.com",
                    icon: <MdEmail />,
                    type: "link",
                    href: "mailto:erfansormi97@gmail.com"
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
                    placeHolder: "نام",
                    name: "name"
                },
                {
                    type: "email",
                    placeHolder: "ایمیل",
                    name: "email"
                },
                {
                    type: "text",
                    placeHolder: "موضوع",
                    name: "subject"
                },
                {
                    type: "area",
                    placeHolder: "متن پیام",
                    name: "message"
                },
            ]
        }
    ],
    EN: [
        {
            title: "contact me",
            btn: "send",
            icons: [
                {
                    title: "phone",
                    description: "09399112453",
                    icon: <IoCallSharp />,
                    type: "link",
                    href: "tel:+"
                },
                {
                    title: "email",
                    description: "erfansormi97@gmail.com",
                    icon: <MdEmail />,
                    type: "link",
                    href: "mailto:"
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