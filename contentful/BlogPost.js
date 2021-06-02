import ContentfulApi from "@contentful/Api";
import { Config } from "@utils/Config";

export default class ContentfulBlogPost extends ContentfulApi {
  /*
   * Get post summaries for blog index page
   * param: page (number)
   */
  static async getPaginatedSummaries(page) {
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    const query = `{
        blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
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
            author {
              name
              description
              image {
                url
              }
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
