
const Carts = ({selectCourse,remaining,total,totalPrice}) => {
    
    
    return (
        <div className="bg-white rounded-xl text-lg font-bold px-7 h-fit w-80">
            <div>
                {/* <h1>cart ; {selectCourse.length}</h1> */}
            <h1 className="text-blue-500 pb-4 border-b  pt-6 ">Credit Hour Remaining hr {remaining}</h1>
            <h1 className="text-xl font-bold py-5 pr-12">Course Name</h1>
            <p className="py-4 border-b text-base font-normal">
            {
                selectCourse.map( (cart) => <li>{cart.title}</li> )
            }
                </p>
            
            <h2 className="text-base font-medium py-4 pr-14 border-b">Total Credit Hour : {total} </h2>
            <h1 className="text-base font-semibold py-5 pr-14">Total Price : {totalPrice}  USD</h1>
        </div>
            </div>
    );
};

export default Carts;