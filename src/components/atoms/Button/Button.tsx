import classNames from 'classnames';
import styles from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    RED = 'red',
    DARK = 'dark',
}

export enum ButtonTextColor {
    WHITE = 'white',
    DARK = 'dark_color',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ButtonTheme;
    textColor?: ButtonTextColor;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {children, className, textColor = ButtonTextColor.DARK, theme, ...otherProps} = props;

    const mods = {
        [styles[theme]]: theme,
        [styles[textColor]]: textColor,
    }

    return (
        <button 
            className={classNames(styles.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
})
