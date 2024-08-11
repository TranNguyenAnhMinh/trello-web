import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import WorkSpaces from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Template from './Menus/Template'
import Started from './Menus/Started'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profile'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div>
      <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppIcon sx={{ color: 'white' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'white' }} />
            <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'blod', display: 'flex', alignItems: 'center', color: 'white' }}
            >Trello</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <WorkSpaces />
            <Recent />
            <Started />
            <Template />
            <Button
              sx={{
                color: 'white',
                border: 'none',
                '&:hover': { border: 'none' }
              }}
              variant="outlined">Create</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            id="outlined-search"
            label="Search..."
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <CloseIcon
                  fontSize="small"
                  sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')} />
              )
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '180px',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '& label.Mui-focused': { color: 'white' }
              }
            }} />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Notification" sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon />
          </Tooltip>
          <Profiles />
        </Box>
      </Box>
    </div>
  )
}

export default AppBar
