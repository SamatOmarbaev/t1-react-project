import { useMemo } from 'react';
import classNames from 'classnames';

import { Container } from '@/components/atoms/Container';
import { TagType, Text, TextSize } from '@/components/atoms/Text';
import { ImagesTeams } from '@/components/molecules/ImagesTeams';
import { MyImage } from '@/components/atoms/MyImage';

import CircleRed from '@/assets/imagesTeamCircleRed.png'
import MenGlasses from '@/assets/menGlasses.jpg'
import WomanGlasses from '@/assets/womanGlasses.jpg'
import WomanKrik from '@/assets/womankrik.jpg'
import JustMen from '@/assets/justMen.jpg'
import MenWithPhone from '@/assets/menWithPhone.jpg'
import PostWoman from '@/assets/postWoman.jpg'

import styles from './BlockImagesTeamsSection.module.css';

interface BlockImagesTeamsSectionProps {
    className?: string;
}

export const BlockImagesTeamsSection = (props: BlockImagesTeamsSectionProps) => {
    const {className} = props;
    
    const imagesFirst = useMemo(() => {
        return [
            { src: MenGlasses, caption: 'Administrator', name: 'Maxim' },
            { src: JustMen, caption: 'Administrator', name: 'Maxim' },
        ]
    }, []);

    const imagesSecond = useMemo(() => {
        return [
            { src: WomanGlasses, caption: 'Administrator', name: 'Maxim' },
            { src: MenWithPhone, caption: 'Administrator', name: 'Maxim' },
        ]
    }, []);

    const imagesThird = useMemo(() => {
        return [
            { src: WomanKrik, caption: 'Administrator', name: 'Maxim' },
            { src: PostWoman, caption: 'Administrator', name: 'Maxim' },
        ]
    }, []);

    return (
       <section id="team" className={classNames(styles.BlockImagesTeamsSection, {}, [className])}>
            <Container>
                <article className={styles.content}>
                    <Text 
                        tagType={TagType.h2}
                        size={TextSize.Xl}
                        tagName='Our team'
                        className={styles.title}
                    />
                    <div className={styles.photos}>
                        <ImagesTeams 
                            images={imagesFirst}
                        />
                        <ImagesTeams 
                            images={imagesSecond}
                            className={styles.secondaBlock}
                        />
                        <ImagesTeams 
                            images={imagesThird}
                        />
                    </div>
                </article>
                <MyImage src={CircleRed} className={styles.circleRed} />
            </Container>
       </section>
    )
}
