import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
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
      overflowX: 'auto'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: 'none',
            paddingX: '5px',
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
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
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon />}>Invite</Button>
        <AvatarGroup max={5}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
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
