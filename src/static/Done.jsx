import image from './done-green.png';

export const Done = () => {
    return (
        <img style={{"background":"none", "float":"right", "display":"block", "marginLeft":"auto", "width":"25px"}} src={image} alt="Completed task"/>
    );
}