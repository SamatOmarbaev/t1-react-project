import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';

import { CheckedItem } from '../CheckedItem/CheckedItem';

import styles from './CheckedList.module.css';

interface CheckedListProps {
    className?: string;
    categories: string[];
}

export const CheckedList = memo((props: CheckedListProps) => {
    const {className, categories} = props;
    const [tempSelectedCategory, setTempSelectedCategory] = useState<Array<string>>([]);

    const handleCheckboxChange = useCallback((categoryName: string) => {
        if (tempSelectedCategory.includes(categoryName)) {
            setTempSelectedCategory(tempSelectedCategory.filter(name => name !== categoryName));
        } else {
            setTempSelectedCategory([...tempSelectedCategory, categoryName]);
        }
    }, [tempSelectedCategory]);

    return (
        <div className={classNames(styles.CheckedList, {}, [className])}>
            {categories.map((category, index) => (
                <CheckedItem 
                    category={category}
                    key={index} 
                    // checked={categories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                />
            ))}
        </div>
    )
})
