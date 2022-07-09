import { ImHome } from "react-icons/im"
import { RiContactsFill } from "react-icons/ri"
import { BsBarChartFill } from "react-icons/bs"
import { GiHandBag } from "react-icons/gi"
import { IoCallSharp } from "react-icons/io5"

export const FixedSideBarData = {
    FA: [
        {
            icon: <ImHome />,
            text: "صفحه اصلی"
        },
        {
            icon: <RiContactsFill />,
            text: "درباره من"
        },
        {
            icon: <BsBarChartFill />,
            text: "مهارت ها"
        },
        {
            icon: <GiHandBag />,
            text: "نمونه کارها"
        },
        {
            icon: <IoCallSharp />,
            text: "تماس با من"
        },
    ],
    EN: [
        {
            icon: <ImHome />,
            text: "home"
        },
        {
            icon: <RiContactsFill />,
            text: "about me"
        },
        {
            icon: <BsBarChartFill />,
            text: "skills"
        },
        {
            icon: <GiHandBag />,
            text: "portfolio"
        },
        {
            icon: <IoCallSharp />,
            text: "contact"
        },
    ]
}