import React from "react";
import Logo from '../assests/UBLOGO1.png';

const About = () => {
    return (
        <header className="">
            <div className="container mx-auto">
                <div className="flex place-content-center items-center gap-64 lg:gap-[44rem]">
                    <a href="#">
                        <img src={Logo} className="w-[290px] h-[105px] lg:w-96 lg:h-40" alt="" />
                    </a>
                    <button className="btn btn-lg hidden lg:inline">Work with me</button>
                </div>
            </div>
        </header>
    )
}
export default About;