// material
import { styled } from '@mui/material/styles';
import { OutlinedInput, InputAdornment } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

const SearchStyle = styled(OutlinedInput)(({ theme }:any) => ({
    width: '100%',
    transition: theme.transitions.create(['box-shadow', 'width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': { boxShadow: theme.customShadows.z8 },
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  }));

  export default function SearchBar({ filterName, onFilterName, placeholder, onBlur }: {filterName: string, onFilterName: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined, placeholder: string, onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined}) {
return (
    <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder={placeholder}
          onBlur = {onBlur}
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
)
  };