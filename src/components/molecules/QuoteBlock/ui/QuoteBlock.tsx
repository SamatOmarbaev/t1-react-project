import classNames from 'classnames';

import { TagType, Text, TextSize, TextWeight } from '../../../atoms/Text/Text';

import styles from './QuoteBlock.module.css';

interface QuoteBlockProps {
    className?: string;
}

export const QuoteBlock = (props: QuoteBlockProps) => {
    const {className} = props;

    return (
       <article className={classNames(styles.QuoteBlock, {}, [className])}>
            <Text 
                tagType={TagType.h2} 
                size={TextSize.Xl} 
                tagName='About us' 
            />
            <Text 
                tagType={TagType.P} 
                size={TextSize.S} 
                weight={TextWeight.SEMIBOLD}
                tagName={'Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.'}
                className={styles.para}
            />
            <Text 
                tagType={TagType.P} 
                size={TextSize.S} 
                weight={TextWeight.SEMIBOLD}
                tagName={'But we will help you make the right choice!'}
                className={styles.para}
            />
            <Text 
                tagType={TagType.SPAN}
                size={TextSize.M}
                tagName='Goods4you'
                className={styles.signa}
            />
       </article>
    )
}
