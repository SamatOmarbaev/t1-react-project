import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import { Button, ButtonTheme } from '@/components/atoms/Button';
import { MyImage } from '@/components/atoms/MyImage';

import styles from './ImagesGallery.module.css';

interface ImagesGalleryProps {
    className?: string;
    images?: string[];
}

export const ImagesGallery = memo((props: ImagesGalleryProps) => {
    const {className, images} = props;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === images!.length - 1;

    useEffect(() => {
        const imageElem = document.getElementsByClassName(styles.mainImg)[0];
        imageElem.classList.add(styles.fadeInOut);
        const animationEndHandler = () => {
            imageElem.classList.remove(styles.fadeInOut);
            imageElem.removeEventListener('animationend', animationEndHandler);
        };
        imageElem.addEventListener('animationend', animationEndHandler);
    
        return () => {
            imageElem.removeEventListener('animationend', animationEndHandler);
        };
    }, [currentIndex]);

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
            <div className={styles.backContainerColor}>
                <MyImage 
                    src={images?.[currentIndex]} 
                    height={'100%'} 
                    width={'100%'} 
                    className={classNames(styles.mainImg, { [styles.fadeInOut]: true })}
                />
            </div>
            <ul className={styles.imagesList}>
                {images?.map((image, index) => (
                    <Button theme={ButtonTheme.CLEAR} key={index} onClick={() => changeImage(index)} aria-label='выбор картинки' >
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
                <button aria-label='перелист назад' onClick={prevImage} className={classNames(styles.btn, { [styles.disabled]: isPrevDisabled })}>
                    <IoMdArrowDropleft size={24} />
                </button>
                <button aria-label='перелист вперед' onClick={nextImage} className={classNames(styles.btn, styles.right, { [styles.disabled]: isNextDisabled })}>
                    <IoMdArrowDropright size={24} />
                </button>
            </div>
        </div>
    )
})
