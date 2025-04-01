import clsx from 'clsx';
import { Slot } from 'radix-ui';
import * as React from 'react';
import { Theme } from 'config/themes';
import { themed } from 'utils/themes';
import { button, ButtonVariants } from './button.css';
import { ButtonElement } from './types';

interface BaseButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: ButtonVariants['color'];
  disabled?: boolean;
  rounded?: ButtonVariants['rounded'];
  size?: 'small' | 'medium' | 'large';
  theme?: Theme;
}

export type ButtonProps<T extends ButtonElement = 'button'> = T extends 'button'
  ? BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: false }
  : BaseButtonProps & { asChild: true };

const BaseButton = <T extends ButtonElement = 'button'>(
  { asChild, className, color = 'accent', disabled, rounded = false, size = 'medium', theme, ...props }: ButtonProps<T>,
  forwardedRef: React.ForwardedRef<HTMLElementTagNameMap[T]>,
): React.ReactElement<ButtonProps<T>, T> => {
  const Component = asChild ? Slot.Root : 'button';

  return (
    <Component
      className={clsx(className, themed(theme), button({ color, rounded, size }))}
      data-disabled={disabled ?? undefined}
      disabled={disabled}
      ref={forwardedRef as React.ForwardedRef<HTMLButtonElement>}
      {...props}
    />
  );
};

export const Button = React.forwardRef(BaseButton);
