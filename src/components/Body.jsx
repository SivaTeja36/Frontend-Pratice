import { useState } from 'react'
import restaurants from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import Shimmer from './ShimmerCard'

const Body = () => {
    const [listOfRestaurants, updateListOfRestaurants] = useState(restaurants)
    const [filterOfRestaurants, updatedFilterOfRestaurants] = useState(restaurants)
    const [searchText, udpateSearchText] = useState("")

    // setTimeout(() => {
    //     updateListOfRestaurants(restaurants)
    // }, 1000)

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <input type="text" className='search-box' value={searchText} onChange={(e) => {
                    udpateSearchText(e.target.value)
                }}/>
                <button onClick={() => {
                    const filteredRestaurantsList = listOfRestaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase()?.includes(searchText.toLowerCase()))
                    updatedFilterOfRestaurants(filteredRestaurantsList)
                }}>Search</button>
                <button className='filter-btn' onClick={ () => {
                const filteredRestaurantsList = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.2);
                updatedFilterOfRestaurants(filteredRestaurantsList)
            }
            }>Top Rated Restaurants</button></div>
            <div className="res-container">
                {
                    filterOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body