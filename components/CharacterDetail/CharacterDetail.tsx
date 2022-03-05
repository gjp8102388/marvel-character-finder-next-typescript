interface Props{
name:string;
description:string;
modified:string;
thumbnail:string;
imageExtension:string;
}
const CharacterDetail = ({ name,description,modified,thumbnail,imageExtension }: Props) => {
return(
    <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <p>{modified}</p>
        <img src={`${thumbnail}.${imageExtension}`}/>
    </div>
)
}
export default CharacterDetail;
