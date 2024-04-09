import { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { RxCross1 } from "react-icons/rx";

import { TagType, Text, TextSize, TextTheme } from '@/components/atoms/Text';
import { FAQItem } from '../../types';

import styles from './AccordionItem.module.css';

interface AccordionItemProps {
    className?: string;
    faq: FAQItem;
}

export const AccordionItem = memo((props: AccordionItemProps) => {
    const {className, faq} = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => (
        setIsOpen(!isOpen)
    )

    return (
       <article className={classNames(styles.AccordionItem, {}, [className])}>
            <div
                className={classNames(styles.title)} 
                onClick={toggleAccordion}
                aria-label='открыть / закрыть контент'
            >
                <Text
                    tagType={TagType.h4}
                    size={TextSize.M}
                    tagName={faq.title}
                    theme={TextTheme.DARK_GRAY}
                />
                <RxCross1 size={25} className={classNames(styles.icon, [isOpen ? styles.rotate : styles.icon])} />
            </div>
            <div 
                className={classNames(styles.collapse, [isOpen ? styles.open : styles.collapse])}
                style={isOpen ? {height: contentRef.current?.scrollHeight || 'auto'} : {height: '0px'}}
            >
                <article 
                    ref={contentRef}
                >
                    <Text
                        tagName={faq.content}
                        theme={TextTheme.GRAY}
                    />
                </article>
            </div>
       </article>
    )
})
