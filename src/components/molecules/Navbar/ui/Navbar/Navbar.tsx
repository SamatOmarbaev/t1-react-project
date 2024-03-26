import classNames from 'classnames';
import styles from './Navbar.module.css';
import { TagType, Text, TextSize } from '../../../../atoms/Text/Text';
import { Navigation } from '../Navigation/Navigation';
import { Container } from '../../../../atoms/Container/Container';

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
                <Text tagName='Goods4you' tagType={TagType.h1} size={TextSize.Xl} />
                <Navigation last={last} />
            </div>
        </Container>
    )
}
