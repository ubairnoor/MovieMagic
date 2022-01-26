import { Box, Container, Grid, Typography } from '@material-ui/core';
import axios from "axios";
import { useEffect, useState } from 'react';
import SingleContent from  '../../component/SingleContent'
const Trending = ()=>{
    const [content , setContent] = useState([])
   const fetchTrending =  async()=>{
       const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.React_app_api_key}`
       )
       console.log(data.results)
      setContent(data.results)
    }
    useEffect(()=>{
fetchTrending();
    },[])
    return (
    <Box mb={2}>
           <Container maxWidth="md" >
           <Grid container>
                    <Box mt>
                        <Grid item>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="h4"
                            >
                                Trending
                            </Typography>
                        </Grid>
                    </Box>
                </Grid> 
                <Grid container spacing={4}>
                {content && content.map((content) => 
                <SingleContent key={content.id}
                id={content.id}
                 media={content.media_type}
                 title = {content.title || content.name}
                 path = {content.poster_path}
                 vote= {content.vote_average}
                 date= {content.first_air_date || content.release_date}
                 poster={content.backdrop_path}
                />)}
                <SingleContent/>
                </Grid>
       </Container>
    </Box>
    )
}
export default Trending