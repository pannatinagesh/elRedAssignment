// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------
interface  Breakpoint {
  breakpoint : 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function useResponsive(query: string, key: Breakpoint["breakpoint"], start?:number | Breakpoint["breakpoint"] , end?:number | Breakpoint["breakpoint"]) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as number | Breakpoint["breakpoint"] , end as number | Breakpoint["breakpoint"]));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  if (query === 'only') {
    return mediaOnly;
  }
  return null;
}
