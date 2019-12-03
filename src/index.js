import { HeaderComponent } from './components/header.component';
import { NavigationComponent } from './components/navigation.component';
import { CreateComponent } from './components/create.component';
import { FavoriteComponent } from './components/favorite.component';
import { PostsComponent } from './components/posts.component';
import { Loader } from './components/loader.component';

const header = new HeaderComponent('header'),
        navigation = new NavigationComponent('navigation'),
        loader = new Loader('loader'),
        posts = new PostsComponent('posts', {loader}),
        favorite = new FavoriteComponent('favorite', {loader}),
        create = new CreateComponent('create');

navigation.registerTabs([
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite},
    {name: 'create', component: create}
])        
