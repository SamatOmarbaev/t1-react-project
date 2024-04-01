import { useState } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { Container } from '../../atoms/Container/Container';
import { SearchTheProducts } from '../../molecules/SearchTheProducts/SearchTheProducts';
import { ProductsList } from '../ProductsList/ProductsList';
import { useGetProductsQuery } from '../../../features/products/api/productsApi';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch';
import { useAppSelector } from '../../../helpers/hooks/useAppSelector';
import { setSearchQuery } from '../../../features/products/productsSlice/productsSlice';
import { useDebounce } from '../../../helpers/hooks/useDebounce';

import styles from './ProductAllInfo.module.css';

interface ProductAllInfoProps {
    className?: string;
}

export const ProductAllInfo = (props: ProductAllInfoProps) => {
    const {className} = props;
    const [loadedProductsCount, setLoadedProductsCount] = useState(9);
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(state => state.products.searchQuery);
    const searchQueryDebounced = useDebounce(searchQuery, 300);
    const {data: productsData, error, isLoading} = useGetProductsQuery({
        limit: loadedProductsCount,
        search: searchQueryDebounced
    })
    const total = productsData?.total || 0;
    const hasMoreProducts = productsData && productsData?.products.length < total;

    const handleShowMore = () => {
        if (productsData) {
            setLoadedProductsCount(prevCount => prevCount + 9);
        }
    }

    const handleSearch = (searchValue: string) => {
        dispatch(setSearchQuery(searchValue));
        setLoadedProductsCount(0);
    }

    return (
        <section className={classNames(styles.ProductAllInfo, {}, [className])}>
            <Container>
                <Text
                    tagType={TagType.h2}
                    size={TextSize.Xl}
                    theme={TextTheme.DARK_GRAY}
                    tagName='All products'
                    className={styles.title}
                />
                <SearchTheProducts 
                    className={styles.formSearch}
                    value={searchQuery}
                    onSearch={handleSearch}
                />
                <div className={styles.listLoad}>
                    <ProductsList 
                        productsData={productsData?.products}
                        error={error}
                        isLoading={isLoading}
                    />
                    {hasMoreProducts && <Button
                        theme={ButtonTheme.RED}
                        textColor={ButtonTextColor.WHITE}
                        className={styles.btn}
                        onClick={handleShowMore}
                    >
                        Show more
                    </Button>}
                </div>
            </Container>
        </section>
    )
}
