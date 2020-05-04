import React, { Component } from 'react'
import Helmet from 'react-helmet'
import GitHubButton from 'react-github-btn'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import podcasts from '../../data/podcasts'
import tania from '../../content/images/profile.jpg'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`Freelancer Harian Lepas Bosku :V`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>{`Hola, saya Tiyo 👋`} </h1>
              <p>
                Anggap aja Freelancer harian lepas 😁
                Blog ini maunya di isi tulisan, opini dan dokumentasi
                pribadi biar gak asik kelupaan, tapi promo aja di banyakin kali ya 😎.
              </p>
               
            </div>
            <div className="newsletter-section">
              <img src={tania} className="newsletter-avatar" alt="Tiyo" />
              <div>
                <h3>Apa sih ini ?</h3>
                <p>
                  Kadang pas lagi baik saya bagi bagi produk premium gratis, mau?
                </p>
                <a className="button" href="https://simimin.substack.com">
                  Mau lah 😂
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <section className="section">
            <h2>
              Tulisan Terbaru
              <Link to="/blog" className="view-all">
                Lihat Semuanya
              </Link>
            </h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          <section className="section">
            <h2>
              Populer
              <Link to="/categories/popular" className="view-all">
                Lihat Semuanya
              </Link>
            </h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>

          <section className="section">
            <h2>Mau Bikin Website Apa ?</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Produk Bagus</h2>
            <SimpleListing simple data={podcasts} />
          </section>

          <section className="section">
            <h2>Hosting Mana?</h2>
            <SimpleListing simple data={speaking} />
          </section>
        </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 5
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 9
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
