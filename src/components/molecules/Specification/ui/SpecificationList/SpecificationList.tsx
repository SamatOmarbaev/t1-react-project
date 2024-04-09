import { memo, useCallback, useState } from 'react';
import classNames from 'classnames';

import { IProductCard } from '@/helpers/types';
import { TagType, Text, TextTheme } from '@/components/atoms/Text';
import { SpecificationItem } from '@/components/atoms/SpecificationItem';
import { StarRating } from '@/components/atoms/StarRating';

import styles from './SpecificationList.module.css';

interface SpecificationListProps {
    className?: string;
    productSpecification: IProductCard;
    isEdit?: boolean;
}

export const SpecificationList = memo((props: SpecificationListProps) => {
    const {className, productSpecification, isEdit} = props;
    const [starsCount, setStarsCount] = useState<number>(productSpecification.rating);
    const [basePrice, setBasePrice] = useState<string | number>(String(productSpecification.price));
    const [discountPercentage, setDiscountPercentage] = useState<number | string>(productSpecification.discountPercentage);
    const [stock, setStock] = useState<string>(String(productSpecification.stock));
    const [brand, setBrand] = useState<string>(productSpecification.brand);
    const [category, setCategory] = useState<string>(productSpecification.category);
    const [description, setDescription] = useState<string>(productSpecification.description);

    const onSelectedStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
    }, []);
    
    const handleBasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBasePrice(e.target.value)
    };

    const handleDiscountPercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountPercentage(e.target.value)
    };

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStock(e.target.value)
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrand(e.target.value)
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value)
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    };

    const basePriceNumber = typeof basePrice === 'string' ? parseFloat(basePrice) : basePrice;
    const discountPercentageNumber = typeof discountPercentage === 'string' ? parseFloat(discountPercentage) : discountPercentage;
    const discountPrice = Math.round(basePriceNumber - (basePriceNumber * (discountPercentageNumber / 100))) 

    const ratingIcons = (
        <div className={styles.rating}>
            <Text theme={TextTheme.GRAY} tagName={"Rating"} tagType={TagType.SPAN} />
            <StarRating selectedStars={starsCount} size={20} onSelect={onSelectedStars} />
        </div>
    )
    
    if (isEdit) {
        return (
            <ul className={classNames(styles.SpecificationList, {}, [className])}>
                {ratingIcons}
                <SpecificationItem
                    name={'Base price'} 
                    property={<input type="text" value={basePrice} onChange={handleBasePriceChange} className={styles.input} />} 
                    max
                />
                <SpecificationItem 
                    name={'Discount percentage'} 
                    property={<input type='text' value={discountPercentage} onChange={handleDiscountPercentageChange} className={styles.input} />} 
                    max
                />
                <SpecificationItem name={'Discount price'} property={String(discountPrice + '$')} max />
                <SpecificationItem 
                    name={'Stock'} 
                    property={<input type="text" value={stock} onChange={handleStockChange} className={styles.input} />} 
                    max
                />
                <SpecificationItem 
                    name={'Brand'} 
                    property={<input type="text" value={brand} onChange={handleBrandChange} className={styles.input} />} 
                    max
                />
                <SpecificationItem 
                    name={'Category'} 
                    property={<input type="text" value={category} onChange={handleCategoryChange} className={styles.input} />} 
                    max
                />
                <SpecificationItem 
                    name={'Description'} 
                    property={<input type="text" value={description} onChange={handleDescriptionChange} className={styles.input} />} 
                    max
                />
            </ul>
        )
    }

    return (
        <ul className={classNames(styles.SpecificationList, {}, [className])}>
            {ratingIcons}
            <SpecificationItem name={'Base price'} property={String(basePrice + '$')} />
            <SpecificationItem name={'Discount percentage'} property={String(discountPercentage + '%')} />
            <SpecificationItem name={'Discount price'} property={String(discountPrice + '$')} />
            <SpecificationItem name={'Stock'} property={String(stock)} />
            <SpecificationItem name={'Brand'} property={brand} />
            <SpecificationItem name={'Category'} property={category} />
            <SpecificationItem name={'Description'} property={description} />
        </ul>
    )
})
