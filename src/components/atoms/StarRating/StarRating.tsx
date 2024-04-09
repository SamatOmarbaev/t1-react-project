import { FC, useState } from 'react';
import classNames from 'classnames';

import { IconWrapper } from '../IconWrapper/IconWrapper';

import Star from '../../../assets/Star.svg?react'

import styles from './StarRating.module.css';

interface StarRatingProps {
  className?: string;
  onSelect?: (starNum: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = (props) => {
  const {
    className, onSelect, selectedStars = 0, size = 30,
  } = props;
  const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));
  const [currentStarsCount, setCurrentStarsCount] = useState<number>(selectedStars);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(styles.starRating, {}, [className])}>
      {stars.map((starNum) => (
        <IconWrapper
          Svg={Star}
          key={starNum}
          className={classNames(styles.starIcon, { [styles.selected]: isSelected }, [currentStarsCount >= starNum ? styles.hovered : styles.normal])}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNum)}
          onClick={onClick(starNum)}
        />
      ))}
    </div>
  );
};
