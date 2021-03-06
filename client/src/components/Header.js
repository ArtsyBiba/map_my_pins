import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExploreIcon from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Signout from '../components/Auth/Signout';
import Context from '../context';

const Header = ({ classes }) => {
	const mobileSize = useMediaQuery('(max-width: 650px)');
	const { state } = useContext(Context);
	const { currentUser } = state;

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					{/* title / logo */}
					<div className={classes.grow}>
						<ExploreIcon className={classes.icon} />
						<Typography
							className={mobileSize ? classes.mobile : ''}
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
						>
							Map My Pins
						</Typography>
					</div>

					{/* current user info */}
					{currentUser && (
						<div className={classes.grow}>
							<img className={classes.picture} src={currentUser.picture} alt={currentUser.name} />
							<Typography
								className={mobileSize ? classes.mobile : ''}
								variant="h6"
								color="inherit"
								noWrap
							>
								{currentUser.name}
							</Typography>
						</div>
					)}

					{/* sign out button */}
					<Signout />
				</Toolbar>
			</AppBar>
		</div>
	);
};

const styles = (theme) => ({
	root    : {
		flexGrow : 1
	},
	grow    : {
		flexGrow   : 1,
		display    : 'flex',
		alignItems : 'center'
	},
	icon    : {
		marginRight : theme.spacing.unit,
		color       : 'white',
		fontSize    : 45
	},
	mobile  : {
		display : 'none'
	},
	picture : {
		height       : '40px',
		borderRadius : '90%',
		marginRight  : theme.spacing.unit * 2
	}
});

export default withStyles(styles)(Header);
