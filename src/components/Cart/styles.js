import { makeStyles } from '@material-ui/core/styles'

export default makeStyles( ( theme ) => ( {
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
    fontWeight: '500',
    color: '#000C14',
    fontFamily: 'Merienda, cursive',
  },
  titles: {
    color: '#000C14',
  },
  emptyButton: {
    marginBottom: '5px',
    fontWeight: 'bold',
    padding: '10px',
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
    [ theme.breakpoints.down( 'xs' ) ]: {
      marginBottom: '5px',
    },
    [ theme.breakpoints.up( 'xs' ) ]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    fontWeight: 'bold',
    padding: '10px',
    marginBottom: '5px',
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
  link: {
    textDecoration: 'none',
    display: 'flex',
    marginTop: '10px',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
} ) )