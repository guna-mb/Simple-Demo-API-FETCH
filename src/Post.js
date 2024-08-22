import React from 'react';
import ListItems from './ListItems'; 

const Post = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <ListItems
            key={item.id} 
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Post;
