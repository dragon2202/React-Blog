import React, {useEffect, useRef, useState} from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';//apollo/client
import {Button} from 'antd';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Helmet from 'react-helmet';

import {GET_POST_QUERY} from '../queries/posts';

const options = {
    theme: 'snow'
}

export default function PostViewer() {
    const contentContainer = useRef(null)
    const [editorEl, setEditorEl] = useState(null)
    const {id} = useParams()
    const match = useRouteMatch()

    let history = useHistory()
    // eslint-disable-next-line
    const {data, error, loading} = useQuery(GET_POST_QUERY, {
        variables: {
            id
        },
        onCompleted: ({post}) => {
            if(post.text) {
                const delta = JSON.parse(post.text)
                editorEl.setContents(delta)
            }
        }
    })

    const editPost = () => history.push({
        pathname: '/edit-post',
        state: {
            data
        }
    })

    useEffect(() => {
        setEditorEl(new Quill(contentContainer.current, options))
    }, [])

    return (
        <article className="post-viewer-container">
            <Helmet>
                <title>{data?.post?.title}</title>
                <meta property="og:image" content={data?.post?.image}/>
                <meta property="og:title" content={data?.post?.title}/>
                <meta property="og:url" content={match.url}/>
                <meta property="og:type" content="article"/>
                <meta property="og:description" content={data?.post?.description}/>
            </Helmet>
            <Button type="primary" onClick={editPost}>Edit Post</Button>
            <section className="post-intro-container">
                {
                    data?.post?.bg_type === '2' ?
                        (
                            <section className="iframe-container">
                                {
                                    data?.post?.bg_src &&
                                    <iframe title="background-video" src={data?.post?.bg_src} fraeborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                                }
                            </section>
                        )
                        :
                        (
                            <figure>
                                <img src={data?.post?.bg_src} alt="post-background" />
                            </figure>
                        )
                }
            </section>
            <section className="post-title-container">
                    <div className="title-wrapper">
                        <h1>{data?.post?.title}</h1>
                        <p className="flex flex-column">
                            <span>
                                { 
                                    data?.post?.author && `Author: ${data?.post?.author}`
                                }
                            </span>
                            <span>
                                Last Updated:
                                {
                                    data?.post?.updated_at &&
                                        new Date(parseInt(data?.post?.updated_at)).toLocaleDateString()
                                }
                            </span>
                        </p>
                    </div>
            </section>
            <section className="post-content-container">
                <section ref={contentContainer}></section>
            </section>
        </article>
    )
}