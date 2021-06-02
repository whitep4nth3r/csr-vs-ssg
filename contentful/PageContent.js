import ContentfulApi from "@contentful/Api";

export default class ContentfulPageContent extends ContentfulApi {
  /*
   * Get the content for one page
   * param: slug (string)
   */
  static async getBySlug(slug) {
    const query = `
    {
      pageContentCollection(limit: 1, where: {slug: "${slug}"}) {
        items {
          sys {
            id
          }
          heroBanner {
            headline
            subHeading
            internalLink
            externalLink
            ctaText
            image {
              url
              title
              description
              width
              height
            }
          }
          title
          description
          slug
          body {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }`;

    const response = await this.callContentful(query);
    const pageContent = response.data.pageContentCollection.items
      ? response.data.pageContentCollection.items
      : [];

    return pageContent.pop();
  }
}
