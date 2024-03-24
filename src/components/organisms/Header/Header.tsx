import { memo } from 'react';
import classNames from 'classnames';

import { Navbar } from '../../molecules/Navbar';

import styles from './Header.module.css';

interface HeaderProps {
    className?: string;
    borderBottom?: boolean;
}

export const Header = memo((props: HeaderProps) => {
    const {className, borderBottom} = props;

    return (
        <header className={classNames(styles.Header, {}, [className])}>
           <Navbar borderBottom={borderBottom} />
        </header>
    )
})
