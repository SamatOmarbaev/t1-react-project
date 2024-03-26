import classNames from 'classnames';
import styles from './HeroSection.module.css';
import { TagType, Text, TextSize, TextWeight } from '../../atoms/Text/Text';
import { Button, ButtonTextColor, ButtonTheme } from '../../atoms/Button/Button'
import { Container } from '../../atoms/Container/Container';

interface HeroSectionProps {
    className?: string;
}

export const HeroSection = (props: HeroSectionProps) => {
    const {className} = props;

    return (
       <section className={classNames(styles.HeroSection, {}, [className])}>
            <Container>
                <Text 
                    tagName='Any products from famous brands with worldwide delivery'
                    size={TextSize.XXL} 
                    tagType={TagType.h1} 
                    className={styles.title}
                />
                <Text 
                    tagName='We sell smartphones, laptops, clothes, shoes and many other products at low prices'
                    tagType={TagType.P}
                    size={TextSize.S}
                    weight={TextWeight.SEMIBOLD}
                    className={styles.subTitle}
                />
                <div className={styles.backTitle}>
                    Goods4you
                </div>
                <Button
                    theme={ButtonTheme.RED}
                    textColor={ButtonTextColor.WHITE}
                    className={styles.btn}
                >
                    Go to shopping
                </Button>
            </Container>
       </section>
    )
}
