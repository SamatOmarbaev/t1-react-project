import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { Container } from '../../atoms/Container/Container';
import { SearchTheProducts } from '../../molecules/SearchTheProducts/SearchTheProducts';
import { ProductsList } from '../ProductsList/ProductsList';
import { useGetProductsQuery } from '../../../features/products/api/productsApi';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch';
import { useAppSelector } from '../../../helpers/hooks/useAppSelector';
import { setSearchQuery } from '../../../features/products/slices/productsSlice';
import { useDebounce } from '../../../helpers/hooks/useDebounce';
import { IProductCard } from '../../../helpers/types/types';

import styles from './ProductAllInfo.module.css';

interface ProductAllInfoProps {
    className?: string;
}

export const ProductAllInfo = (props: ProductAllInfoProps) => {
    const {className} = props;
    const [data, setData] = useState<IProductCard[]>([]);
    const [skip, setSkip] = useState<number>(0)
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(state => state.products.searchQuery);
    const searchQueryDebounced = useDebounce(searchQuery, 500);
    const {data: productsData, error, isLoading} = useGetProductsQuery({
        search: searchQueryDebounced,
        skip
    })
    const total = productsData?.total || 0;
    const hasMoreProducts = data.length < total;
    
    useEffect(() => {
        setData([])
        setSkip(0)
    }, [searchQueryDebounced]);

    useEffect(() => {
        if(productsData && productsData.products) {
            setData(prev => [...prev, ...productsData.products])
        }
    }, [productsData]);

    useEffect(() => {
        setSkip(0)
    }, []);

    const handleShowMore = () => {
        if (productsData) {
            setSkip(prev => prev + 9)
        }
    }

    const handleSearch = (searchValue: string) => {
        dispatch(setSearchQuery(searchValue));
        if (searchValue === '') {
            return
        }
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
                {productsData && <div className={styles.listLoad}>
                    <ProductsList 
                        productsData={data}
                        error={error}
                        isLoading={isLoading}
                    />
                    {hasMoreProducts && <Button
                        theme={ButtonTheme.RED}
                        textColor={ButtonTextColor.WHITE}
                        className={styles.btn}
                        onClick={handleShowMore}
                        aria-label='показать еще'
                    >
                        Show more
                    </Button>}
                </div>}
            </Container>
        </section>
    )
}
