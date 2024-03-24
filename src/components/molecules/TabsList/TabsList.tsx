import { memo, useCallback } from 'react';
import classNames from 'classnames';

import { Button, ButtonTheme } from '../../atoms/Button/Button';
import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';

import styles from './TabsList.module.css';

interface TabsListProps {
    className?: string;
    categories: string[];
    activeCategory: string | null;
    setActiveCategory: (value: string | null) => void;
}

export const TabsList = memo((props: TabsListProps) => {
    const {className, categories, activeCategory, setActiveCategory} = props;

    const handleTabChange = useCallback((category: string | null) => {
      setActiveCategory(category);
    }, [setActiveCategory]);

    return (
        <ul className={classNames(styles.TabsList, {}, [className])}>
            {categories.map(category => (
                <li key={category}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        key={category}
                        onClick={() => handleTabChange(category)}
                        className={classNames(styles.btn, [category === activeCategory ? styles.active : styles.btn])}
                    >
                        <Text 
                            tagType={TagType.SPAN}
                            size={TextSize.S}
                            weight={TextWeight.SEMIBOLD}
                            theme={TextTheme.DARK_GRAY}
                            tagName={category}
                            className={classNames('', [category === activeCategory ? styles.activeColor : null])}
                        />
                    </Button>
                </li>
            ))}
        </ul>
    )
})
