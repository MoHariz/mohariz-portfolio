import * as React from "react";
import "./index.scss";
import cs from "classnames";

type TypographyProps = {
    className?: string;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
    style?: React.CSSProperties;
    bold?: boolean;
    italic?: boolean;
};

const Typography: React.FC<TypographyProps> = ({ className, variant = 'p', children, style, bold, italic }) => {
    const Tag = variant; // dynamically set the HTML tag based on the variant
    return <Tag className={cs(className, `typography-${variant}`)} style={{ ...style, fontWeight: bold ? 'bold' : 'normal', fontStyle: italic ? 'italic' : 'normal' }}>{children}</Tag>;
};

export default Typography;
