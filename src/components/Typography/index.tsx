import * as React from "react";
import "./index.css";
import cs from "classnames";

type TypographyProps = {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
    style?: React.CSSProperties;
    bold?: boolean;
};

const Typography: React.FC<TypographyProps> = ({ className, variant = 'p', children, style, bold }) => {
    const Tag = variant; // dynamically set the HTML tag based on the variant
    return <Tag className={cs(className, `typography-${variant}`)} style={{ ...style, fontWeight: bold ? 'bold' : 'normal' }}>{children}</Tag>;
};

export default Typography;
