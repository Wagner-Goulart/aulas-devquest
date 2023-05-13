import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className='card'>
          {props.children}
        </div >
    )
}

// class Card extends React.Component {
//     render() {
//         return (
//             <div className='card'>
//                 <h3>{this.props.tittle}</h3>
//                 <p>Paragrafo</p>
//             </div>
//         )
//     }
// }

export default Card