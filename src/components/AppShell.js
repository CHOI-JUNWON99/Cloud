//Appshell.js
import React from 'react';
import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const styles = {
    root:{
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'auto'
    }
}

class AppShell extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        };
    }
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render(){
        const{ classes } = this.props;
        return(
            <div>
                <div className={classes.root}>
                     <AppBar position="static">
                     <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                     <MenuIcon/>
                     </IconButton>
                     </AppBar>
                     <Drawer open={this.state.toggle}>
                     <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to = "/">
                            홈 화면
                        </Link>
                     </MenuItem>
                     <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to = "/texts">
                            텍스트 관리
                        </Link>
                     </MenuItem>
                     <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to = "/words">
                            단어 관리
                        </Link>
                     </MenuItem>
                     <MenuItem onClick={this.handleDrawerToggle}>
                        <Link component={RouterLink} to = "/profile">
                            마이페이지
                        </Link>
                     </MenuItem>
                     </Drawer>
                </div>
                <div id = "content" style={{margin: 'auto', marginTop: '20px'}}>
                     {this.props.children}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AppShell);