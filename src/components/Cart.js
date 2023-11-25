import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const itemList = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(clearCart());
    }
    
    return (
        <div className="m-4 p-4">
            <h1 className="text-center font-bold  text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={itemList} removeButton={true} />
                {itemList.length == 0 ? <h1 className="text-center font-bold">Please Add Item Into Cart</h1> : <button className="p-2 bg-teal-400 rounded-lg m-auto" onClick={()=>handleClick()}>
                    Clear Cart
                </button>}
            </div>
        </div>
    );
};
export default Cart;
