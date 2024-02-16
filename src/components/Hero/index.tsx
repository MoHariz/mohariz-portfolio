
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from '@chakra-ui/react';
import { Link } from "gatsby";
import Typography from "../Typography";
import { Typewriter } from 'react-simple-typewriter'
import AnimateOnScroll from "../../AnimateOnScroll";


const Hero: React.FC = () => {
    const verbs = [
        "connect!",
        "design!",
        "implement!",
        "test!",
        "ask all the questions!",
    ];

    return (
        <AnimateOnScroll oneDirectional animationName="fade-in" animationDuration="1s" animationDelay="0.5s">
            <div
                style={{
                    minHeight: 'calc(100vh - 57px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h1">Hi, I'm Muhammad.</Typography>
                <Typography variant="h3" className="mt-4">I am a full-stack software engineer with interests in front-end development, software infrastructure, and data analytics.</Typography>
                <Typography variant="h3" className="mt-4">
                    Let's {' '}
                    <Typewriter
                        words={verbs}
                        loop={5}
                        cursor
                        cursorStyle='|'
                    />
                </Typography>

                <div className="flex gap-4 lg:mt-30 md:mt-20 mt-10">
                    <Link className="relative" target="_blank" to={process.env.GATSBY_LINKEDIN_URL || ""}>
                        <Tooltip label='LinkedIn'>
                            <FontAwesomeIcon className="w-8 h-8" icon={faLinkedin} />
                        </Tooltip>
                    </Link>
                    <Link className="relative" target="_blank" to={process.env.GATSBY_GITHUB_LINK || ""}>
                        <Tooltip label='Github'>
                            <FontAwesomeIcon className="w-8 h-8" icon={faGithub} />
                        </Tooltip>
                    </Link>
                    <Link target="_blank" to={process.env.GATSBY_RESUME_LINK || ""}>
                        <Tooltip label='Resume'>
                            <FontAwesomeIcon className="w-8 h-8" icon={faFile} />
                        </Tooltip>
                    </Link>
                </div>
            </div>
        </AnimateOnScroll>
    )
}

export default Hero