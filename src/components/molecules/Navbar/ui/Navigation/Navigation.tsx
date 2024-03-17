import classNames from 'classnames';
import styles from './Navigation.module.css';
import { Applink } from '../../../../atoms/Applink/Applink';
import { memo } from 'react';

interface NavigationProps {
    className?: string;
    last?: boolean;
}

export const Navigation = memo((props: NavigationProps) => {
    const {className, last = true} = props;

    return (
       <nav className={classNames(styles.Navigation, {}, [className])}>
            <Applink>
                Catalog
            </Applink>
            <Applink>
                About us
            </Applink>
            <Applink>
                Product selection
            </Applink>
            <Applink>
                Our team
            </Applink>
            <Applink>
                FAQ
            </Applink>
            {last && <Applink>
                For staff
            </Applink>}
       </nav>
    )
})
