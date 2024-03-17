import classNames from 'classnames';
import styles from './ProductCard.module.css';
import { TagType, Text, TextSize, TextTheme, TextWeight } from '../../atoms/Text/Text';

export interface IProductCard {
    id: number;
    src: string;
    title: string;
    price: string;
}

interface ProductCardProps {
    className?: string;
    product: IProductCard;
}

export const ProductCard = (props: ProductCardProps) => {
    const {className, product} = props;

    return (
        <article className={classNames(styles.ProductCard, {}, [className])}>
            <img src={product.src} alt={'product photo'} className={styles.image} />
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
                tagName={product.price}
                theme={TextTheme.DARK_GRAY}
                weight={TextWeight.REGULAR}
            />
        </article>
    )
}
