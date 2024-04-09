import { memo } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Container } from '../../atoms/Container/Container';
import { TagType, Text, TextAlign, TextSize, TextTheme } from '../../atoms/Text/Text';
import { ImagesGallery } from '../../molecules/ImagesGallery';
import { Specification } from '../../molecules/Specification';
import { useGetProductByIdQuery } from '../../../features/products/api/productsApi';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';

import styles from './ProductInfo.module.css';

interface ProductInfoProps {
    className?: string;
}

export const ProductInfo = memo((props: ProductInfoProps) => {
    const {className} = props;
    const {id} = useParams<{id: string}>()
    const {data: productData, error, isLoading = true} = useGetProductByIdQuery({id});

    if (error) {
        return (
            <div className={classNames(styles.ProductInfo, {}, [className])}>
                <Text 
                    tagType={TagType.h1} 
                    size={TextSize.XXL} 
                    tagName={'The product was not found'} 
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={styles.ProductInfo}>
                <Container>
                    <Skeleton height={43} width={250} border='.25rem' className={styles.title} />
                    <div className={styles.infoContentProduct}>
                        <div className={classNames(styles.skeletonGallery, {}, [className])}>
                            <Skeleton height={460} width={520} border='.25rem' />
                            <ul className={styles.skeletonImagesList}>
                                <Skeleton height={75} width={70} border='.25rem' />
                                <Skeleton height={75} width={70} border='.25rem' />
                                <Skeleton height={75} width={70} border='.25rem' />
                                <Skeleton height={75} width={70} border='.25rem' />
                                <Skeleton height={75} width={70} border='.25rem' />
                                <Skeleton height={75} width={70} border='.25rem' />
                            </ul>
                        </div>
                        <div className={classNames(styles.SpecificationSkeleton, {}, [className])}>
                            <div className={styles.specificTitleSkeleton}>
                                <Skeleton height={34} width={250} border='.25rem' />
                                <Skeleton height={23} width={150} border='.25rem' />
                            </div>
                            <ul className={classNames(styles.SpecificationSkeletonList, {}, [className])}>
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                                <Skeleton height={22} width={350} border='.25rem' />
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <section className={classNames(styles.ProductInfo, {}, [className])}>
            <Container>
                <Text 
                    size={TextSize.Xl}
                    tagType={TagType.h2}
                    tagName={productData?.title}
                    className={styles.title}
                    theme={TextTheme.DARK_GRAY}
                />
                <div className={styles.infoContentProduct}>
                    <ImagesGallery images={productData?.images} />
                    {productData && <Specification productSpecification={productData} />}
                </div>
            </Container>
        </section>
    )
})
