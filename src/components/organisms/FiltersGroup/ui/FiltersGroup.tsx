import { memo, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '@/components/atoms/Text';
import { Button, ButtonTextColor, ButtonTheme } from '@/components/atoms/Button';
import { TabsList } from '@/components/molecules/TabsList';
import { useAppDispatch, useAppSelector } from '@/helpers/hooks';
import { setCategories, setSelectedCategory, useGetCategoriesQuery } from '@/features/categories';

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
    const { data: categoriesData, isLoading, error } = useGetCategoriesQuery('');

    const handleFilterByCategory = useCallback((category: string | null) => {
        setTempSelectedCategory(category);
    }, []);

    const applyFilter = () => {
        if (tempSelectedCategory) {
            dispatch(setSelectedCategory(tempSelectedCategory));
            resetInfinite();
        }
    }

    const resetFilter = () => {
        dispatch(setSelectedCategory(''));
        setTempSelectedCategory(null);
    };

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
                isLoading={isLoading}
                error={error}
            />
            <div className={styles.btns}>
                <Button
                    theme={ButtonTheme.DARK}
                    textColor={ButtonTextColor.WHITE}
                    className={styles.btn}
                    onClick={applyFilter}
                    aria-label='отправка запроса'
                >
                    Apply
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.btn}
                    onClick={resetFilter}
                    aria-label='сброс фильтров'
                >
                    Reset
                </Button>
            </div>
        </div>
    )
})
