import React, { InputHTMLAttributes, memo } from 'react';
import classNames from 'classnames';

import styles from './Input.module.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  borderRadius?: boolean;
  borderNone?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, onChange, placeholder, value, readOnly, borderRadius, borderNone, ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods = {
    [styles.readOnly]: readOnly,
    [styles.borderRadius]: borderRadius,
    [styles.borderNone]: borderNone,
  };

  return (
    <input
      className={classNames(styles.Input, mods, [className])}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      readOnly={readOnly}
      {...otherProps}
    />
  );
});
