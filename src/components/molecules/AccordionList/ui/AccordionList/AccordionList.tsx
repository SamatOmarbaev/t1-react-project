import classNames from 'classnames';
import { FAQItem } from '../../types';
import { AccordionItem } from '../AccordionItem/AccordionItem';

interface AccordionListProps {
    className?: string;
    faqs: FAQItem[];
}

export const AccordionList = (props: AccordionListProps) => {
    const {className, faqs} = props;

    return (
       <ul className={classNames('', {}, [className])}>
            {faqs.map((faq, index) => (
                <li key={index}>
                    <AccordionItem faq={faq} />
                </li>
            ))}
       </ul>
    )
}
