import { memo } from 'react';
import classNames from 'classnames';

import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

import styles from './SearchTheProducts.module.css';

interface SearchTheProductsProps {
    className?: string;
    value: string;
    onSearch: (e: string) => void;
}

export const SearchTheProducts = memo((props: SearchTheProductsProps) => {
    const {className, value, onSearch} = props;

    return (
        <form onClick={(e) => e.preventDefault()} className={classNames(styles.SearchTheProducts, {}, [className])}>
            <Input 
                value={value} 
                onChange={onSearch}
                placeholder='Search by title' 
                type="search"
                borderRadius
                className={styles.input}
            />
            <Button 
                theme={ButtonTheme.RED}
                textColor={ButtonTextColor.WHITE}
                className={styles.btn}
                onClick={() => onSearch(value)}
            >
                Search
            </Button>
        </form>
    )
})
