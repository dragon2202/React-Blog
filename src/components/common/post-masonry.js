import React from 'react'
import {MasonryPost} from './'

export default function PostMasonry ({posts, columns, tagsontop}) {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            { posts.map ((post, index) =>
                <MasonryPost {...{post, index, tagsontop, key: index}} />
            )}
        </section>
    )
}