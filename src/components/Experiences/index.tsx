import React from "react";
import Typography from "../Typography";
import AnimateOnScroll from "../../AnimateOnScroll";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Tag } from '@chakra-ui/react'
import "./index.scss";

export type ExperienceNodeProps = {
    title: string;
    experienceDetail: {
        companyUrl: string;
        companyLocation: string;
        roleTitle: string;
        startDate: string;
        endDate: string;
    }
    content: string;
}

type ExperiencesProps = {
    experiences: ExperienceNodeProps[];
};

export default function Experiences({ experiences }: ExperiencesProps) {

    return (
        <div className="py-8">
            <Typography className="mb-8" variant="h3" bold>EXPERIENCES</Typography>
            <div className="flex flex-col lg:gap-8 gap-10">
                {
                    experiences.map(experience => {
                        return (
                            <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.2s">

                                <div className="flex flex-col lg:flex-row gap-2 sm:gap-2 md:gap-4 lg:gap-0" key={experience.title}>
                                    <div className="w-full lg:w-1/4">
                                        <Typography variant="h6" italic>{experience.experienceDetail.startDate} - {experience.experienceDetail.endDate}</Typography>
                                        <Tag variant="outline">
                                            <FontAwesomeIcon className="w-3 h-3 mr-2" icon={faLocationDot} />
                                            {experience.experienceDetail.companyLocation}
                                        </Tag>
                                    </div>
                                    <div className="w-full lg:w-3/4 rounded-md border border-solid border-black dark:border-white p-4">
                                        <Typography variant="h6">
                                            {experience.experienceDetail.companyUrl &&
                                                <Link className="font-bold hover:underline p-2" to={experience.experienceDetail.companyUrl} target="_blank">
                                                    <FontAwesomeIcon className="w-3 h-3" icon={faExternalLinkAlt} />
                                                </Link>
                                            }
                                            <span className="font-bold">{experience.title}</span> - {experience.experienceDetail.roleTitle}
                                        </Typography>
                                        <div className="experience-content" dangerouslySetInnerHTML={{ __html: experience.content }} />
                                    </div>
                                </div>

                            </AnimateOnScroll>
                        )
                    })
                }
            </div>
        </div>
    )
}
