import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Container } from '../../atoms/Container/Container';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { ProductsList } from '../ProductsList/ProductsList';
import { FiltersGroup } from '../FiltersGroup/FiltersGroup';
import { useGetProductsByCategoryQuery } from '../../../features/categories/api/categoriesApi';
import { useAppSelector } from '../../../helpers/hooks/useAppSelector';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';
import { IProductCard } from '../../../helpers/types/types';

import styles from './WatchAndSortProductSection.module.css';

interface WatchAndSortProductSectionProps {
    className?: string;
}

const useGetProductsByCategoryQueryInfinite = () => {
    const selectedCategory = useAppSelector((state) => state.categories.selectedCategory);
    const [data, setData] = useState<IProductCard[]>([]);
    const [skip, setSkip] = useState(0)
    const { data: productsData, isLoading, error } = useGetProductsByCategoryQuery({
        category: selectedCategory,
        skip
    });

    useEffect(() => {
        if(productsData && productsData.products) {
            setData(prev => [...prev, ...productsData.products])
        }
    }, [productsData]);
    
    useEffect(() => {
        setData([]);
    }, [selectedCategory]);

    const resetInfinite = () => {
        setSkip(0);
        setData([]);
    }

    return { data, isLoading, error, skip, setSkip,resetInfinite, total: productsData?.total || 0 }
}

export const WatchAndSortProductSection = (props: WatchAndSortProductSectionProps) => {
    const {className} = props;
    const {data: productsData, isLoading, error, skip, setSkip, resetInfinite, total} = useGetProductsByCategoryQueryInfinite()

    const hasMoreProducts = productsData.length < total;

    return (
        <section 
            className={classNames(styles.WatchAndSortProductSection, {}, [className])}
            id="catalog"
        >
            <Container>
                <Text 
                    tagType={TagType.h2}
                    size={TextSize.Xl}
                    theme={TextTheme.DARK_GRAY}
                    tagName='Catalog'
                    className={styles.title}
                />
                <div className={styles.filtersAndProducts}>
                    <FiltersGroup resetInfinite={resetInfinite} />
                    <div className={styles.listLoad}>
                        <ProductsList 
                            productsData={productsData}
                            error={error}
                            isLoading={isLoading}
                            className={styles.products}
                        />
                        {hasMoreProducts && <Button
                            theme={ButtonTheme.RED}
                            textColor={ButtonTextColor.WHITE}
                            className={styles.btn}
                            onClick={() => setSkip(skip + 9)}
                        >
                            Show more
                        </Button>}
                    </div>
                </div>
            </Container>
        </section>
    )
}
