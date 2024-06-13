import image from './dev.jpg';

export const Avatar = () => {
    return (
        <img style={{"background":"none", "float":"left", "display":"block", "marginRight":"auto", "width":"100px"}} src={image} alt="Profile picture"/>
    );
}