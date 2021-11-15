import { makeStyles } from '@material-ui/core/styles'

export default makeStyles( () => ( {
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  removeBtn: {
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
} ) )