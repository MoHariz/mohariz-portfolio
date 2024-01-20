import * as React from "react";
import "./index.css";
import cs from "classnames";

type TypographyProps = {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
    children: React.ReactNode;
    style?: React.CSSProperties;
};

const Typography: React.FC<TypographyProps> = ({ className, variant = 'p', children, style }) => {
    const Tag = variant; // dynamically set the HTML tag based on the variant
    return <Tag className={cs(className, `typography-${variant}`)} style={style}>{children}</Tag>;
};

export default Typography;