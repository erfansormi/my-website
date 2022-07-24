import { ImHome } from "react-icons/im"
import { RiContactsFill } from "react-icons/ri"
import { BsBarChartFill } from "react-icons/bs"
import { GiHandBag } from "react-icons/gi"
import { IoCallSharp } from "react-icons/io5"

export const FixedSideBarData = {
    FA: [
        {
            icon: <ImHome />,
            text: "صفحه اصلی",
            link:"home"
        },
        {
            icon: <RiContactsFill />,
            text: "درباره من",
            link:"about"
        },
        {
            icon: <BsBarChartFill />,
            text: "مهارت ها",
            link:"skills"
        },
        {
            icon: <GiHandBag />,
            text: "نمونه کارها",
            link:"portfolio"
        },
        {
            icon: <IoCallSharp />,
            text: "تماس با من",
            link:"contact"
        },
    ],
    EN: [
        {
            icon: <ImHome />,
            text: "home",
            link:"home"
        },
        {
            icon: <RiContactsFill />,
            text: "about me",
            link:"about"
        },
        {
            icon: <BsBarChartFill />,
            text: "skills",
            link:"skills"
        },
        {
            icon: <GiHandBag />,
            text: "portfolio",
            link:"portfolio"
        },
        {
            icon: <IoCallSharp />,
            text: "contact",
            link:"contact"
        },
    ]
}