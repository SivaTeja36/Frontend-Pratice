import { useState } from 'react'
import restaurants from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import Shimmer from './ShimmerCard'

const Body = () => {
    const [listOfRestaurants, updateListOfRestaurants] = useState([])

    setTimeout(() => {
        updateListOfRestaurants(restaurants)
    }, 2000)

    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    } 

    return (
        <div className="body">
            <div className="filter"><button className='filter-btn' onClick={ () => {
                const filteredRestaurantsList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.2);
                updateListOfRestaurants(filteredRestaurantsList)
            }
            }>Top Rated Restaurants</button></div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body