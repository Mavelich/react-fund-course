import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;