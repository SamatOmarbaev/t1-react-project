import classNames from 'classnames';
import styles from './Header.module.css';
import { Navbar } from '../../molecules/Navbar';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const {className} = props;

    return (
        <header className={classNames(styles.Header, {}, [className])}>
            <Navbar borderBottom />
        </header>
    )
}
