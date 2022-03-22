import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '*', component: NotFoundPage, exact: true},
]