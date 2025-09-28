import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = (props) => {
  const children = props.children;
  const onClick = props.onClick;

  // Use robust if checks for default props to ensure transpiler compatibility
  let variant = 'primary';
  if (props.variant) {
    variant = props.variant;
  }
  
  let fullWidth = false;
  if (props.fullWidth) {
    fullWidth = props.fullWidth;
  }
  
  let disabled = false;
  if (props.disabled) {
    disabled = props.disabled;
  }
  
  // Fix: Explicitly type the 'type' variable to match the allowed button types.
  let type: 'button' | 'submit' | 'reset' = 'button';
  if (props.type) {
    type = props.type;
  }

  const baseClasses = 'font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantClass = '';
  if (variant === 'primary') {
    variantClass = 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500';
  } else {
    variantClass = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
  }

  let widthClass;
  if (fullWidth) {
    widthClass = 'w-full';
  } else {
    widthClass = 'w-auto';
  }

  const disabledClasses = 'disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500';

  const classes = [
    baseClasses,
    variantClass,
    widthClass,
    disabledClasses
  ].join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;