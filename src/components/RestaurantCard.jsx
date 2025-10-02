import {CDN_URL} from "../utils/constants"

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
                src={CDN_URL + info.cloudinaryImageId} 
            />

            <h3>{info.name}</h3>
            <h3>{info.locality}</h3>
            <h3>{info.avgRatingString}</h3>
            <h3>{sla?.slaString}</h3> 
        </div>
    )
}

export default RestaurantCard;