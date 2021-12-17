import React from 'react'

const DishdetailComponent = ({selectedDish}) => {
    const renderComments = (selectedDish) => {
        if (selectedDish !== null ) {
            return(
                <main className=''>
                    <h4 >Comments</h4>
                    <ul style={{listStyleType : 'none'}}>
                        {selectedDish.comments.map((comment) => (<li key={comment.id}><br></br>{comment.comment}<br></br><br></br><span > --{comment.author} </span> <span > , {comment.date}</span></li>))}
    
                        
                    </ul>
                </main>        
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
      
    return (
        <div className='col-12 col-md-5'>
            {renderComments(selectedDish)}
        </div>
    )
}

export default DishdetailComponent
