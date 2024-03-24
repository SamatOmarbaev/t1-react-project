import classNames from 'classnames';

import { Container } from '../../atoms/Container/Container';
import { QuoteBlock } from '../../molecules/QuoteBlock';
import { MyImage } from '../../atoms/MyImage/MyImage';

import Image from '../../../assets/AboutUsGroupLineImg.svg'
import AbousUsMan from '../../../assets/MaskGroupMan.png'

import styles from './AboutUsSection.module.css';

interface AboutUsSectionProps {
    className?: string;
}

export const AboutUsSection = (props: AboutUsSectionProps) => {
    const {className} = props;

    return (
       <section id="about" className={classNames(styles.AboutUsSection, {}, [className])}>
            <MyImage src={Image} alt='line' className={styles.image} />
            <Container>
                <div className={styles.content}>
                    <QuoteBlock className={styles.quote} />
                    <div className={styles.imageContainer}>
                        <img src={AbousUsMan} alt='just man' className={styles.justManImg}/>
                    </div>
                </div>
            </Container>
       </section>
    )
}
