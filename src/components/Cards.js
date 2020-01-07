import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


export class NameCard extends Component{
    render(){
        return(
            <div>
                <Card elevation ={1}>
                <h1> Hello </h1>
                </Card>
            </div>
        )
    }
}