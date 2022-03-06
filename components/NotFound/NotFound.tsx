import {Card, CardContent, CardMedia, Typography, CardHeader, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface Props{
    name:string;
}
const NotFound = ({name}:Props)=>{
    return(
        <>
        <Typography variant="h6" color="inherit" noWrap style={{marginTop:'30px'}}>
            Oops, this character is still a mystery, try again.
        </Typography>
            <Card sx={{minWidth: 350}} style={{cursor:'pointer'}}>
                <CardMedia
                    component="img"
                    height="350"
                    image="NotFound.jpg">
                </CardMedia>
                <CardContent>
                    <Typography variant="body1" color="black" style={{fontSize: '14px'}}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default NotFound;
