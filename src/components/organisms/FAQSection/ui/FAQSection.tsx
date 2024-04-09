import { useMemo } from 'react';
import classNames from 'classnames';

import { Container } from '@/components/atoms/Container';
import { TagType, Text, TextSize, TextTheme } from '@/components/atoms/Text';
import { AccordionList, FAQItem } from '@/components/molecules/AccordionList';

import styles from './FAQSection.module.css';

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
       <section id="faq" className={classNames(styles.FAQSection, {}, [className])}>
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
