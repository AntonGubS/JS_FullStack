import React from 'react';
import PostItem_Massiv from "./PostItem_Massiv";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            {posts.map(post=>
                <PostItem_Massiv post={post} key ={post.id}/>
            )}
        </div>
    );
};

export default PostList;