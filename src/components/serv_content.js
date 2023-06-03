import React from "react";
import {BsArrowUpRight} from 'react-icons/bs';

function Content ({heading}) {
    return (
        <div className="">
            <div className="flex">
                <div className="w-[70%]">
                    <p className="font-[Chonburi] text-2xl mb-4">{heading}</p>
                    <p className="text-sm w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellendus ab nostrum.</p>
                </div>
                <div className="me-0">
                    <a href="#" className="btn w-9 h-9"><BsArrowUpRight /></a>
                    <p className="text-gradient btn-link mt-6">Learn More</p>
                </div>
            </div>
            <hr className="w-[90%] mb-9 mt-3"></hr>
        </div>
    )
}
export default Content;