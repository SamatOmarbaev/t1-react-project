import classNames from 'classnames';

import { Text, TextSize, TextTheme } from '@/components/atoms/Text';
import { IProductCard } from '@/helpers/types';
import { ProductCard } from '../../ProductCard';

import styles from './CheckedProductList.module.css';

interface CheckedProductListProps {
    className?: string;
    products?: IProductCard[];
}

export const CheckedProductList = (props: CheckedProductListProps) => {
    const {className, products} = props;

    return (
        <div className={classNames(styles.CheckedProductList, {}, [className])}>
            <Text
                size={TextSize.L}
                theme={TextTheme.DARK_GRAY}
                tagName='What type of product are you considering?'
                className={styles.title}
            />
            <div className={styles.checkList}>
                <ul className={styles.CheckedListItems}>
                    {products?.map(product => (
                        <ProductCard height={290} key={product.id} width={280} product={product} className={styles.productCard} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
