import React from 'react'
import './Book.css'

const Book = (props) =>{
    const { image, book, author} = props
    return(

        <div className ='card'>
            <img src={image} alt='to be disp'></img>
            <h2>{book}</h2>
            <h3>{author}</h3>
          

        </div>
    )
}

export default Book