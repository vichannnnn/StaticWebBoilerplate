import { forwardRef, MouseEvent } from 'react';
import { Button as ButtonBase, ButtonProps, SxProps, Theme } from '@mui/material';

interface ButtonBaseProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  sx?: SxProps<Theme>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ onClick, sx, children, ...props }, ref) => {
    return (
      <ButtonBase
        onClick={onClick}
        ref={ref}
        variant='outlined'
        sx={{
          border: '1px solid #666666',
          backgroundColor: '#1A1A1A',
          color: '#FAFAFA',
          textTransform: 'none',
          fontFamily: 'Space Grotesk, system-ui, sans-serif',
          padding: '10px 24px',
          fontSize: '14px',
          fontWeight: 500,
          borderRadius: '12px',
          letterSpacing: '0',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: '#1A1A1A',
            border: '1px solid #FF6B35',
            color: '#FF6B35',
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.2)',
          },
          '&:focus': {
            border: '1px solid #FF6B35',
            outline: 'none',
            boxShadow: '0 0 0 2px rgba(255, 107, 53, 0.3)',
          },
          ...sx,
        }}
        {...props}
      >
        <span>{children}</span>
      </ButtonBase>
    );
  },
);

Button.displayName = 'Button';
