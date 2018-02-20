import React from "react"
import styled from "styled-components"

const Feed = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const FeedItem = styled.li``

const IndexPage = ({ data }) => {
  const linkEdges = data.allContentfulLink.edges

  return (
    <Feed className="flex flex-column">
      {linkEdges &&
        linkEdges.map(({ node }, i) => (
          <FeedItem key={node.id}>
            <a className="small-caps" href={node.url}>
              {node.title}
            </a>
            {i < 9 ? <hr /> : null}
          </FeedItem>
        ))}
    </Feed>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulLink(limit: 10, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          createdAt
          title
          url
        }
      }
    }
  }
`
