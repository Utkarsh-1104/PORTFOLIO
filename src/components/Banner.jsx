import React from "react";
import Avatar from '../assests/mypic.png';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    return (
        <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="lg:flex-row lg:items-center flex flex-col items-center gap-y-8">
                    <motion.div 
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className="flex-1 text-center lg:text-left lg:ml-36">
                        <h1 className="text-[55px] font-bold leading-[0.8] font-['Audiowide'] pt-14 lg:text-[60px]">UTKARSH BAJPAI</h1>
                        <div className="mb-6 text-[36px] uppercase pt-5 lg:text-[60px] lg:font-semibold lg:leading-[1]">
                            <span>I am a </span>
                            <TypeAnimation 
                                sequence={[
                                    'Developer',
                                    2000,
                                    'Programmer',
                                    2000,
                                    'Freelancer',
                                    2000,
                                ]}
                                speed={50}
                                className="text-[#BE09CA]"
                                repeat={Infinity}/>
                        </div>
                        <p className="mb-8 max-w-lg mx-auto lg:mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore alias ab praesentium. Iste eveniet fugit, perferendis ratione eler.</p>
                        <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button className="btn btn-lg">Contact me</button>
                            <a href="#" className="text-gradient btn-link">My Portfolio</a>
                        </div>
                        <div className="flex text-[20px] gap-x-4 max-w-max mx-auto lg:mx-0">
                            <a href="https://github.com/Utkarsh-1104"><FaGithub/></a>
                            <a href="https://www.linkedin.com/feed/"><FaLinkedin/></a>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className="hidden lg:mr-36 flex-1 max-w-[320px] lg:flex lg:max-w-[482px]"><img src={Avatar} alt="" className="h-[30rem] w-[28rem] rounded-s-[9rem] rounded-e-[12rem]" /></motion.div>
                </div>
            </div>
        </div>
    )
}
export default About;