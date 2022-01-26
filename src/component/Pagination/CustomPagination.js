import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
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
       
<div  style={{ width:"100%",
display:"flex",
justifyContent:"center",
marginTop:10,
marginBottom:2}}>
<Pagination
 variant="outlined" 
  padding={10} margin={5}  
  color="primary" shape="rounded" 
  classes={{  ul:classes.ul}} 
  hideNextButton hidePrevButton  
  count={numOfPages} 
  onChange={(e)=>handlePageChange(e.target.textContent)} />
</div>


    )
}

export default CustomPagination