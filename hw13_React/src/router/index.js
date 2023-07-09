
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes =[
    {path:'/posts', component: Posts, exact: true},
    {path:'/posts/:id', component: PostIdPage, exact: true},
]
