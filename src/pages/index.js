import React from "react"
import styled from "styled-components"

const Feed = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const FeedItem = styled.li`
  padding-top: 22px;

  &:not(:last-child) {
    padding-bottom: 22px;
  }
`

const IndexPage = ({ data }) => {
  const linkEdges = data.allContentfulLink.edges

  return (
    <Feed>
      {linkEdges &&
        linkEdges.map(({ node }) => (
          <FeedItem key={node.id}>
            <a href={node.url}>{node.title}</a>
          </FeedItem>
        ))}
    </Feed>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allContentfulLink(sort: { fields: [createdAt], order: DESC }) {
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
