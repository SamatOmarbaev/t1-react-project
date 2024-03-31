import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme } from '../../../atoms/Text/Text';
import { ProductCard } from '../../ProductCard/ProductCard';
import { IProductCard } from '../../../../helpers/types/types';

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
                tagType={TagType.P}
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
