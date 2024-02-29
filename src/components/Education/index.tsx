import React from "react";
import Typography from "../Typography";
import AnimateOnScroll from "../../AnimateOnScroll";
import { Tag } from '@chakra-ui/react'

export default function Education() {
    return (
        <div className="py-8">
            <Typography className="mb-8" variant="h3" bold>EDUCATION</Typography>
            <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.2s">
                <div className="flex flex-col lg:flex-row gap-2 sm:gap-2 md:gap-4 lg:gap-0">
                    <div className="w-full lg:w-1/4">
                        <Typography variant="h6" italic>2016 - 2019</Typography>
                        <Tag variant="outline">Seattle, WA</Tag>
                    </div>
                    <div className="w-full lg:w-3/4 rounded-md border border-solid border-black dark:border-white p-4">
                        <Typography variant="h6" bold>
                            University of Washington
                        </Typography>
                        <Typography className="mb-0" variant="p">Bachelor of Science in Informatics</Typography>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    )
}