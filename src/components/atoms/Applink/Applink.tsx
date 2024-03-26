import { ReactNode, memo } from 'react';
import classNames from 'classnames';
import styles from './Applink.module.css';

export enum AppLinkTheme {
    WHITE = 'white',
}

interface ApplinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
}

export const Applink = memo((props: ApplinkProps) => {
    const { className, children, theme = AppLinkTheme.WHITE} = props;

    const mods = {
        [styles[theme]]: theme
    }
    
    return (
        <a className={classNames(styles.Applink, mods, [className])}>
            {children}
        </a>
    )
})
