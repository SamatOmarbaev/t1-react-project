import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { TagType, Text, TextSize, TextTheme, TextWeight } from '@/components/atoms/Text';
import { IProductCard } from '@/helpers/types';
import { MyImage } from '@/components/atoms/MyImage';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    className?: string;
    product?: IProductCard;
    width: string | number;
    height: string | number;
}

export const ProductCard = memo((props: ProductCardProps) => {
    const {className, product, width, height} = props;

    return (
        <Link to={`/products/${product?.id}`} className={classNames(styles.ProductCard, {}, [className])}>
            <MyImage src={product?.thumbnail} alt='product photo' border='0.25rem' height={height} width={width} className={styles.imageCont} />
            <Text
                tagType={TagType.h4}
                tagName={product?.title}
                theme={TextTheme.DARK_GRAY}
                className={styles.title}
                weight={TextWeight.SEMIBOLD}
            />
            <Text 
                tagType={TagType.SPAN}
                size={TextSize.M}
                tagName={product?.price + ' $'}
                theme={TextTheme.DARK_GRAY}
                weight={TextWeight.REGULAR}
            />
        </Link>
    )
})
