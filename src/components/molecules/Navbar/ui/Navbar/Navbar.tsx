import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { TagType, Text, TextSize } from '../../../../atoms/Text/Text';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '../../../../atoms/Container/Container';
import { RoutePath } from '../../../../../router/routes';

import styles from './Navbar.module.css';

interface NavbarProps {
    className?: string;
    borderBottom?: boolean;
    last?: boolean;
}

export const Navbar = (props: NavbarProps) => {
    const {className, borderBottom, last} = props;

    const mods = {
        [styles.borderBottom]: borderBottom,
    }

    return (
        <Container>
            <div className={classNames(styles.Navbar, mods, [className])}>
                <Link to={RoutePath.HOME}>
                    <Text tagName='Goods4you' tagType={TagType.h1} size={TextSize.Xl} />
                </Link>
                <Navigation last={last} />
            </div>
        </Container>
    )
}
