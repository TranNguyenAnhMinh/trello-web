import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
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
function AppBar() {
  return (
    <div>
      <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <AppIcon sx={{ color: 'primary.main' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
            <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'blod', display: 'flex', alignItems: 'center', color: 'primary.main' }}
            >Trello</Typography>
          </Box>
          <WorkSpaces />
          <Recent />
          <Started />
          <Template />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Notification" sx={{ cursor: 'pointer' }}>
            <HelpOutlineIcon />
          </Tooltip>
          <Profiles/>
        </Box>
      </Box>
    </div>
  )
}

export default AppBar
