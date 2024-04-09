import classNames from 'classnames';

import { Container } from '@/components/atoms/Container';
import { MyImage } from '@/components/atoms/MyImage';
import { QuoteBlock } from '@/components/molecules/QuoteBlock';

import Image from '@/assets/AboutUsGroupLineImg.png'
import AbousUsMan from '@/assets/MaskGroupMan.png'

import styles from './AboutUsSection.module.css';

interface AboutUsSectionProps {
    className?: string;
}

export const AboutUsSection = (props: AboutUsSectionProps) => {
    const {className} = props;

    return (
       <section id="about" className={classNames(styles.AboutUsSection, {}, [className])}>
            <MyImage src={Image} className={styles.image} />
            <Container>
                <div className={styles.content}>
                    <QuoteBlock className={styles.quote} />
                    <div className={styles.imageContainer}>
                        <img src={AbousUsMan} loading='lazy' alt='just man' className={styles.justManImg}/>
                    </div>
                </div>
            </Container>
       </section>
    )
}
