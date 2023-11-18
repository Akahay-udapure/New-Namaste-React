import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div
                    key={item?.card?.info?.id}
                    className="py-6 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className="w-9/12">
                        <div>
                            <span className="font-bold">
                                {item?.card?.info?.name}
                            </span>
                            <span className="font-bold">
                                - ₹{
                                    item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100
                                }
                            </span>
                        </div>
                        <p className="text-xs py-2 text-slate-400">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12">
                       
                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg rounded-lg text-green-500 font-bold w-20">
                                Add +
                            </button>
                        </div>
                        <img
                            src={CDN_URL + item?.card?.info?.imageId}
                            alt=""
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
