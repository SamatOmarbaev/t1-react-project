import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { TagType, Text, TextSize } from '@/components/atoms/Text';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '@/components/atoms/Container';
import { RoutePath } from '@/router/routes';

import styles from './Navbar.module.css';

interface NavbarProps {
    className?: string;
    borderBottom?: boolean;
    last?: boolean;
    isAdminPage?: boolean;
}

export const Navbar = (props: NavbarProps) => {
    const {className, borderBottom, last, isAdminPage} = props;

    const mods = {
        [styles.borderBottom]: borderBottom,
    }

    return (
        <Container>
            <div className={classNames(styles.Navbar, mods, [className])} role='navigation'>
                <Link to={RoutePath.HOME}>
                    <Text tagName='Goods4you' tagType={TagType.h1} size={TextSize.Xl} />
                </Link>
                <Navigation isAdminPage={isAdminPage} last={last} />
            </div>
        </Container>
    )
}
