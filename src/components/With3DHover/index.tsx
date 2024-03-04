import React from "react";
import { motion } from "framer-motion";

type With3DHoverProps = {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export default function With3DHover({ children, className, style }: With3DHoverProps) {
    const [hoverEffect, setHoverEffect] = React.useState({ rotateX: 0, rotateY: 0 });

    const handleMouseMove = (event) => {
        const {clientX, clientY,currentTarget} = event;

        const {top, left, width, height} = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const posX = clientX - centerX;
        const posY = clientY - centerY;
        // Scale the rotation effect
        const rotateX = posY / (height/2) * -10;
        const rotateY = posX / (width/2) * 10;
        setHoverEffect({ rotateX, rotateY });
    }

    const handleMouseLeave = () => {
        setHoverEffect({ rotateX: 0, rotateY: 0 });
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ 
                rotateX: hoverEffect.rotateX,
                rotateY: hoverEffect.rotateY,
                transition: { duration: 0.5 }
            }}
            transition={{ duration: 0.5 }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}