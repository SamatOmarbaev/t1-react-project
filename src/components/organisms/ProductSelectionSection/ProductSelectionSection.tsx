import classNames from 'classnames';
import styles from './ProductSelectionSection.module.css';
import { Container } from '../../atoms/Container/Container';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { Button, ButtonTheme } from '../../atoms/Button/Button';
import { CheckedList } from '../../molecules/CheckedList';
import { Category } from '../../molecules/CheckedList/types';
import { useMemo } from 'react';

interface ProductSelectionSectionProps {
    className?: string;
}

export const ProductSelectionSection = (props: ProductSelectionSectionProps) => {
    const {className} = props;

    const categories: Category[] = useMemo(() => {
        return [
            { id: 1, name: 'sneakers' },
            { id: 2, name: 'sneakers' },
            { id: 3, name: 'sneakers' },
            { id: 4, name: 'sneakers' },
            { id: 5, name: 'sneakers' },
            { id: 6, name: 'sneakers' },
            { id: 7, name: 'sneakers' },
            { id: 8, name: 'sneakers' },
            { id: 9, name: 'sneakers' },
            { id: 10, name: 'sneakers' },
            { id: 11, name: 'sneakers' },
            { id: 12, name: 'sneakers' },
            { id: 13, name: 'sneakers' },
            { id: 14, name: 'sneakers' },
            { id: 15, name: 'sneakers' },
            { id: 16, name: 'sneakers' },
            { id: 17, name: 'sneakers' },
            { id: 18, name: 'sneakers' },
            { id: 19, name: 'sneakers' },
            { id: 20, name: 'sneakers' },
            { id: 21, name: 'sneakers' },
            { id: 22, name: 'sneakers' },
        ]
    }, []);

    return (
       <section className={classNames(styles.ProductSelection, {}, [className])}>
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
                    <CheckedList categories={categories} />
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
