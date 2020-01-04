import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
}));


export class MenuButton extends Component{
    render(){
        return(
            <div>
                <Button
                variant="outlined"
                color="secondary"
                className={useStyles.button}
                startIcon={<MenuIcon />}
                />
            </div>
        )
    }
}