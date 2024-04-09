import { memo, useCallback } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';

import styles from './TabsList.module.css';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface TabsListProps {
    className?: string;
    categories: string[];
    activeCategory: string | null;
    setActiveCategory: (value: string | null) => void;
    isLoading?: boolean;
    error?: FetchBaseQueryError | SerializedError;
}

export const TabsList = memo((props: TabsListProps) => {
    const {className, categories, activeCategory, setActiveCategory, isLoading, error} = props;

    const handleTabChange = useCallback((category: string | null) => {
      setActiveCategory(category);
    }, [setActiveCategory]);

    if (error) {
        return (
            <div className={classNames(styles.productsError, {}, [className])}>
                <Text tagType={TagType.h1} size={TextSize.XXL} tagName={'The categories was not found'} theme={TextTheme.DARK_GRAY} />
            </div>
        )
    }

    if (isLoading) {
        return (
            <ul className={classNames(styles.TabsList, {}, [className])}>
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
                <Skeleton height={55} width={120} border='.25rem' />
            </ul>
        )
    }

    return (
        <ul className={classNames(styles.TabsList, {}, [className])}>
            {categories.map(category => (
                <li 
                    key={category} 
                    className={classNames(styles.btn, {[styles.active]: category === activeCategory})}
                    role="tab"
                    aria-selected={category === activeCategory ? 'true' : 'false'}
                    aria-controls={`tabpanel-${category}`}
                >
                    <input 
                        type="radio"
                        id={category}
                        name="category"
                        value={category}
                        checked={category === activeCategory}
                        onChange={() => handleTabChange(category)}
                        className={styles.input}
                    />
                    <label 
                        htmlFor={category} 
                        className={classNames(styles.label, {[styles.active]: category === activeCategory})}
                    >
                        <Text 
                            tagType={TagType.SPAN}
                            size={TextSize.S}
                            weight={TextWeight.SEMIBOLD}
                            theme={TextTheme.DARK_GRAY}
                            tagName={category}
                            className={classNames(styles.text, {[styles.activeColor]: category === activeCategory})}
                        />
                    </label>
                </li>          
            ))}
        </ul>
    )
})
