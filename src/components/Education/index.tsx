import React from "react";
import Typography from "../Typography";
import { WithAnimateOnScroll } from "../AnimateOnScroll";
import { Tag } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
    return (
        <div className="py-8">
            <Typography className="mb-8" variant="h3" bold>EDUCATION</Typography>
            <WithAnimateOnScroll amount={0.2}>
                <div className="flex flex-col lg:flex-row gap-2 sm:gap-2 md:gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/4">
                        <Typography variant="h6" italic>2016 - 2019</Typography>
                        <Tag variant="outline">
                            <FontAwesomeIcon className="w-3 h-3 mr-2" icon={faLocationDot} />
                            Seattle, WA
                        </Tag>
                    </div>
                    <div className="w-full lg:w-3/4 rounded-md border border-solid border-black dark:border-white p-4">
                        <Typography variant="h6" bold>
                            University of Washington
                        </Typography>
                        <Typography className="mb-0" variant="p">Bachelor of Science in Informatics</Typography>
                    </div>
                </div>
            </WithAnimateOnScroll>
        </div>
    )
}