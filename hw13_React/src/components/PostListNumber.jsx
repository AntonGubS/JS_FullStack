import React from 'react';
import PostItem from "./PostItem";
import PostItemNumber from "./PostItemNumber";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostListNumber = ({posts, title, remove}) => {

   if (!posts.length){
       return (
           <h1 style={{textAlign: "center"}}>
               Посты не найдены
           </h1>
       )
   }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index)=>
                    <CSSTransition
                        key ={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItemNumber
                        remove={remove}
                        number={index+1}
                        post={post}
                    />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostListNumber;