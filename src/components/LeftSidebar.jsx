import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className="font-semibold text-xl mb-7">All Category</h1>

            <Sidebar>
                <Menu>
                    {
                        categories.map(category => 
                            <NavLink to={`/category/${category.category_id}`}>
                                <MenuItem key={category.category_id}>{category.category_name}</MenuItem>
                            </NavLink>
                        )
                    }
                </Menu>
            </Sidebar>
        </div>
    );
};

export default LeftSidebar;