import { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Applink.module.css';

export enum AppLinkTheme {
    WHITE = 'white',
}

interface ApplinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
    onClick?: () => void;
    to?: string;
}

export const Applink = memo((props: ApplinkProps) => {
    const { className, onClick, children, to = '', theme = AppLinkTheme.WHITE} = props;

    const mods = {
        [styles[theme]]: theme
    }
    
    return (
        <Link to={to} onClick={onClick} className={classNames(styles.Applink, mods, [className])}>
            {children}
        </Link>
    )
})
