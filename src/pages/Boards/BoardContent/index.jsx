import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import { Button } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.trelloCustom.boardContentHeight,
      display: 'flex'
    }}>
      {/* box column */}
      <Box sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(5)})`
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Typography sx={{
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Colum Title
          </Typography>
          <Box>
            <Tooltip title="More option">
              <ExpandMoreIcon
                sx={{ color: 'text.primary', cursor: 'pointer' }}
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon> <DeleteForeverIcon fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon> <Cloud fontSize="small" /></ListItemIcon>
                <ListItemText>Achive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX:'hidden',
          overflowY:'auto',
          maxHeight:(theme)=> `calc(
          ${theme.trelloCustom.boardContentHeight} - 
          ${theme.spacing(5)} -
          ${COLUMN_HEADER_HEIGHT} -
          ${COLUMN_FOOTER_HEIGHT }
          )`
        }}>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>
            <CardMedia
              sx={{ height: 140 }}
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUXGBUXFxUXFxUVFRUVFxUWFhUVFRYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8QFSsZFRkrKystKystLS0tLS0tLSsrKy0tLS0tLS0rLSstLS0tKy0tLS0rLSs3LS0tLTctLSs3Lf/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EADQQAAEDAgMFBgYDAQADAAAAAAEAAhEDIQQxQQUSUWFxBiKBkaHBEzKx0eHwFELxUhUjYv/EABgBAQEBAQEAAAAAAAAAAAAAAAEAAgME/8QAHhEBAQEBAAICAwAAAAAAAAAAAAERAiExAxITQlH/2gAMAwEAAhEDEQA/APLnPJXJAEq4PcQpqelACgCSVydUZCGSkFR6TEFjDIUrfVTyfTXNfdDL5T2C6DU/AM/tzWiwbwRcRzCpsBT7qu8Bcc+R/C044lijzTatO05cxxUhjDE38UjssvsgxmdsYOXfFFg47rxoH6O8fdUjitfVAkscLG8HUG3pCoNpbPLXTmDeees89fFFdeaigWHj7JHJ7wQ0dXfRsJrhYIjWmB4y8k4BIWpWnqgC7lpQxKI0yuDlHDCAnEQBzv7IrWXsOq6syDyACtWAEp4F00U0anSnkB6rQTdnYPf7zzusBvxPIfdaGnG6GtENGQ9zxKqsPQLwJ7rRkOIV1TbAj7IrKO9qGAj1rITQgo+0mSwE6O9lR1ahcQ0fKPUq27RVN1jBxk/QKnpd3Sea1FamNGgSC2aZTddScO0l3FIEoOzJyGnsrPA4J7GEujfdcj/kaNHIKrbD3ECdxh+b/p49gp/892ThvDKRn5ItMPqCD1QwP8UmlSa4bzXS4D5T6yhTBmOSGgvgT8tj6HqEWnULbOG7zF97JGphodmemk9Uc946RyRqx5mITJSAp4WmSJ7SmFcCpCOKGaXBKHJ8pVdTzuiuQnBODkKEhK18EFNlKLKNaDZIBlvVWOFO6d0ujw9yqnZcktI/sAQeNo+oWhdg3PhwF+dkuWJNF54nykIxJPP0TsLhyBcqVuBRiE7BTeP3kpH/AIljmFrhmPZHDwLJaVcyBzuooB7N05FrSfWPt6pcX2UpuEtm2lrxJA81cYZjyD1hT8HhiJ3jn5eCEw7exziZc4AajhbQqM7sjUcbEAEkAakDVemGmIjwQxREjkitPI8JsKs55bukQSCdLGPYpu1NnGi0F3/IcevDzXrVTDi5Avf1lecdsMJUbVY03a5zADoO8JHofNUms9dWKb5XxzPkM/ofJCdiAc/0/pSYuzahcCCGADjLnOB8Yc71VXRAjfdMjIczMWOZ/C19WZ8tXIjp78AETA0y90DIRfiqVjXAb0W0vc8+Q5q+2RkCZM+A8EYftrR4XDAaCeX5UoUwBl7qLQeBr5KQCDk+Oqy1A8Q0RZDpsRTOo8Qn7imlTt095jeXuVUGhF2mOWn4Uva1Qmq46Cw8B/qFQqXj6rUFMovFmkQZv+FZO7gDKd6jsj/y3+zvtzKiVWs/s0mf3NLhGvpb1SJ3hBafmA03T7JGLGlT3WANiwy56z4qPSlzrwPoiUq4qS4C+o18krqRBkA3vzCK0Q04MxfipdOpuwR5hRqFbibjREqb24CCJ9tFkpGIxDqm7EHdLptHCbZQnNBFgColCkZLpIJGWn5U/DVyw94WIzjeab6cEnXmZCRO3UiWHLo1TgE6VIMpU+EjmwmIxFa7kmQlVU5zV3LqnApzTcIVWHZam4nUNGvCc1tWNcBLbgaTf1Wf7KNeajmQQN2Z0JBBC0dKi5rrZcOHRIEa+IIuNeI5patT9zTKgi34Qm97OR4o0DtDnxGhB5EagK4wlC0kX1VPQxrKdi6edp8YV5h8Qx4lpBRUlUgpTVFw91LaUI8BKGpWokKIRaqjbey2VmgOtBBBGYIcHD1CuahUSvkoWMDtnY4eS0AAAgk8GgAyfEv81k9qbPh/y6kM4mCN4nqSOt9AvWMRhwf36rNbdwFNsuNjEcgBe32FzxW5XO8vOWEtcQZNzzE/4rjB1wcpv4KLj8M2SBeDxu7Qnko2HxDmEETGpi/qpS41uDxOlvP62Vk2pPPoqbZ+I3hAEcSOecK4o0QBZYdp5Gw7JPEKRiKgYwvMWsOZ0QKb9Aq7tDW7zaegE+JU3iqeHTM6n1zTXU0amy+dklbgNfQalajJ9Bu8ZJ+W3KUTEuJEaplMtaR6/dHa8b0kiPdQMbYRJBGuRCO3F7olxnLvajRMrARxJ+iC1luPBFKbuBzd7jqM000gbGVGo1TpY+niEQ1yTFgTbI7v+qKxo74tJI6aIool2sDS0qPTlomVMwr7SRM+CBrzQhJCdCQhaRGpT+hNLU4FQNShcUiVhSEoSApykSNE+mwuMASkAutn2L2QCPiuHTosqrTstsl1Nm9UudBMwD+Fd1qQiwT3FEohAZ/aFNzQScteVllsdtVx3m0/6/M42a08DGZXoHaKmW0HvaJcGkgc9F5Jt6oWUKTMt8fEfzcb+/omTaOrk0Mba3XGKlRx1gAN8AVdbH7QQd4HKJEBpjmBY9QsnjsC+i4NfAJAdAIMAiRlyhTcAwPql1Nu420MkutADjvHiZPit9c+NcufktuPadlYwVGBwOYU5lRZHsFUJpVG6NqEDlrHmVqGG65uy1pmycXKNTqLn1VEyvXzQxXkcVFqOlVfaXazcLRLtTZoGZJ4KCwxWPp0xL3AAakgfVZzH9psI+wc13S4vzXm22cbUqv3qziTowZNHD8qHRDSfmLeef1W5y5XvWx2m1j+9SgAXPebYcuCpX0spyI0uPPUoOE36b90xcSLCHDQiU/FGJkBp/8AnU8+KgsNlViLN+Xy6m602BrNN1jcBXmxnOVr9k96B6LNduOvC03YEgeKptrMh7Ty9ytNXMDQADwHMrG7Rxm/ULo7uQ6Dl+5ojdppcZzT6J1Ov0Udrw42FvdGNTQLUZ0ppNmdLpcPUAJECOKdAKa1gFuOqqkxlabBOewRe/3QMOeIy9FD2rttlIQDvO4fRWaL1In2piTAtr6qBU2lSZ8zr8BwWS2htmrVN3QOAUF1UlbnLlfl/jfYfb9LK8eceOqtqPaCiLfvWBkvLGVSNf3kpNLHubl5nMqxj8lWLSl3VHCNTKw9MpZSOToSQomhcUsJQEogauXLihD4Ru84CMyF6ls1oawACAAF5lscf+5nUL02gbIrNqS9ykYZyhFyNQqISz+GHNLTkV592r7G1HiGDeaPlII3miZiDnqt3Sr8FIbUlSs2Y8GPZqu0w5u71BHoQFfYDZow7C8iTq6LTHH2XrFYAjIKDVwrTmJ5HJVt6Y5+Oc3VH2KoOZR7+pLpy+YyJ5wtAHobzCEa4CnX2l7651RQHYi+aKytxUbyM0rF9pXiriGA33N4DhvboIPOxWuc7gszt3ZFR1Sk+nfvQ7kCPm9Muahjz7auz3AGuXNhz3NA3gX2zJbmBzUMOa4MYQ1sb8vAJc7eiA+8ECLZfMVs9s9lalQbwZ3uLRM/vBZ1vZrEzuupvic9x8/T0XSdzHl64so2EG9gy92dJ4AOu47MTrBIPgibQwFTdDhcG8AXjPyV1hezNerTbQbTcylIdUqPG7l/VrT3iZGcQp+2sEKYDGzIgWtaNSVh1/V5+yuWkSC0jwk/XVWeA2o+md5riQNCZt4I2PwM5tjmSCfRUrGFpgiAt+HLbG5qbWNekAHXJuBKj0dl1HHKBz1VT2fxnw6gm4J/c16TRMgGM0enbnrWap7EqHgEf/w5Gq0bWptRiNNrOO2fu6qqx1UMkwStTiKUqh2jgMyZ6KjFrKbQ2y8jdb3R6lUTzOauto4YAm0dc1UOYZOi6Rx6BhdCduritMGwnUymyuabpS8KbCckhcXsEY8JZnJDIXNMLLWnrpXNKcQkmwkSwnCOKkk7IcBVYTxF16NRfZeZ0nNDhEk84AXouFf3ROoCLGEw1EwVboL3p9FwGqEsKVgiiqVAFfqnNrhRWAqJtXEBoJOiAyoDqnuaHCDkoq6ttMO+X2SU6shQtp7JiSxxE8FX7IbUpl4e8vbbdnMG8jpkp345l9NCAm1XwoTMRKosVtqsKpYKMsBgXuQP7KbvLYYWuHBWDAFk9n0cRUIduim3nJPgYWnpk6qefqYnUGhSGQFWfET21yphYuaDms/tnYocCWgTxmTbkQrB2IISfyN4KZsee4nYLt+ACCdRAy4ifVUnabZ4Y65IPG5noV6uaYJyWa7ZbK32BzRJ5CVqVzsed4dxOWY1yK9P7NVi+iJzXm1PDuY6C2PX0XoXYydxwvGk5cFdNcL8BIWo/wANduLDeIVWiodXBk/dXQpJr6QTKKyG0NjsNzc8f9yWR2zhQB3fEjl9V6bjMNw+6yG19lEmReczkOgW5XKxgXNAN/umxJsICudp7Kcy8X1tA8CVTVWkZwumudmGPprg1PBEJWMJurVIt4ToT/hprQuL2hlc1Pe1NhQcQubU5JwCbujjPotI6eQ6IhbaYA65IIqEcun3TS6f2VK1LwYG8AYMkWAHHiVv2GwXn2Bp99s2uOv48VvmPtKKyI4whNrJr3yhuWQP8c8YXDF+KrnFVleu+fFRjVsxHAo7cSQOKyNLaThALT1sVJG0xxjqnGo0dXFyIgqnxNiXaKMdojU9P0INfGgg38J9k4689Yl4ZxPNWOBoiZOfPgqbZ+JG7HNTqWKAP5AVY113saVlUC0hPNUcVR08YBqfZFdi+GfgjHFZVawGZhNFYcVVPxg8U7+UeAKGVsXquqVzTfbJKzEzkYPBCrnevFx+lQW2Gr7wlGr0wRdVmBdxVuxshQsYXb2w+9vsbebjJajsvgSykAVMq7PaTr5qfhKcCEWie3fDSbiklqbuLLaPupC1SCxduJ0K7EU1Q42g6DEdYv4StXUpqrx+CcZj1yWpWLHnGN2dWc4l0RpPed5LNY/B/DJDrn90Xom09mOYJ+KByg+11jNqYcC5MnmLnnkukrn1FBCkUiYiECqDKNhxOvsthdhIW6polc15XF6ykR0S2Ti3p0TYVEa8Jk8kQDj5JlVhyCWaSoRlHl90jHnJrR4C6ZYZ948svErt8xGnAWHikSpVB8ESZPAZA84t5La4Z0tB5LD4Wl5cfYcStpg/kbaLIqGC5wTwF0LIRntUd+Hnkpr2IcKKF/EnohuwQ4KxKaSOErWmVXDAj9umHBC+XLQq1lNcwcLq1rVT/FA0I6LoIyJ4Z/SVaOphIaATq1WNc8cU44h//Q/eSnmjHJNewZxdGi1AGKeOfQQrClXt6/dRTTv7I1KkhjU2m/Ii2X2PsprDcHz6qDh6f75Ka5yBqzw7FY0nWVLg6pmNFb0UakpoUrDtUakVMpCyKYc4JAE5NRrRCxcGIoCUNRoBLEGrSkKaWpj2p0Vm8fgmEyfp7rJbZotaDLi0cA656ALfbSwznAwY8Fi9rbBfdxdvHwHS5K3zWK882jhYPykjiTPsIUenRHAA8yr/AB+yqhB7rrcYgc5/CqKeGc3Nk+a6ysVOCV1ObzdBZV0UhjrLnXolDkpznprwla4a/wCKa02q2BJ8uP2QalSeXL78Ur3yZ8k0NkrTBGt4IwaGjvZ6AX80wuj5fPU/ZCKkm4eqXuAyHt9uS3NGn3RyA9Fi9j0iaggdeS3VHKFmoJrpTwhVLFK16AIQhuYnhycpIjgkUhzEJzFIMpC5KQhOUtFBXOeAgTCG96lp9WpJ900ulBBRAVDT2tRWiEMI9GnJupDsRwJ/fJc2kpVOnZWguGBVnQJUek1S6I0WKk3DCTdT2iyi0WWUtgQYauDU8tTmtRW4VrU7dStanwoB7ia5qMQmPCQhVxZZ/aDzcFluIifqtFVYFQ7UwIOZPnC3yxWF2uASSBUB6Dpe+So67Xb1mOPAyDwnJajaWBY3eB9TBPTJZmts9pPdqeUmOViu0YqtZmi70JuS4FFdRqVQH3Qzc8lEqzoiU3kIxfYY3Td/TRI5xyTTz/KVpZ0RqdIC7/ADM+wQN+Ms/p9/ok3pzQZVxsquC8CwA0Ex1PErZ4Z1l53g6pDgROmVlvNm1d5gKKUqrTkKJkp4KBVprIBDkRrkItXKA+8mOTA5cFJxahPpoyVSRHUShfAKsCmbqkhfxkZmHUlqcQBdSDpYZTaNAIdF0qZTCqDqbFIpsTKTbo4ssWoakApNBl1GpC6saDVk4k0gjhBYpTGqIQRWhO+GlaOKqYQJ0pQxcUIia4JU0lLNBqtVdi2SLieRVm9QMYDGS3yGI29hWibOAHV4HhmsfiHUw6xM5G0jw3r8Fvtqy6YE9ePksViatMOIewTy9125Yr//2Q=="
              title="green iguana"
            />
            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>
                Min
              </Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              <Button size="small" startIcon={<GroupIcon />}>20</Button>
              <Button size="small" startIcon={<CommentIcon />}>15</Button>
              <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
            </CardActions>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
          }}>

            <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
              <Typography>Card 01</Typography>

            </CardContent>
          </Card>
        </Box>

        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button startIcon={<AddCardIcon />}>Add new card</Button>
          <Tooltip title="Drag to move">
            <DragHandleIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Box>

      </Box>
    </Box>
  )
}

export default BoardContent
