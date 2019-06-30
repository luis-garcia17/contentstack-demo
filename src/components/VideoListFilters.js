    
import React from 'react';

export class VideoListFilters extends React.Component {

  //onSortChange = e => e.target.value === 'oldest' ? this.props.sortByOldest() : this.props.sortByLatest();

//   onShowQtyChange = e => {
//     switch(e.target.value) {
//       case 12:
//         this.props.showQty(12);
//       case 24:
//         this.props.showQty(24);
//       default:
//         this.props.showQty();
//     }
//   } 
  
  render() {
    return (
      <div>
        <strong>Show me the</strong>
        <select
          //value={this.props.filters.sortBy}
          //onChange={this.onSortChange}
        >
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
        </select>

        <select
          //value={this.props.filters.showQty}
          //onChange={this.onShowQtyChange}
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
        <strong>videos</strong>
      </div>
    );
  }
}

export default VideoListFilters;