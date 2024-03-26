import classNames from 'classnames';
import styles from './TabsList.module.css';
import { useState } from 'react';
import { Button, ButtonTheme } from '../../atoms/Button/Button';
import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';

interface TabsListProps {
    className?: string;
    categories: string[];
}

export const TabsList = (props: TabsListProps) => {
    const {className, categories} = props;
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleTabChange = (category: string) => {
      setActiveCategory(category);
    };

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
                            className={classNames('', [category === activeCategory ? styles.active : null])}
                        />
                    </Button>
                </li>
            ))}
        </ul>
    )
}
