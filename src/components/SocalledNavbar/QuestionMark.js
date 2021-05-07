import React from 'react';
import { questionMarkColor, backgroundLinkShapeColor } from './colorPalette'

const QuestionMark = () => {
    return ( 
                            
    <svg  viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill={backgroundLinkShapeColor} />
         <text x="50%" y="50%" textAnchor="middle" fill={ questionMarkColor }  fontSize="50px"  dy=".3em">?</text>
            ?
    </svg>
     );
}
 
// onClick={() => dispatch(toggleMoreAbout())}

export default QuestionMark;