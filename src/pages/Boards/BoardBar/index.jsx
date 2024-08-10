import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { colors, Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import theme from '~/theme'
const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
function BoardBar() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      paddingX: 2,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={{
            color: 'white',
            bgcolor: 'transparent',
            border: 'none',
            paddingX: '5px',
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'white'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
          }}
          icon={<DashboardIcon />}
          label="MERN Stack Board"
          clickable />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Public/Private Workspace"
          clickable />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }} variant="outlined" startIcon={<PersonAddAlt1Icon />}>Invite</Button>
        <AvatarGroup max={5}
          sx={{
            gap: '8px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}>
          <Tooltip title="minn">
            <Avatar
              alt="Minn"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjQJsuI63Kq630-036sRrJ_Fg25kRV-7DHwZAkbsMzYw3Y=s32-c-mo" />
          </Tooltip>
          <Tooltip title="minn">
            <Avatar
              alt="Minn"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjQJsuI63Kq630-036sRrJ_Fg25kRV-7DHwZAkbsMzYw3Y=s32-c-mo" />
          </Tooltip>
          <Tooltip title="minn">
            <Avatar
              alt="Minn"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjQJsuI63Kq630-036sRrJ_Fg25kRV-7DHwZAkbsMzYw3Y=s32-c-mo" />
          </Tooltip>
          <Tooltip title="minn">
            <Avatar
              alt="Minn"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjQJsuI63Kq630-036sRrJ_Fg25kRV-7DHwZAkbsMzYw3Y=s32-c-mo" />
          </Tooltip>
          <Tooltip title="minn">
            <Avatar
              alt="Minn"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjQJsuI63Kq630-036sRrJ_Fg25kRV-7DHwZAkbsMzYw3Y=s32-c-mo" />
          </Tooltip>
          <Tooltip title="minn">
            <Avatar
              alt="Minn"
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjQJsuI63Kq630-036sRrJ_Fg25kRV-7DHwZAkbsMzYw3Y=s32-c-mo" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
