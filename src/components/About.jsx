import React from "react";
import Aboutimg from '../assests/maskre1.png';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    const [ref, inView] =  useInView({
        threshold: 0.5,
    });
    return (
        <div className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 gap-x-12 lg:flex-row lg:items-center lg:place-content-center">
                    <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}>
                        <img className="flex-1 bg-contain bg-no-repeat h-[550px] w-[400px] mix-blend-lighten bg-top" src={Aboutimg} alt="" />
                    </motion.div>
                    <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className="w-auto mx-6 lg:w-[40rem]">
                        <h1 className='text-6xl font-[Wallpoet] text-[#BE09CA]'>About Me</h1>
                        <h2 className="text-3xl font-[Flamenco] uppercase mb-5">I'm a Freelance Web Developer with 5 months of experience.</h2>
                        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae impedit distinctio vitae voluptatibus error laborum cupiditate, in iure odit eum, sapiente optio illum! Accusantium minima delectus, quam harum ea quia!</p>
                        <div className="sm:flex gap-x-6 lg:gap-x-10 mb-10">
                            <div>
                                <div className="text-[40px] text-gradient my-4">
                                    {inView ? <CountUp start={0} end={5} duration={5}/> : null}
                                </div>
                                <div className="text-xl font-[Chonburi] tracking-[2px]">Months<br/> of Experience</div>
                            </div>
                            <div>
                                <div className="text-[40px] text-gradient my-4">
                                    {inView ? <CountUp start={0} end={15} duration={5}/> : null}
                                </div>
                                <div className="text-xl font-[Chonburi] tracking-[2px]">Projects<br/>Completed</div>
                            </div>
                            <div>
                                <div className="text-[40px] text-gradient my-4">
                                    {inView ? <CountUp start={0} end={12} duration={5}/> : null}
                                </div>
                                <div className="text-xl font-[Chonburi] tracking-[2px]">Satisfied<br/>Clients</div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <button className="btn btn-lg">Contact Me</button>
                            <a href="#" className="text-gradient btn-link">My Portfolio</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default About;