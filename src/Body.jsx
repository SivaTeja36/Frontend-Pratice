const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>

            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/c90a815a-cee7-47a8-afb2-5e1eabd8be63_1452.jpg" />
            <h3>Megna Food</h3>
            <h3>Biryani, North India, Asia</h3>
            <h3>4.4 Stars</h3>
            <h3>38 minutes</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container"></div>
            <RestaurantCard/>
        </div>
    )
}

export default Body