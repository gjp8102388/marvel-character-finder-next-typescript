import {useContext} from "react";
interface Props{
    characterList: any,
}
const CharacterList = (characterList:Props)=> {
    return(
        <div>
            {characterList.characterList.length}
        </div>
    )

}
export default CharacterList;
