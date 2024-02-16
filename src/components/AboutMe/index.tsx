import React from "react";
import Typography from "../Typography";
import AnimateOnScroll from "../../AnimateOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "@chakra-ui/react";
import "./index.css";

export type AboutMeProps = {
    featuredImage: {
        node: {
            altText: string;
            sourceUrl: string;
        }
    }
    content: string;
}

export default function AboutMe({ featuredImage, content }: AboutMeProps) {
    return (
        <div className="py-8">
            <Typography className="mb-8" variant="h3" bold>ABOUT ME</Typography>
            <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.2s">
                <div className="flex flex-col gap-2 sm:gap-2 md:gap-4">
                    <img src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} className="w-1/3 lg:w-1/4 rounded-md border border-solid border-black dark:border-white" />
                    <Typography className="mb-0" variant="p">
                        <div className="about-me-content" dangerouslySetInnerHTML={{ __html: content }} />
                    </Typography>
                    <a href="mailto:muhammadhariz206@gmail.com">
                        <Tooltip label='Contact me'>
                            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                        </Tooltip>
                    </a>
                </div>
            </AnimateOnScroll>
        </div>
    )
}
