import styles from "./CharacterCard.module.scss"
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";
import {Typography} from "@mui/material";
import {useState} from "react";
interface Props{
    name:string | null;
    description: string | null;
    modified: string;
    thumbnail: {
        path:string | null;
        extension: string | null;
    }

}
const CharacterCard = ({name, description,modified,thumbnail}:Props) => {
    const[open, setOpen] = useState(false);
    const handleClick =()=>{
        setOpen(!open)
        alert({description})
    }
return(
    <Card sx={{minWidth: 350}} onClick={handleClick} >
        <CardMedia
            component="img"
            height="350"
            image={`${thumbnail.path}.${thumbnail.extension}`}>
        </CardMedia>
        <CardContent>
            <Typography variant="body1" color="text.secondary" style={{fontSize:'14px'}}>
                {name}
            </Typography>
        </CardContent>
    </Card>
)
}
export default CharacterCard;
