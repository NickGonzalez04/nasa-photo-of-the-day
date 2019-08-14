import React from 'react';

function PhotoCard(props) {
    console.log(props);
    return (
        <div>
    <h1>{props.title}</h1>
    <img className="daily-photo" src={props.url}/>
    <div>{props.date}</div>
    <p>
        {props.explanation}
    </p>
    </div>
    );
}
export default PhotoCard;