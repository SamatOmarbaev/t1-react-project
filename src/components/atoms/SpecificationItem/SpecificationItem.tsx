import { memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../Text/Text';

import styles from './SpecificationItem.module.css';

interface SpecificationItemProps {
    className?: string;
    property?: string | number;
    name?: string;
}

export const SpecificationItem = memo((props: SpecificationItemProps) => {
    const {className, property, name} = props;

    return (
        <div className={classNames(styles.SpecificationItem, {}, [className])}>
            <Text 
                size={TextSize.S} 
                weight={TextWeight.SEMIBOLD} 
                tagType={TagType.SPAN} 
                tagName={name} 
                theme={TextTheme.GRAY} 
            />
            <Text 
                size={TextSize.S} 
                weight={TextWeight.SEMIBOLD} 
                tagType={TagType.SPAN} 
                tagName={property} 
                theme={TextTheme.DARK_GRAY} 
            />
        </div>
    )
})
