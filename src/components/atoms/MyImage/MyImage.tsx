import { CSSProperties, memo } from 'react';
import classNames from 'classnames';

import styles from './MyImage.module.css'

interface MyImageProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  src?: string;
  alt?: string;
}

export const MyImage = memo((props: MyImageProps) => {
  const {
    className, height, width, border, src, alt
  } = props;

  const cls: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames('', {}, [className])}
      style={cls}
    >
        <img src={src} alt={alt} className={styles.images} />
    </div>
  );
});
