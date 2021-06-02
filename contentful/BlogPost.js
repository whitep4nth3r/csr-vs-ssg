import ContentfulApi from "@contentful/Api";

export default class ContentfulBlogPost extends ContentfulApi {
  /*
   * Get post summaries for blog index page
   * param: page (number)
   */
  static async getPaginatedSummaries() {
    const query = `{
        blogPostCollection(limit: 105, order: date_DESC) {
          total
          items {
            sys {
              id
            }
            date
            title
            slug
            excerpt
            topicsCollection {
              items {
                sys {
                  id  
                }
                name
                slug
              }
            }
            readingTime
            featuredImage {
              url
              description
              height
              width
            }
          }
        }
      }`;

    const response = await this.callContentful(query);

    const paginatedPostSummaries = response.data.blogPostCollection
      ? response.data.blogPostCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
  }
}
