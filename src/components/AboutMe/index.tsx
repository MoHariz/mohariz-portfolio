import React from "react";
import Typography from "../Typography";
import AnimateOnScroll from "../../AnimateOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "@chakra-ui/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./index.css";

export type AboutMeProps = {
    featuredImage: {
        node: {
            altText: string;
            gatsbyImage: any;
        }
    }
    content: string;
}

export default function AboutMe({ featuredImage, content }: AboutMeProps) {
    const image = getImage(featuredImage.node.gatsbyImage)

    return (
        <div className="py-8">
            <Typography className="mb-8" variant="h3" bold>ABOUT ME</Typography>
            <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.2s">
                <div className="flex flex-col gap-2 sm:gap-2 md:gap-4">
                    <GatsbyImage image={image} alt={featuredImage.node.altText} className="w-1/3 lg:w-1/4 rounded-md border border-solid border-black dark:border-white" />
                    <Typography className="mb-0" variant="p">
                        <div className="about-me-content" dangerouslySetInnerHTML={{ __html: content }} />
                    </Typography>
                    <div className="flex justify-center my-4">
                        <a href="mailto:muhammadhariz206@gmail.com">
                            <Tooltip label='Contact me'>
                                <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10 animate-bounce" />
                            </Tooltip>
                        </a>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    )
}
