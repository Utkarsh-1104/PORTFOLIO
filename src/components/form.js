import React from "react";

function Forminput({txt}) {
    return (
        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white font-[Chonburi] focus:border-[rgb(190,9,202)] transition-all" 
        type="text"
        placeholder={txt} />
    )
}
export default Forminput;