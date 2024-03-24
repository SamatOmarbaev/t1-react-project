import { useEffect } from 'react';
import classNames from 'classnames';

import { Container } from '../../atoms/Container/Container';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { Button, ButtonTheme } from '../../atoms/Button/Button';
import { CheckedList } from '../../molecules/CheckedList';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch';
import { useAppSelector } from '../../../helpers/hooks/useAppSelector';
import { useGetCategoriesQuery } from '../../../features/categories/api/categoriesApi';
import { setCategories } from '../../../features/categories/categoriesSlice/categoriesSlice';

import styles from './ProductSelectionSection.module.css';

interface ProductSelectionSectionProps {
    className?: string;
}

export const ProductSelectionSection = (props: ProductSelectionSectionProps) => {
    const {className} = props;
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);
    const { data: categoriesData } = useGetCategoriesQuery('');

    useEffect(() => {
        if (categoriesData) {
            dispatch(setCategories(categoriesData));
        }
    }, [categoriesData, dispatch]);

    return (
       <section id="product" className={classNames(styles.ProductSelection, {}, [className])}>
            <Container>
                <Text 
                    tagType={TagType.h2}
                    size={TextSize.Xl}
                    tagName='We will select the perfect product for you'
                    theme={TextTheme.DARK_GRAY}
                    className={styles.title}
                />
                <Text 
                    tagType={TagType.P}
                    size={TextSize.S}
                    theme={TextTheme.GRAY}
                    tagName='Answer three questions and we will send you a catalog with the most suitable products for you.'
                    className={styles.subTitle}
                />
                <Text 
                    tagType={TagType.P}
                    size={TextSize.L}
                    theme={TextTheme.DARK_GRAY}
                    tagName='What type of product are you considering?'
                    className={styles.question}
                />
                <div className={styles.checkList}>
                    <CheckedList 
                        categories={categories}
                    />
                </div>
                <div className={styles.paginationBottom}>
                    <Text
                        tagType={TagType.SPAN}
                        size={TextSize.S}
                        theme={TextTheme.GRAY}
                        tagName='1 of 2'
                    />
                    <Button
                        theme={ButtonTheme.OUTLINE}
                    >
                        Next step
                    </Button>
                </div>
            </Container>
       </section>
    )
}
