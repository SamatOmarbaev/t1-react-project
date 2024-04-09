import { memo } from 'react';
import classNames from 'classnames';

import { Navbar } from '@/components/molecules/Navbar';

import styles from './Header.module.css';

interface HeaderProps {
    className?: string;
    borderBottom?: boolean;
    isAdminPage?: boolean;
}

export const Header = memo((props: HeaderProps) => {
    const {className, borderBottom, isAdminPage} = props;

    return (
        <header className={classNames(styles.Header, {}, [className])}>
           <Navbar isAdminPage={isAdminPage} borderBottom={borderBottom} />
        </header>
    )
})
