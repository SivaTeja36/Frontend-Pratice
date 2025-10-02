const RestaurantCard = (props) => {
    const { name, address, rating, time } = props;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/c90a815a-cee7-47a8-afb2-5e1eabd8be63_1452.jpg" />
            <h3>{name}</h3>
            <h3>{address}</h3>
            <h3>{rating}</h3>
            <h3>{time}</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard name="Pizza Palace" address="123 Main St" rating="4.5" time="30 mins" />
                <RestaurantCard name="Burger House" address="456 Elm St" rating="4.2" time="25 mins" />
                <RestaurantCard name="Sushi World" address="789 Oak St" rating="4.8" time="40 mins" />
                <RestaurantCard name="Taco Town" address="321 Maple Ave" rating="4.1" time="20 mins" />
                <RestaurantCard name="Pasta Place" address="654 Pine St" rating="4.6" time="35 mins" />
                <RestaurantCard name="Curry Corner" address="987 Cedar Rd" rating="4.7" time="45 mins" />
                <RestaurantCard name="Salad Stop" address="246 Spruce Ln" rating="4.3" time="15 mins" />
                <RestaurantCard name="BBQ Barn" address="135 Willow Dr" rating="4.4" time="50 mins" />
                <RestaurantCard name="Deli Delight" address="864 Birch Blvd" rating="4.0" time="22 mins" />
                <RestaurantCard name="Noodle Nest" address="753 Aspen Ct" rating="4.5" time="28 mins" />
                <RestaurantCard name="Grill Garden" address="159 Poplar Pl" rating="4.2" time="33 mins" />
                <RestaurantCard name="Wrap Works" address="951 Walnut Ave" rating="4.1" time="18 mins" />
                <RestaurantCard name="Soup Spot" address="357 Chestnut Rd" rating="4.6" time="27 mins" />
                <RestaurantCard name="Steak Station" address="258 Redwood St" rating="4.8" time="55 mins" />
                <RestaurantCard name="Vegan Venue" address="654 Cypress Ln" rating="4.9" time="32 mins" />
                <RestaurantCard name="Dessert Den" address="852 Magnolia Dr" rating="4.7" time="12 mins" />
            </div>
        </div>
    )
}

export default Body