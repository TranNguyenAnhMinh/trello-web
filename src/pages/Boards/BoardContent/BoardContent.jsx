import Box from '@mui/material/Box'
import ListColunms from './ListColumns/ListColunms'
function BoardContent({ board }) {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.trelloCustom.boardContentHeight,
      display: 'flex',
      p: '10px 0'
    }}>
      <ListColunms columns={board?.columns} />
    </Box>
  )
}

export default BoardContent
