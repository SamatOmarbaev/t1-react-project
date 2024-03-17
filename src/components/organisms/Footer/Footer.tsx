import classNames from 'classnames';
import styles from './Footer.module.css'
import { Navbar } from '../../molecules/Navbar';

interface HeaderProps {
    className?: string;
}

export const Footer = (props: HeaderProps) => {
    const {className} = props;

    return (
        <footer className={classNames(styles.Footer, {}, [className])}>
            <Navbar last={false} />
        </footer>
    )
}
