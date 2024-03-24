import classNames from 'classnames';

import { Navbar } from '../../molecules/Navbar';

import styles from './Footer.module.css'

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const {className} = props;

    return (
        <footer className={classNames(styles.Footer, {}, [className])}>
            <Navbar last={false} />
        </footer>
    )
}
