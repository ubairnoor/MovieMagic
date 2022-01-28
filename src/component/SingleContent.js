import { Card, CardActionArea,CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import {Tooltip} from  '@mui/material';
import {img_300} from "../config/config"
import { Badge } from '@mui/material';
const SingleContent = ({id,media,title,path,vote,date,poster}) =>{
    let unavailable = img_300
    return (
       
               <Grid item  md={4} sm={6} xs={12} lg={4} direction="row" justifyContent="space-between">
                   <Card>
                       <CardActionArea>
                           <CardMedia component="img" image={`${poster}`?`${img_300}/${poster}`:`${unavailable}`} />
                       <CardContent>
                           <Typography noWrap="true" component="h4" variant="h4" align="center"  > {title}</Typography>
                       </CardContent>
                       </CardActionArea>
                       <Divider/>
                       <CardActions>
                           <Grid container
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center">
                                        <Tooltip  arrow
                                            title="Media Type">
                                        <Typography component="subtitle1" variant="subtitle1">{media === "tv"?"Tv Series": "Movie"}</Typography>
                                        </Tooltip>
                                        <Tooltip  arrow
                                            title="Date">
                                        <Typography component="subtitle1" variant="subtitle1"> {date}</Typography>
                                        </Tooltip>
                                        <Badge  badgeContent={vote} color={vote>7?'error':'info'} variant='standard' overlap='rectangular' ></Badge>
                           </Grid>
                       </CardActions>
                   </Card>
               </Grid>
               

       
    )
}

export default SingleContent