import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Container.module.css';

interface ContainerProps {
    className?: string;
    children?: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const {className, children} = props;

    return (
       <div className={classNames(styles.Container, {}, [className])}>
            {children}
       </div>
    )
}
