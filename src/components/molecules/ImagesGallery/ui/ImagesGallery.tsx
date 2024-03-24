import { memo, useState } from 'react';
import classNames from 'classnames';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import { Button, ButtonTheme } from '../../../atoms/Button/Button';
import { MyImage } from '../../../atoms/MyImage/MyImage';

import styles from './ImagesGallery.module.css';

interface ImagesGalleryProps {
    className?: string;
    images?: string[];
}

export const ImagesGallery = memo((props: ImagesGalleryProps) => {
    const {className, images} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === images!.length - 1;

    const changeImage = (index: number) => {
        setCurrentIndex(index)
    }

    const nextImage = () => {
        if (!isNextDisabled) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevImage = () => {
        if (!isPrevDisabled) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={classNames(styles.ImagesGallery, {}, [className])}>
            <MyImage src={images?.[currentIndex]} height={460} width={520} className={styles.backContainerColor} />
            <ul className={styles.imagesList}>
                {images?.map((image, index) => (
                    <Button theme={ButtonTheme.CLEAR} key={index} onClick={() => changeImage(index)} >
                        <MyImage 
                            src={image} 
                            height={75} 
                            width={70} 
                            className={classNames('', {[styles.imageBorder]: index === currentIndex})} 
                        />
                    </Button>
                ))}
            </ul>
            <div className={styles.controls}>
                <button onClick={prevImage} className={classNames(styles.btn, { [styles.disabled]: isPrevDisabled })}>
                    <IoMdArrowDropleft size={24} />
                </button>
                <button onClick={nextImage} className={classNames(styles.btn, { [styles.disabled]: isNextDisabled })}>
                    <IoMdArrowDropright size={24} />
                </button>
            </div>
        </div>
    )
})
