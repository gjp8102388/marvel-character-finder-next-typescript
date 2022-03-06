import {Card, CardContent, CardMedia, Typography, CardHeader, IconButton} from "@mui/material";
const NotFound = ()=>{
    return(
        <>
            <Card sx={{minWidth: 350}}>
                <CardMedia
                    component="img"
                    height="350"
                    image="NotFound.jpg">
                </CardMedia>
                <CardContent>
                    <Typography variant="body1" color="black" style={{fontSize: '14px'}}>
                        Oops, no character found, please try again.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default NotFound;
