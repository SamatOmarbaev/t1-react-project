import { ReactNode, memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../Text/ui/Text';

import styles from './SpecificationItem.module.css';

interface SpecificationItemProps {
    className?: string;
    property?: string | number | ReactNode;
    name?: string;
    max?: boolean;
}

export const SpecificationItem = memo((props: SpecificationItemProps) => {
    const {className, property, name, max} = props;

    return (
        <div className={classNames(styles.SpecificationItem, {[styles.max]: max}, [className])}>
            <Text 
                size={TextSize.S} 
                weight={TextWeight.SEMIBOLD} 
                tagType={TagType.SPAN} 
                tagName={name} 
                theme={TextTheme.GRAY} 
                className={classNames('', {[styles.max]: max})}
            />
            <Text 
                size={TextSize.S} 
                weight={TextWeight.SEMIBOLD} 
                tagName={property} 
                theme={TextTheme.DARK_GRAY} 
                className={classNames(styles.property, {[styles.max]: max})}
            />
        </div>
    )
})
