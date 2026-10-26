import * as React from 'react';
import './index.scss';
import cs from 'classnames';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TypographyProps = {
  className?: string;
  /** Visual size. Also the HTML tag, unless `as` is given. */
  variant?: Variant;
  /** HTML tag to render, when it should differ from the visual variant (keeps heading order valid). */
  as?: Variant | 'div' | 'span';
  children: React.ReactNode;
  style?: React.CSSProperties;
  bold?: boolean;
  italic?: boolean;
};

const Typography: React.FC<TypographyProps> = ({
  className,
  variant = 'p',
  as,
  children,
  style,
  bold,
  italic
}) => {
  const Tag = as || variant;
  return (
    <Tag
      className={cs(className, `typography-${variant}`, {
        'font-bold': bold,
        italic: italic
      })}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Typography;
