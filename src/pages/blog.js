import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'


const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }   
        }
    `)

    return (
        <Layout>
            <h1>My blog</h1>
            <ol className={blogStyles.posts}>{data.allMarkdownRemark.edges.map( element => {
                 return (
                    <li className={blogStyles.post}>
                    <Link to={`/blog/${element.node.fields.slug}`}>
                        <h2>{element.node.frontmatter.title}</h2>
                        <p>{element.node.frontmatter.date}</p>
                    </Link>
                    </li>
                 )
             })}</ol>
        </Layout>
    )
}

export default BlogPage