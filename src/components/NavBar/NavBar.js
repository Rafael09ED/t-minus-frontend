import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const LinkForward = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const addresses = [
    {url: "about", name:"About"},
    {url: "list", name:"Countdowns"},
    {url: "create", name:"Create"}
]

const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(1, 2),
    },
}));


function generateNavlink(data){
    return (<Link component={LinkForward} color="inherit" to={data.url}>{data.name}</Link>)
}

function generateAllNavlinks(){
    const tempNavlinks = []
    for(var i = 0; i < addresses.length; i++){
        const address = addresses[i];
        tempNavlinks.push(generateNavlink(address));
    }
    return tempNavlinks;
}

function NavBar(props) {
    const classes = useStyles();
    const [breadcrumbs, setBreadcrumbs] = React.useState([]);

    React.useEffect(()=> {
        var tempBreadCrumbs = [];
        for(var i = 0; i < addresses.length; i++){
            const address = addresses[i];
            if (props.match.params.path === address.url)
                tempBreadCrumbs.push(generateNavlink(address));
        }
        setBreadcrumbs(tempBreadCrumbs);
    }, [props.match.params.path]);

    if (props.match.params.path === '-') return null

    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>     
            <Paper elevation={0} className={classes.paper} >
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link component={LinkForward} color="inherit" to="/">
                        t-min.us
                    </Link>
                    {breadcrumbs}
                </Breadcrumbs>
            </Paper>
            <nav>
                <Paper elevation={0} className={classes.paper} >
                    <Breadcrumbs separator={<div></div>} aria-label="breadcrumb">
                        {generateAllNavlinks()}
                    </Breadcrumbs>
                </Paper>
            </nav>
        </header>
    );
}

export default NavBar;
