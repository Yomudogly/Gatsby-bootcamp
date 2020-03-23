import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'


const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                fields:publishedDate,
                order:DESC
                }
        ) {
            edges {
                node {
                    title
                    publishedDate (
                    formatString: "MMMM Do, YYYY"
                    )
                    slug
                }
            }
        }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <h1>My blog</h1>
            <ol className={blogStyles.posts}>{data.allContentfulBlogPost.edges.map( element => {
                 return (
                    <li className={blogStyles.post}>
                    <Link to={`/blog/${element.node.slug}`}>
                        <h2>{element.node.title}</h2>
                        <p>{element.node.publishedDate}</p>
                    </Link>
                    </li>
                 )
             })}</ol>
        </Layout>
    )
}

export default BlogPage