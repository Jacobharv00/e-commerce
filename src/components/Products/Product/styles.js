import { makeStyles } from '@material-ui/core/styles'

export default makeStyles( () => ( {
  root: {
    maxWidth: '100%',
    borderRadius: '20px',
  },
  media: {
    imageRendering: 'auto',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  shoppingCart: {
    color: '#2D2B2A',
  },
} ) )