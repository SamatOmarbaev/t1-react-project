import { memo } from 'react';
import classNames from 'classnames';

import { TagType, Text, TextAlign, TextSize } from '@/components/atoms/Text';
import { MyImage } from '@/components/atoms/MyImage';
import { ImageTypes } from '../../types';

import styles from './ImageWithCaption.module.css'

interface ImageWithCaptionProps {
    className?: string;
    image: ImageTypes;
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
                    tagName={image.caption}
                />
            </div>
        </div>
    );
});