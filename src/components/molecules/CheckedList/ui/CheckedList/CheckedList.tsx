import classNames from 'classnames';
import styles from './CheckedList.module.css';
import { Category } from '../../types';
import { CheckedItem } from '../CheckedItem/CheckedItem';
import { useCallback, useState } from 'react';

interface CheckedListProps {
    className?: string;
    categories: Category[];
}

export const CheckedList = (props: CheckedListProps) => {
    const {className, categories} = props;
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const handleCheckboxChange = useCallback((categoryId: number) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    }, [selectedCategories]);

    return (
        <div className={classNames(styles.CheckedList, {}, [className])}>
            {categories.map(category => (
                <CheckedItem 
                    category={category}
                    key={category.id} 
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCheckboxChange(category.id)}
                />
            ))}
        </div>
    )
}
