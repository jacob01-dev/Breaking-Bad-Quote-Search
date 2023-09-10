import { useState } from "react";

interface HeaderProp{
    setInputValue: Function
};

const Header = (prop: HeaderProp) : JSX.Element => {
    const [inputValue, setInputValue] = useState<string>("");
    
    const handleClick = (): void => {
        prop.setInputValue(inputValue);
    };

    return (
        <header className="w-full h-24 font-mono text-white flex items-center justify-end">
            <p className="left-5 text-2xl absolute">Breaking Bad Quote Search</p>
            <input type="text" className="w-48 h-8 p-3 text-black text-xl border-r-2 border-r-black rounded-l-lg outline-none" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
            <button className="w-24 h-8 bg-white mr-5 rounded-r-lg" onClick={handleClick}><span><i className="fa-solid fa-magnifying-glass" style={{color: "#000"}}></i></span></button>
        </header>
    )
};

export default Header;