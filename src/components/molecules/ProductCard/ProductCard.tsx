import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';
import { IProductCard } from '../../../helpers/types/types';
import { MyImage } from '../../atoms/MyImage/MyImage';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    className?: string;
    product: IProductCard;
}

export const ProductCard = memo((props: ProductCardProps) => {
    const {className, product} = props;

    return (
        <Link to={`/products/${product.id}`} className={classNames(styles.ProductCard, {}, [className])}>
            <MyImage src={product.thumbnail} alt='product photo' border='0.25rem' height={300} width={300} className={styles.imageCont} />
            <Text
                tagType={TagType.h4}
                size={TextSize.S}
                tagName={product.title}
                theme={TextTheme.DARK_GRAY}
                className={styles.title}
                weight={TextWeight.SEMIBOLD}
            />
            <Text 
                tagType={TagType.SPAN}
                size={TextSize.M}
                tagName={product.price + ' $'}
                theme={TextTheme.DARK_GRAY}
                weight={TextWeight.REGULAR}
            />
        </Link>
    )
})
