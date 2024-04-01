import { memo } from 'react';
import classNames from 'classnames';

import { FAQItem } from '../../types';
import { AccordionItem } from '../AccordionItem/AccordionItem';

import styles from './AccordionList.module.css'

interface AccordionListProps {
    className?: string;
    faqs: FAQItem[];
}

export const AccordionList = memo((props: AccordionListProps) => {
    const {className, faqs} = props;

    return (
       <ul className={classNames(styles.AccordionList, {}, [className])}>
            {faqs.map((faq, index) => (
                <li key={index}>
                    <AccordionItem faq={faq} />
                </li>
            ))}
       </ul>
    )
})
