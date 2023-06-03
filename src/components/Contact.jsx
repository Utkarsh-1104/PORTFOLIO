import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Forminput from "./form";
import Formtxt from "./form2";

const About = () => {
    return (
        <div className="py-16 lg:section" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial='hidden' 
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                     className="flex-1 lg:ms-20">
                        <div>
                            <h1 className="text-2xl mb-2 tracking-wide font-[Chonburi] text-[#BE09CA]">GET IN TOUCH</h1>
                            <h1 className="font-[Wallpoet] leading-none mb-12 text-[45px] lg:text-[70px]">Let's Work <br />together</h1>
                        </div>
                    </motion.div>
                    <motion.form
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false, amount:0.3}} 
                    action="" className="flex-1 lg:me-20">
                        <Forminput txt="Your Name"/>
                        <Forminput txt="Your Email"/>
                        <Formtxt para="Your Message"/>
                        <button className="btn btn-lg">Send Message</button>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}
export default About;