import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'dd', body: 'аа'},
        {id: 2, title: 'cc', body: 'бб'},
        {id: 3, title: 'bb', body: 'вв'},
        {id: 4, title: 'aa', body: 'гг'}
    ])

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}} />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title='Список постов' />
                : <h1 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h1>
            }
        </div>
    )
}

export default App;