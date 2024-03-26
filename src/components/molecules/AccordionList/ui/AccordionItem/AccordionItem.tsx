import classNames from 'classnames';
import styles from './AccordionItem.module.css';
import { TagType, Text, TextSize, TextTheme } from '../../../../atoms/Text/Text';
import { memo, useState } from 'react';
import { FAQItem } from '../../types';
import { RxCross1 } from "react-icons/rx";

interface AccordionItemProps {
    className?: string;
    faq: FAQItem;
}

export const AccordionItem = memo((props: AccordionItemProps) => {
    const {className, faq} = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => (
        setIsOpen(!isOpen)
    )

    return (
       <article className={classNames(styles.AccordionItem, {}, [className])}>
            <div
                className={classNames(styles.title, [isOpen ? styles.open : styles.title])} 
                onClick={toggleAccordion}
            >
                <Text
                    tagType={TagType.h4}
                    size={TextSize.M}
                    tagName={faq.title}
                    theme={TextTheme.DARK_GRAY}
                />
                <span className={classNames(styles.icon, [isOpen ? styles.rotate : styles.icon])}>
                    <RxCross1 size={25} className={classNames(styles.icon, [isOpen ? styles.rotate : styles.icon])} />
                </span>
            </div>
            {isOpen && (
                <Text
                    tagType={TagType.P}
                    size={TextSize.S}
                    tagName={faq.content}
                    className={classNames(styles.content, [isOpen ? styles.open : styles.closed])}
                    theme={TextTheme.GRAY}
                />
            )}
       </article>
    )
})
