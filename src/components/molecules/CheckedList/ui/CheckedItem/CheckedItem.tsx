import { memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextTheme } from '@/components/atoms/Text';

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
            <input className={styles.inputChange} type="checkbox" onChange={handleChange} aria-label='выбрать категорию' />
            <Text
                tagType={TagType.SPAN}
                theme={TextTheme.DARK_GRAY}
                tagName={category}
            />
        </label>
    )
})
