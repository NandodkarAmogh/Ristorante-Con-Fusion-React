import React from 'react'
    
    const renderComments = (Dish) => {
        if (Dish !== null ) {
            const data = []

                for(let comment in Dish) {
                    data.push(Dish[comment])
                }
            return(
                <main>
                    <h3 style={{textAlign : 'center'}} >Comments</h3>
                    <ul style={{listStyleType : 'none'}}>
                        {data.map((comment) => (<li key={comment.id}><br></br>{comment.comment}<br></br><br></br><span > --{comment.author} </span> <span > , {comment.date}</span></li>))}
                    </ul>
                </main>        
            )
        }
        else {
            return(
                <div>Please select a dish</div>
            )
        }
    }


const DishdetailComponent = ({Dish}) => {
    // const renderComments = (Dish) => {
    //     if (Dish !== null ) {
    //         const data = []

    //             for(let comment in Dish) {
    //                 data.push(Dish[comment])
    //             }
    //         return(
    //             <main className=''>
    //                 <h4 >Comments</h4>
    //                 <ul style={{listStyleType : 'none'}}>
    //                     {data.map((comment) => (<li key={comment.id}><br></br>{comment.comment}<br></br><br></br><span > --{comment.author} </span> <span > , {comment.date}</span></li>))}
    
                        
    //                 </ul>
    //             </main>        
    //         )
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         )
    //     }
    // }
      
    return (
        <div className='col-12 col-md-5 m-1'>
            {renderComments(Dish)}
            {/* <RenderComments Dish = {Dish} /> */}
        </div>
    )
}



export default DishdetailComponent;
