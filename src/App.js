import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'C++', body: 'Description'},
        {id: 3, title: 'R', body: 'Description'},
        {id: 4, title: 'Python', body: 'Description'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем post из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}} />
            <MySelect
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