import { memo } from 'react';
import classNames from 'classnames';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';
import { IProductCard } from '../../../helpers/types/types';

import styles from './ProductsList.module.css';

interface ProductsListProps {
    className?: string;
    productsData?: IProductCard[];
    error?: FetchBaseQueryError | SerializedError;
    isLoading?: boolean;
}

export const ProductsList = memo((props: ProductsListProps) => {
    const {className, error, isLoading, productsData} = props;

    if (error) {
        return (
            <div className={classNames(styles.productsError, {}, [className])}>
            <Text tagType={TagType.h1} size={TextSize.XXL} tagName={'The products was not found'} theme={TextTheme.DARK_GRAY} />
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={styles.skeletonList}>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
                <article className={classNames(styles.skeletonCard, {}, [className])}>
                    <Skeleton height={250} width={300} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                    <Skeleton height={25} width={'100%'} border='.25rem' />
                </article>
            </div>
        )
    }

    if (productsData?.length === 0) {
        return (
            <div className={classNames(styles.productsError, className)}>
                <Text tagType={TagType.h1} size={TextSize.XXL} tagName={'The products was not found'} theme={TextTheme.DARK_GRAY} />
            </div>
        );
    }

    return (
        <ul className={classNames(styles.ProductsList, {}, [className])}>
            {productsData?.map(product => (
                <li key={product.id}>
                    <ProductCard height={290} width={280} product={product} />
                </li>
            ))}
        </ul>
    )
})
