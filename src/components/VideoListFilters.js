    
import React from 'react';

const VideoListFilters = ({handleQuantity, handleOrderByLatest, handleOrderByOldest}) => {  
    return (
      <div>
        <strong>Show me the</strong>
        <select
          onChange={e => e.target.value === 'latest' ? handleOrderByLatest() : handleOrderByOldest()}
        >
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
        </select>

        <select
          onChange={e => handleQuantity(e.target.value)}
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
        <strong>videos</strong>
      </div>
    )
  }

export default VideoListFilters;