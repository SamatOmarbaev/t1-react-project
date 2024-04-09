import { memo, useState } from 'react';
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
    const [searched, setSearched] = useState<boolean>(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(value);
        setSearched(true)
    };

    return (
        <form 
            aria-label='форма отправки данных' 
            onSubmit={handleSearch}
            className={classNames(styles.SearchTheProducts, {}, [className])}
        >
            <Input 
                value={value} 
                onChange={onSearch}
                placeholder='Search by title' 
                type="search"
                borderRadius
                className={styles.input}
                aria-label='ввод данных'
            />
            <Button 
                theme={ButtonTheme.RED}
                textColor={ButtonTextColor.WHITE}
                className={styles.btn}
                onClick={searched ? undefined : handleSearch}
                aria-label='кнопка для отправки данных'
            >
                Search
            </Button>
        </form>
    )
})
