import { makeStyles } from '@material-ui/core/styles'

export default makeStyles( () => ( {
  back: {
    fontWeight: 'bold',
    minWidth: '150px',
    color: '#ECEAEC',
    backgroundColor: '#D36135',
    borderRadius: '50px',
    '&:hover': {
      cursor: 'pointer',
      borderRadius: '50px',
      backgroundColor: '#D36135',
      color: '#000C14',
    },
  },
  next: {
    fontWeight: 'bold',
    minWidth: '150px',
    color: '#ECEAEC',
    backgroundColor: '#74B4BE',
    borderRadius: '50px',
    '&:hover': {
      cursor: 'pointer',
      borderRadius: '50px',
      backgroundColor: '#74B4BE',
      color: '#000C14',
    },
  },
  pay: {
    fontWeight: 'bold',
    minWidth: '150px',
    color: '#ECEAEC',
    backgroundColor: '#74B4BE',
    borderRadius: '50px',
    '&:hover': {
      cursor: 'pointer',
      borderRadius: '50px',
      backgroundColor: '#74B4BE',
      color: '#000C14',
    },
  },

} ) )