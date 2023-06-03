import React from "react";
import servimg from '../assests/services.png';
import Content from "./serv_content";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    return (
        <div className="section" id="services">
            <div className="container mx-auto">
                <div className="max-w-fit flex flex-col gap-y-10 lg:flex-row lg:gap-x-12 lg:items-center lg:place-content-center">
                    <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden' 
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className="lg:w-[30%]">
                        <div className="z-10 mx-5">
                            <h1 className="font-[Wallpoet] text-[#BE09CA] text-5xl">WHAT I DO</h1>
                            <h2 className="mb-7 font-[Chonburi] text-2xl">I'm a Freelance Front-end Web Developer with 5 months of experience.</h2>
                            <button className="btn btn-lg">See My Work</button>
                        </div>
                        <img src={servimg} className="mb-8 flex-1 hidden lg:inline-flex lg:-z-0 lg:bg-contain lg:bg-no-repeat lg:mix-blend-lighten lg:h-[26rem]" alt=""/>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className="lg:w-[40%] m-3">
                        <Content heading="UI/UX Design"/>
                        <Content heading="Development"/>
                        <Content heading="Digital Marketing"/>
                        <Content heading="Something"/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default About;