import { memo } from 'react';
import classNames from 'classnames';

import { SpecificationItem } from '../../../../atoms/SpecificationItem/SpecificationItem';
import { IProductCard } from '../../../../../helpers/types/types';

import styles from './SpecificationList.module.css';

interface SpecificationListProps {
    className?: string;
    productSpecification?: IProductCard;
}

export const SpecificationList = memo((props: SpecificationListProps) => {
    const {className, productSpecification} = props;

    const discountPrice = productSpecification
        ?   Math.round(productSpecification.price - (productSpecification.price / productSpecification.discountPercentage))
        :   undefined

    return (
        <ul className={classNames(styles.SpecificationList, {}, [className])}>
            <SpecificationItem name={'Rating'} property={String(productSpecification?.rating)} />
            <SpecificationItem name={'Base price'} property={String(productSpecification?.price + '$')} />
            <SpecificationItem name={'Discount percentage'} property={String(productSpecification?.discountPercentage + '%')} />
            <SpecificationItem name={'Discount price'} property={String(discountPrice + '$')} />
            <SpecificationItem name={'Stock'} property={String(productSpecification?.stock)} />
            <SpecificationItem name={'Brand'} property={productSpecification?.brand} />
            <SpecificationItem name={'Category'} property={productSpecification?.category} />
            <SpecificationItem name={'Description'} property={productSpecification?.description} />
        </ul>
    )
})
