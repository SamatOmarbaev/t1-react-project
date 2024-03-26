import classNames from 'classnames';
import styles from './WatchAndSortProductSection.module.css';
import { Container } from '../../atoms/Container/Container';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { ProductsList } from '../ProductsList/ProductsList';
import { useMemo } from 'react';
import { IProductCard } from '../../molecules/ProductCard/ProductCard';
import imageProduct from '../../../assets/image-product.png'
import { FiltersGroup } from '../FiltersGroup/FiltersGroup';

interface WatchAndSortProductSectionProps {
    className?: string;
}

export const WatchAndSortProductSection = (props: WatchAndSortProductSectionProps) => {
    const {className} = props;

    const products: IProductCard[] = useMemo(() => {
        return [
            {
                id: 1,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 2,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 3,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 4,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 5,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 6,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 7,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 8,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
            {
                id: 9,
                src: imageProduct,
                title: "Nike Air Force 1 '07 QS",
                price: '110 $ '
            },
        ]
    }, [])

    return (
       <section className={classNames(styles.WatchAndSortProductSection, {}, [className])}>
            <Container>
                <Text 
                    tagType={TagType.h2}
                    size={TextSize.Xl}
                    theme={TextTheme.DARK_GRAY}
                    tagName='Catalog'
                    className={styles.title}
                />
                <div className={styles.filtersAndProducts}>
                    <FiltersGroup />
                    <ProductsList products={products} />
                </div>
            </Container>
       </section>
    )
}
