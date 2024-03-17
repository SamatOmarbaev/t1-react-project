import classNames from 'classnames';
import styles from './FiltersGroup.module.css';
import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';
import { TabsList } from '../../molecules/TabsList/TabsList';
import { useMemo } from 'react';

interface FiltersGroupProps {
    className?: string;
}

export const FiltersGroup = (props: FiltersGroupProps) => {
    const {className} = props;

    const categories = useMemo(() => {
        return [
            'smartphones', 'laptops', 'sneakers', 'mars', 
            'bounty', 'coca cola', 'pepsi', 'snakes'
        ]
    }, []);

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
            <TabsList className={styles.tabs} categories={categories} />
            <div className={styles.btns}>
                <Button
                    theme={ButtonTheme.DARK}
                    textColor={ButtonTextColor.WHITE}
                    className={styles.btn}
                >
                    Apply
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={styles.btn}
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}
