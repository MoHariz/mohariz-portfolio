import React from "react";
import { Tag } from '@chakra-ui/react'
import Typography from "../Typography";
import { WithAnimateOnScroll } from "../AnimateOnScroll";

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
            <Typography className="mb-8" variant="h3" bold>SKILLS SETS</Typography>
            <WithAnimateOnScroll amount={0.2}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {
                        skillSets.map(skillSet => {
                            return (
                                <div className="border rounded-md border-solid border-black dark:border-white p-4" key={skillSet.title}>
                                    <Typography variant="h5" className="mb-4" bold>{skillSet.title}</Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            skillSet.skills.nodes.map(skill => {
                                                return (
                                                    <Tag key={skill.name}>{skill.name}</Tag>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </WithAnimateOnScroll>
        </div>
    )
}
