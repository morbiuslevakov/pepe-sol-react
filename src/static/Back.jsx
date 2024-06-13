import image from './back.svg';

export const Back = () => {
    return (
        <img style={{transform: "translate(-50%, -50%) translateX(25%)", "z-index":"-1", "position":"fixed", "top":"50%", "left":"50%", "width":"700px", "filter":"blur(10px)", "opacity":"0.5"}} src={image} alt="Background image"/>
    );
}