import { memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme } from '../../../../atoms/Text/Text';

import styles from './CheckedItem.module.css';

interface CheckedItemProps {
    className?: string;
    category: string;
    onChange: (value: string) => void;
}

export const CheckedItem = memo((props: CheckedItemProps) => {
    const {className, category, onChange} = props;

    const handleChange = () => {
        if (onChange) {
            onChange(category)
        }
    }

    return (
        <label className={classNames(styles.CheckedItem, {}, [className])}>
            <input type="checkbox" onChange={handleChange} aria-label='выбрать категорию' />
            <Text 
                size={TextSize.S}
                tagType={TagType.SPAN}
                theme={TextTheme.DARK_GRAY}
                tagName={category}
            />
        </label>
    )
})
