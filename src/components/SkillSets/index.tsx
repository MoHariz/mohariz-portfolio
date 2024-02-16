import React from "react";
import { Tag } from '@chakra-ui/react'
import Typography from "../Typography";
import AnimateOnScroll from "../../AnimateOnScroll";

export type SkillSetNodeProps = {
    title: string;
    skills: {
        nodes: {
            name: string;
        }[];
    };
}

type SkillSetsProps = {
    skillSets: SkillSetNodeProps[];
};

export default function SkillSets({ skillSets }: SkillSetsProps) {

    return (
        <div className="py-8">
            <Typography className="mb-8" variant="h3">SKILLS SETS</Typography>
            <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.2s">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {
                        skillSets.map(skillSet => {
                            return (
                                <div className="border rounded-md border-solid border-black dark:border-white p-4" key={skillSet.title}>
                                    <Typography variant="h4" className="mb-4">{skillSet.title}:</Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            skillSet.skills.nodes.map(skill => {
                                                return (
                                                    <Tag key={skill.name} colorScheme="teal">{skill.name}</Tag>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </AnimateOnScroll>
        </div>
    )
}
