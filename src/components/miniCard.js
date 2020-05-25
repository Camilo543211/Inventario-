import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    
    width:430,

    margin: 8,
  },
  media: {
    height: 300,
  },


});

export default function Mini(props) {
  const classes = useStyles();

  return (
    <div className="">


     
       
        
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.img}
                
                

              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
              <Link  to ={"/zapatos"}>REGISTRAR</Link>
        </Button>
            </CardActions>
          </Card>
        
   
     
    </div>

  );
}
