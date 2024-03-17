import classNames from 'classnames';
import styles from './CheckedItem.module.css';
import { Category } from '../../types';
import { TagType, Text, TextSize, TextTheme } from '../../../../atoms/Text/Text';
import { memo } from 'react';

interface CheckedItemProps {
    className?: string;
    category: Category;
    checked?: boolean;
    onChange: () => void;
}

export const CheckedItem = memo((props: CheckedItemProps) => {
    const {className, category, checked, onChange} = props;

    return (
        <label className={classNames(styles.CheckedItem, {}, [className])}>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <Text 
                size={TextSize.S}
                tagType={TagType.SPAN}
                theme={TextTheme.DARK_GRAY}
                tagName={category.name}
                className={styles.labelName}
            />
        </label>
    )
})
