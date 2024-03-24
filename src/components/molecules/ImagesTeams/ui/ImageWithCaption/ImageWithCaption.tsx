import { memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextAlign, TextSize } from '../../../../atoms/Text/Text';
import { ImagePr } from '../../types';
import { MyImage } from '../../../../atoms/MyImage/MyImage';

import styles from './ImageWithCaption.module.css'

interface ImageWithCaptionProps {
    className?: string;
    image: ImagePr;
}

export const ImageWithCaption = memo((props: ImageWithCaptionProps) => {
    const { image, className } = props;

    return (
        <div className={classNames(styles.imageContainer, {}, [className])}>
            <MyImage src={image.src} alt="photo of a team member" className={styles.image} />
            <div className={styles.overlay}>
                <Text 
                    align={TextAlign.CENTER} 
                    tagType={TagType.SPAN}
                    size={TextSize.L}
                    tagName={image.name}
                />
                <Text 
                    align={TextAlign.CENTER} 
                    tagType={TagType.SPAN}
                    size={TextSize.S}
                    tagName={image.caption}
                />
            </div>
        </div>
    );
});