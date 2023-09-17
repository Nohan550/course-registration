import "./cart.css";
const Carts = ({selectCourse,remaining,total,totalPrice}) => {
    
    
    return (
        <div className="cart-container">
            <div>
                
            <h1 className="remaining">Credit Hour Remaining hr {remaining}</h1>
            <h1 className="course-container">Course Name</h1>
            <p className="course-title">
            {
                selectCourse.map( (cart) => <li>{cart.title} </li> )
            }
                </p>
            
            <h2 className="total-credit">Total Credit Hour : {total} </h2>
            <h1 className="total-price">Total Price : {totalPrice}  USD</h1>
        </div>
            </div>
    );
};

export default Carts;