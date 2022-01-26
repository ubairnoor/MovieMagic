import Pagination from '@mui/material/Pagination';
import { makeStyles} from '@mui/styles';
import {Container} from'@material-ui/core';
const useStyles = makeStyles({
    ul: {
        "& .MuiPaginationItem-root": {
          color: "#fff"
        }
      },
   

})
const CustomPagination = ({setPage,numOfPages=10}) =>{

    const handlePageChange = (page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    const classes = useStyles()
    return (
       
<Container mt={10}>
<Pagination
 variant="outlined" 
  padding={10} margin={5}  
  color="primary" shape="rounded" 
  classes={{  ul:classes.ul}} 
  hideNextButton hidePrevButton  
  count={numOfPages} 
  onChange={(e)=>handlePageChange(e.target.textContent)} />
</Container>


    )
}

export default CustomPagination