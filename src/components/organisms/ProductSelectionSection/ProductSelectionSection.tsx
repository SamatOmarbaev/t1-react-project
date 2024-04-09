import { useState } from 'react';
import classNames from 'classnames';

import { Container } from '../../atoms/Container/Container';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { Button, ButtonTheme } from '../../atoms/Button/Button';
import { CheckedList } from '../../molecules/CheckedList';
import { CheckedProductList } from '../../molecules/CheckedProductList';
import { useGetProductsByCategoriesQuery } from '../../../features/categories/api/categoriesApi';

import styles from './ProductSelectionSection.module.css';

interface ProductSelectionSectionProps {
    className?: string;
}

export const ProductSelectionSection = (props: ProductSelectionSectionProps) => {
    const {className} = props;
    const [tempSelectedCategory, setTempSelectedCategory] = useState<string[]>([]);
    const [applySelectedCategory, setApplySelectedCategory] = useState<string[]>([]);
    const {data: sortedProducts} = useGetProductsByCategoriesQuery(applySelectedCategory)
    
    const handleNextStep = () => {
        setApplySelectedCategory(tempSelectedCategory)
    };

    const changeSelection = () => {
        setTempSelectedCategory([])
        setApplySelectedCategory([])
    }

    return (
       <section id="product" className={classNames(styles.ProductSelection, {}, [className])}>
            <Container>
                {sortedProducts && !(sortedProducts?.length > 0) && <CheckedList tempSelectedCategory={tempSelectedCategory} setTempSelectedCategory={setTempSelectedCategory} />}
                {sortedProducts && sortedProducts?.length > 0 && <CheckedProductList products={sortedProducts} />}
                <div className={styles.paginationBottom}>
                    <Text
                        tagType={TagType.SPAN}
                        size={TextSize.S}
                        theme={TextTheme.GRAY}
                        tagName={`${sortedProducts && sortedProducts?.length > 0 ? '2' : '1'} of 2`}
                    />
                    {sortedProducts?.length 
                        ?   <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={changeSelection}
                                aria-label='к выбору категорий'
                            >
                                Change selection
                                
                            </Button>
                        :   <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={handleNextStep}
                                aria-label='к переходу товары по выбранным категориям'
                            >
                                Next step
                            </Button>
                    }
                </div>
            </Container>
       </section>
    )
}