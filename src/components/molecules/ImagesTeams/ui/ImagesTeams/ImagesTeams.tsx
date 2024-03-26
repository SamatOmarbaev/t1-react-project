import classNames from 'classnames';
import styles from './ImagesTeams.module.css'
import { ImageWithCaption } from '../ImageWithCaption/ImageWithCaption';
import { ImagePr } from '../../types';

interface ImageGridProps {
    className?: string;
    images: ImagePr[];
}

export const ImagesTeams = (props: ImageGridProps) => {
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
};