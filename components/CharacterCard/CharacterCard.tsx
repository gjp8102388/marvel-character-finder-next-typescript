import {Card, CardContent, CardMedia, Typography, CardHeader, IconButton} from "@mui/material";
import {useState} from "react";
import classes from './CharacterCard.module.css'
import CloseIcon from '@mui/icons-material/Close';
interface Props {
    name: string | null;
    description: string | null;
    modified: string;
    thumbnail: {
        path: string | null;
        extension: string | null;
    }

}

const CharacterCard = ({name, description, modified, thumbnail}: Props) => {
    const [open, setOpen] = useState(false);
    const updatedTime = new Date(modified).toLocaleDateString("en-au",{day:"2-digit", month:"short",year:"numeric"});

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
        <Card sx={{minWidth: 350}} onClick={handleClick} style={{cursor:'pointer'}}>
            <CardMedia
                component="img"
                height="350"
                image={`${thumbnail.path}.${thumbnail.extension}`}>
            </CardMedia>
            <CardContent>
                <Typography variant="body1" color="black" style={{fontSize: '14px'}}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
            <div className={open ? classes.display : classes.hidden}>
                    <Card sx={{maxWidth: 320}} >
                        <CardHeader
                        action={
                            <IconButton aria-label="settings" onClick={handleClick} >
                                <CloseIcon />
                            </IconButton>
                        }
                        title={name}
                        subheader={"Updated: "+ updatedTime}
                        />
                        <CardMedia
                            component="img"
                            height="350"
                            image={`${thumbnail.path}.${thumbnail.extension}`}>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body1" color="black" style={{fontSize: '14px'}}>
                                {description? description:"No description available."}
                            </Typography>
                        </CardContent>
                    </Card>
            </div>
        </>
    )
}
export default CharacterCard;
