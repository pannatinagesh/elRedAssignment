import PropTypes from 'prop-types';
// @mui
import { alpha, styled, Theme } from '@mui/material/styles';
import { Box, Tooltip } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('span')(({ theme, ownerState }:{theme: Theme , ownerState:any}) => {
  const isLight = theme.palette.mode === 'light';
  const { color, variant } = ownerState;

  const styleFilled = (color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success') => ({
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main,
  });

  const styleOutlined = (color:'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success') => ({
    color: theme.palette[color].main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette[color].main}`,
  });

  const styleGhost = (color:'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success') => ({
    color: theme.palette[color][isLight ? 'dark' : 'light'],
    backgroundColor: alpha(theme.palette[color].main, 0.16),
  });

  return {
    height: 22,
    minWidth: 22,
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    color: theme.palette.grey[800],
    fontSize: theme.typography.pxToRem(12),
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightBold,

    ...(color !== 'default'
      ? {
          ...(variant === 'filled' && { ...styleFilled(color) }),
          ...(variant === 'outlined' && { ...styleOutlined(color) }),
          ...(variant === 'ghost' && { ...styleGhost(color) }),
        }
      : {
          ...(variant === 'outlined' && {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            border: `1px solid rgba(145, 158, 171, 0.32)`,
          }),
          ...(variant === 'ghost' && {
            color: isLight ? theme.palette.text.secondary : theme.palette.common.white,
            backgroundColor: 'rgba(145, 158, 171, 0.16)',
          }),
        }),
  };
});

// ----------------------------------------------------------------------

interface Props {
  children?: React.ReactNode,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  color: 'default' | 'primary'| 'secondary'| 'info'| 'success'| 'warning'| 'error' | string,
  variant: 'filled'| 'outlined'| 'ghost' | string,
  sx?: object,
  iconStyle? :object,
  className? :string,
  tooltip? :string
}

export default function Label({ children, color = 'default', tooltip, variant = 'ghost', startIcon, endIcon, sx, iconStyle, className }: Props) {
  const style = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    ...iconStyle
  };

  return (
    <>
   {tooltip ? <Tooltip title={tooltip} arrow>
    <RootStyle
      ownerState={{ color, variant } as unknown as any}
      className = {className}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }} theme={undefined as unknown as Theme} >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
    </Tooltip> :
    <RootStyle
    ownerState={{ color, variant } as unknown as any}
    className = {className}
    sx={{
      ...(startIcon && { pl: 0.75 }),
      ...(endIcon && { pr: 0.75 }),
      ...sx,
    }} theme={undefined as unknown as Theme} >
    {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

    {children}

    {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
  </RootStyle> }
    </>
  );
}
