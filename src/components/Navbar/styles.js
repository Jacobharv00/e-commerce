import { makeStyles, alpha } from '@material-ui/core/styles'

const drawerWidth = 0

export default makeStyles( ( theme ) => ( {
  appBar: {
    boxShadow: '5px',
    color: '#2D2B2A',
    backgroundColor: '#F8F8F8',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    [ theme.breakpoints.up( 'sm' ) ]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    fontSize: '2.5rem',
    fontFamily: 'Merienda, cursive',
    '&:hover': {
      color: '#D36135',
    },
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing( 2 ),
    [ theme.breakpoints.up( 'sm' ) ]: {
      display: 'none',
    },
  },
  button: {
    backgroundColor: 'none',
    '&:hover': {
      cursor: 'pointer',
      borderRadius: '50px',
      backgroundColor: '#5F634F',
      color: '#FFD447',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha( theme.palette.common.white, 0.15 ),
    '&:hover': {
      backgroundColor: alpha( theme.palette.common.white, 0.25 ),
    },
    marginRight: theme.spacing( 2 ),
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing( 0, 2 ),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing( 1, 1, 1, 0 ),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing( 4 )}px)`,
    transition: theme.transitions.create( 'width' ),
    width: '100%',
    [ theme.breakpoints.up( 'md' ) ]: {
      width: '20ch',
    },
  },
} ) )