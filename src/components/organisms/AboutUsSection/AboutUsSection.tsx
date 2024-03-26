import classNames from 'classnames';
import styles from './AboutUsSection.module.css';
import Image from '../../../assets/AboutUsGroupLineImg.svg'
import AbousUsMan from '../../../assets/MaskGroupMan.png'
import { Container } from '../../atoms/Container/Container';
import { QuoteBlock } from '../../molecules/QuoteBlock';

interface AboutUsSectionProps {
    className?: string;
}

export const AboutUsSection = (props: AboutUsSectionProps) => {
    const {className} = props;

    return (
       <section className={classNames(styles.AboutUsSection, {}, [className])}>
            <img src={Image} alt="line" className={styles.image} />
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
