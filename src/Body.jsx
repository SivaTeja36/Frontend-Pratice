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
                <RestaurantCard restaurant={restaurants[0]} />
                <RestaurantCard restaurant={restaurants[1]} />
                <RestaurantCard restaurant={restaurants[2]} />
                <RestaurantCard restaurant={restaurants[3]} />
                <RestaurantCard restaurant={restaurants[4]} />
                <RestaurantCard restaurant={restaurants[5]} />
                <RestaurantCard restaurant={restaurants[6]} />
                <RestaurantCard restaurant={restaurants[7]} />
                <RestaurantCard restaurant={restaurants[8]} />
            </div>
        </div>
    )
}

export default Body