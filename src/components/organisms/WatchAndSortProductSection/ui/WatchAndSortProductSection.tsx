import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme } from '@/components/atoms/Text';
import { Button, ButtonTextColor, ButtonTheme } from '@/components/atoms/Button';
import { IProductCard } from '@/helpers/types';
import { Container } from '@/components/atoms/Container';
import { useAppSelector } from '@/helpers/hooks';
import { FiltersGroup } from '../../FiltersGroup';
import { ProductsList } from '../../ProductsList';
import { useGetProductsByCategoryQuery } from '@/features/categories';

import styles from './WatchAndSortProductSection.module.css';

interface WatchAndSortProductSectionProps {
    className?: string;
}

export const WatchAndSortProductSection = (props: WatchAndSortProductSectionProps) => {
    const {className} = props;
    const selectedCategory = useAppSelector((state) => state.categories.selectedCategory);
    const [data, setData] = useState<IProductCard[]>([]);
    const [skip, setSkip] = useState<number>(0)
    const { data: productsData, isLoading, error } = useGetProductsByCategoryQuery({
        category: selectedCategory,
        skip
    });
        
    useEffect(() => {
        setData([]);
    }, [selectedCategory]);

    useEffect(() => {
        if(productsData && productsData.products) {
            setData(prev => [...prev, ...productsData.products])
        }
    }, [productsData]);

    const resetInfinite = useCallback(() => {
        setSkip(0);
        setData([]);
    }, [])
    
    const total = productsData?.total || 0;
    const hasMoreProducts = data.length < total;

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
                            productsData={data}
                            error={error}
                            isLoading={isLoading}
                            className={styles.products}
                        />
                        {hasMoreProducts && <Button
                            theme={ButtonTheme.RED}
                            textColor={ButtonTextColor.WHITE}
                            className={styles.btn}
                            onClick={() => setSkip(skip + 9)}
                            aria-label='показать еще'
                        >
                            Show more
                        </Button>}
                    </div>
                </div>
            </Container>
        </section>
    )
}
