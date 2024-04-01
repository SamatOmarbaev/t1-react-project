import { memo } from 'react';
import classNames from 'classnames';

import { ImageWithCaption } from '../ImageWithCaption/ImageWithCaption';
import { ImagePr } from '../../types';

import styles from './ImagesTeams.module.css'

interface ImageGridProps {
    className?: string;
    images: ImagePr[];
}

export const ImagesTeams = memo((props: ImageGridProps) => {
    const { images, className } = props;

    return (
        <div className={classNames(styles.imageTeams, {}, [className])}>
            <div className={styles.column}>
                {images.map((image, index) => (
                    <ImageWithCaption key={index} image={image} />
                ))}
            </div>
        </div>
    );
});