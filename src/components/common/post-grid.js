import React, {useState, useMemo, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from 'antd'
import {TagRow} from './'

export default function PostGrid({posts}) {
    const [pageSize, setPageSize] = useState(9) //9 records at a time
    const [current, setCurrent] = useState(1)

    const paginatedPosts = useMemo (()=> {// return current to last pages
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return posts.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts])

    useEffect(() => { //Scrolls up when you use the pagination
        window.scroll({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }, [current, pageSize])//useeffect executes everytime these dependencies are updated

    return (
        <section className="grid-pagination-container">
            <section className="post-grid container">
                {paginatedPosts.map((post, index) => (
                    <div className="post-container">
                        <figure>
                            <Link to={`/post/${post?.id}`}>
                                <img src={require(`../../assets/images/${post.image}`).default} alt={post.image}/>
                            </Link>
                        </figure>
                        <TagRow tags={post.categories} />
                        <h2>{post.title}</h2>
                        <p className="author-text">
                            <span>
                                By: 
                                <Link to={`/authors/${post.author}`} > 
                                    {post.author}
                                </Link>
                            </span>
                            <span>
                                - {post.date}
                            </span>
                        </p>
                        <p className="description-text">
                            {post.description}
                        </p>
                        <Link to={post.link}>Read More...</Link>
                    </div>
                ))}
            </section>
            <Pagination 
                simple 
                showSizeChanger 
                onShowSizeChange = {setPageSize} 
                pageSize = {pageSize} 
                total = {posts.length}
                defaultCurrent = {current}
                onChange = {setCurrent}
            />
        </section>
    )
}