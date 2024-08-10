import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/muhammad-qasim-khan-900988252/" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://github.com/Mkasimkhan" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;