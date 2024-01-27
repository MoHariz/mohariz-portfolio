
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@chakra-ui/react';
import { Link } from "gatsby";
import Typography from "../Typography";
import { Typewriter } from 'react-simple-typewriter'
import './index.css';


const Hero: React.FC = () => {
    const verbs = [
        "connect!",
        "design!",
        "implement!",
        "test!",
        "ask all the questions!",
    ];

    return (
        <div>
            <Typography variant="h1" className="fade-in">Hi, I'm Muhammad.</Typography>
            <Typography variant="h3" className="mt-4 fade-in">I am a full-stack software engineer with interests in front-end development, software infrastructure, and data analytics.</Typography>
            <Typography variant="h3" className="mt-4 fade-in">
                Let's {' '}
                <Typewriter
                    words={verbs}
                    loop={5}
                    cursor
                    cursorStyle='|'
                />
            </Typography>

            <div className="flex gap-4 lg:mt-30 md:mt-20 mt-10 fade-in">
                <Link className="relative" target="_blank" to="https://www.linkedin.com/in/mohariz/">
                    <Tooltip label='LinkedIn'>
                        <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
                    </Tooltip>
                </Link>
                <Link target="_blank" to="https://drive.google.com/file/d/1yWlzv96ak89aRcXNfrlDUnQ7VyYZsq0J/view?usp=sharing">
                    <Tooltip label='Resume'>
                        <FontAwesomeIcon className="w-8 h-8" icon={faFile} />
                    </Tooltip>
                </Link>
            </div>
        </div>
    )
}

export default Hero