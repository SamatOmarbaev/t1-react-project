import { ReactNode, memo } from 'react';
import classNames from 'classnames';

import styles from './Text.module.css';

export enum TextTheme {
    WHITE = 'white',
    DARK_GRAY = 'dark_gray',
    GRAY = 'gray',
    DARK = 'dark',
    ERROR = 'error',
}
  
export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    Xl = 'size_xl',
    XXL = 'size_xxl',
}

export enum TextWeight {
    REGULAR = 'weight_reg',
    BOLD = 'weight_bold',
    SEMIBOLD = 'weight_semibold',
}
  
export enum TagType {
    P = 'paragraph',
    SPAN = 'span',
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

type MapTagType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  
const mapTagType: Record<TagType, MapTagType> = {
    [TagType.P]: 'p',
    [TagType.SPAN]: 'span',
    [TagType.h6]: 'h6',
    [TagType.h5]: 'h5',
    [TagType.h4]: 'h4',
    [TagType.h3]: 'h3',
    [TagType.h2]: 'h2',
    [TagType.h1]: 'h1',
};
  
interface TextProps {
    className?: string;
    tagName?: string | number | ReactNode;
    tagType?: TagType;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    weight?: TextWeight;
}

export const Text = memo((props: TextProps) => {
    const {
        className, tagName, tagType = TagType.P, 
        theme = TextTheme.WHITE, align = TextAlign.LEFT,
        size = TextSize.S, weight = TextWeight.BOLD
    } = props;

    const TextTag = mapTagType[tagType];

    const mods = {
        [styles[theme]]: theme, 
        [styles[align]]: align, 
        [styles[size]]: size,  
        [styles[weight]]: weight,  
    };

    return (
        <>
            {tagName && (
                <TextTag 
                    className={classNames(styles.Text, mods, [className])}
                >
                    {tagName}
                </TextTag>
            )}
        </>
    )
})
