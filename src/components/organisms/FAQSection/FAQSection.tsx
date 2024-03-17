import styles from './FAQSection.module.css';
import { Container } from '../../atoms/Container/Container';
import classNames from 'classnames';
import { TagType, Text, TextSize, TextTheme } from '../../atoms/Text/Text';
import { AccordionList } from '../../molecules/AccordionList';
import { useMemo } from 'react';
import { FAQItem } from '../../molecules/AccordionList/types';

interface FAQSectionProps {
    className?: string;
}

export const FAQSection = (props: FAQSectionProps) => {
    const {className} = props;

    const faqs: FAQItem[] = useMemo(() => {
        return [
            {
                title: 'Question 1',
                content: 'Long answer to the first question'
            },
            {
                title: 'Question 2',
                content: 'Long answer to the first question'
            },
        ]
    }, [])

    return (
       <section className={classNames(styles.FAQSection, {}, [className])}>
            <Container>
                <Text 
                    tagType={TagType.h2}
                    size={TextSize.Xl}
                    tagName='FAQ'
                    theme={TextTheme.DARK_GRAY}
                    className={styles.title}
                />
                <AccordionList faqs={faqs} />
            </Container>
       </section>
    )
}
