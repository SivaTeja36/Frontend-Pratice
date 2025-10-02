import {restaurants} from './MockData'

const RestaurantCard = ({ restaurant }) => {

    if (!restaurant || !restaurant.info || restaurant.sla) {
        return <div>Restaurant data unavailable</div>;
    }

    const { info, sla } = restaurant; 
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo" 
                alt="res-logo" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} 
            />

            <h3>{info.name}</h3>
            <h3>{info.locality}</h3>
            <h3>{info.avgRatingString}</h3>
            <h3>{sla?.slaString}</h3> 
        </div>
    )
}

//---

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body