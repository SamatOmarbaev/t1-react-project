import { memo } from 'react';
import classNames from 'classnames';

interface IconWrapperProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const IconWrapper = memo((props: IconWrapperProps) => {
  const {
    className, Svg, ...otherProps
  } = props;

  return (
    <Svg
      className={classNames('', {}, [className])}
      {...otherProps}
    />
  );
});
