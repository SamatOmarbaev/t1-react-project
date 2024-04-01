import { memo, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';
import { TabsList } from '../../molecules/TabsList/TabsList';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch';
import { useAppSelector } from '../../../helpers/hooks/useAppSelector';
import { useGetCategoriesQuery } from '../../../features/categories/api/categoriesApi';
import { setCategories, setSelectedCategory } from '../../../features/categories/categoriesSlice/categoriesSlice';

import styles from './FiltersGroup.module.css';

interface FiltersGroupProps {
    className?: string;
    resetInfinite: () => void;
}

export const FiltersGroup = memo((props: FiltersGroupProps) => {
    const {className, resetInfinite} = props;
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);
    const [tempSelectedCategory, setTempSelectedCategory] = useState<string | null>(null);
    const { data: categoriesData } = useGetCategoriesQuery('');

    const handleFilterByCategory = useCallback((category: string | null) => {
        setTempSelectedCategory(category);
    }, []);

    const applyFilter = useCallback(() => {
        if (tempSelectedCategory) {
            dispatch(setSelectedCategory(tempSelectedCategory));
            resetInfinite();
        }
    }, [dispatch, tempSelectedCategory, resetInfinite]);

    const resetFilter = useCallback(() => {
        dispatch(setSelectedCategory(''));
        setTempSelectedCategory(null);
    }, [dispatch]);

    useEffect(() => {
        if (categoriesData) {
            dispatch(setCategories(categoriesData));
        }
    }, [categoriesData, dispatch]);

    return (
        <div className={classNames(styles.FiltersGroup, {}, [className])}>
            <Text 
                tagType={TagType.h3}
                size={TextSize.L}
                tagName='Selection by parameters'
                theme={TextTheme.DARK_GRAY}
                weight={TextWeight.SEMIBOLD}
                className={styles.title}
            />
            <Text 
                tagType={TagType.h4}
                size={TextSize.S}
                tagName='Category'
                theme={TextTheme.DARK_GRAY}
                weight={TextWeight.SEMIBOLD}
                className={styles.titleTabs}
            />
            <TabsList 
                className={styles.tabs} 
                categories={categories} 
                activeCategory={tempSelectedCategory} 
                setActiveCategory={handleFilterByCategory}
            />
            <div className={styles.btns}>
                <Button
                    theme={ButtonTheme.DARK}
                    textColor={ButtonTextColor.WHITE}
                    className={styles.btn}
                    onClick={applyFilter}
                >
                    Apply
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.btn}
                    onClick={resetFilter}
                >
                    Reset
                </Button>
            </div>
        </div>
    )
})
