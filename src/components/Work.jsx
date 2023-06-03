import React from "react";
import Img1 from '../assests/img1.png';
import Img2 from '../assests/img2.png';
import Img3 from '../assests/img3.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    return (
        <div className="section" id="work"> 
            <div className="container mx-auto">
                <div className="mx-auto max-w-fit max-h-fit">
                    <div className="flex flex-col gap-y-6 md:gap-x-12 md:flex-row md:mb-12">
                        <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} className="ms-4 w-[450px]">
                            <p className="font-[Wallpoet] text-[#BE09CA] text-4xl mb-2">MY LATEST<br/>WORK</p>
                            <p className="text-base leading-8">Lorem ipsum, dolor sit ameteum runt ipsa quo ratione similique fugiat eius odit magnam ab, assumenda mollitia delectus unde hic aliquam?</p>
                            <button className="btn btn-lg mt-6">View all projects</button>
                        </motion.div>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} className="group relative overflow-hidden border-4 border-gray-400 rounded-lg">
                            <div className="group-hover:bg-black/70 absolute z-40 w-full h-full transition-all duration-300 "></div>
                            <img src={Img2} className="group-hover:scale-125 transition-all duration-500 w-[450px] h-[260px]" alt="" />
                            <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-[4.5rem] transition-all duration-500 z-50">
                                <p className="">UI/UX Design</p>
                                <p className="">Project Title</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="mt-6 flex flex-col gap-y-6 md:gap-x-12 md:flex-row md:mb-12">
                        <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} className="group relative overflow-hidden border-4 border-gray-400 rounded-lg">
                            <div className="group-hover:bg-black/70 absolute z-40 w-full h-full transition-all duration-300 "></div>
                            <img src={Img1} className="group-hover:scale-125 transition-all duration-500 w-[450px] h-[260px] border-4 border-gray-400 rounded-lg" alt="" />
                            <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-[4.5rem] transition-all duration-500 z-50">
                                <p className="">UI/UX Design</p>
                                <p className="">Project Title</p>
                            </div>
                        </motion.div>
                        <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden' 
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}} className="group relative overflow-hidden border-4 border-gray-400 rounded-lg">
                            <div className="group-hover:bg-black/70 absolute z-40 w-full h-full transition-all duration-300 "></div>
                            <img src={Img3} className="group-hover:scale-125 transition-all duration-500 w-[450px] h-[260px] border-4 border-gray-400 rounded-lg" alt="" />
                             <div className="text-gradient absolute -bottom-full left-12 group-hover:bottom-[4.5rem] transition-all duration-500 z-50">
                                <p className="">UI/UX Design</p>
                                <p className="">Project Title</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;