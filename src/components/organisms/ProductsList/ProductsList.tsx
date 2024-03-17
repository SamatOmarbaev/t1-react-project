import classNames from 'classnames';
import styles from './ProductsList.module.css';
import { IProductCard, ProductCard } from '../../molecules/ProductCard/ProductCard';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button';

interface ProductsListProps {
    className?: string;
    products: IProductCard[];
}

export const ProductsList = (props: ProductsListProps) => {
    const {products, className} = props;

    return (
        <div className={styles.products}>
            <ul className={classNames(styles.ProductsList, {}, [className])}>
                {products.map(product => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
            <Button
                theme={ButtonTheme.RED}
                textColor={ButtonTextColor.WHITE}
                className={styles.btn}
            >
                Show more
            </Button>
        </div>
    )
}
