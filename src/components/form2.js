import React from "react";

function Formtxt ({para}) {
    return (
        <textarea className="bg-transparent border-b py-12 outline-none w-full resize-none mb-12 placeholder:text-white font-[Chonburi] focus:border-[rgb(190,9,202)] transition-all" 
        placeholder={para}></textarea>
    )
}
export default Formtxt;