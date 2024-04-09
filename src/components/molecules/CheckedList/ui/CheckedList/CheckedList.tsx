import { Dispatch, SetStateAction, memo, useCallback, useEffect } from 'react';
import classNames from 'classnames';

import { CheckedItem } from '../CheckedItem/CheckedItem';
import { TagType, Text, TextSize, TextTheme } from '../../../../atoms/Text/Text';
import { useAppDispatch } from '../../../../../helpers/hooks/useAppDispatch';
import { useAppSelector } from '../../../../../helpers/hooks/useAppSelector';
import { useGetCategoriesQuery } from '../../../../../features/categories/api/categoriesApi';
import { setCategories } from '../../../../../features/categories/categoriesSlice/categoriesSlice';

import styles from './CheckedList.module.css';

interface CheckedListProps {
    className?: string;
    tempSelectedCategory: string[]
    setTempSelectedCategory: Dispatch<SetStateAction<string[]>>;
}

export const CheckedList = memo((props: CheckedListProps) => {
    const {className, tempSelectedCategory, setTempSelectedCategory} = props;
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);
    const { data: categoriesData } = useGetCategoriesQuery('');

    useEffect(() => {
        if (categoriesData) {
            dispatch(setCategories(categoriesData));
        }
    }, [categoriesData, dispatch]);

    const handleCheckboxChange = useCallback((categoryName: string) => {
        if (tempSelectedCategory.includes(categoryName)) {
            setTempSelectedCategory(tempSelectedCategory.filter(name => name !== categoryName));
        } else {
            setTempSelectedCategory([...tempSelectedCategory, categoryName]);
        }
    }, [tempSelectedCategory, setTempSelectedCategory]);

    return (
        <div className={classNames('', [className])}>
            <Text 
                tagType={TagType.h2}
                size={TextSize.Xl}
                tagName='We will select the perfect product for you'
                theme={TextTheme.DARK_GRAY}
                className={styles.title}
            />
            <Text 
                tagType={TagType.P}
                size={TextSize.S}
                theme={TextTheme.GRAY}
                tagName='Answer three questions and we will send you a catalog with the most suitable products for you.'
                className={styles.subTitle}
            />
            <div className={styles.checkList}>
                <Text 
                    tagType={TagType.P}
                    size={TextSize.L}
                    theme={TextTheme.DARK_GRAY}
                    tagName='What type of product are you considering?'
                    className={styles.question}
                />
                <ul className={styles.CheckedListItems}>
                    {categories.map((category, index) => (
                        <CheckedItem 
                            category={category}
                            key={index} 
                            onChange={() => handleCheckboxChange(category)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
})
