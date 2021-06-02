import ReactMarkdown from "react-markdown";
import PublishedDateAndReadingTime from "@components/PublishedDateAndReadingTime";
import Topics from "@components/Topics";
import ContentListStyles from "@styles/ContentList.module.css";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
import { Config } from "@utils/Config";

export default function PostList({ posts }) {
  return (
    <>
      <ol className={ContentListStyles.contentList}>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article className={ContentListStyles.contentList__post}>
              <PublishedDateAndReadingTime date={post.date} readingTime={post.readingTime} />

              <a
                href={`https://whitep4nth3r.com/${Config.pageMeta.blogIndex.slug}/${post.slug}`}
                rel="noopener nofollow"
                className={ContentListStyles.contentList__titleLink}
                target="_blank"
              >
                <h2 className={ContentListStyles.contentList__title}>{post.title}</h2>
              </a>

              <Topics topics={post.topicsCollection.items} />
              <div className={ContentListStyles.contentList__excerpt}>
                <ReactMarkdown
                  children={post.excerpt}
                  renderers={ReactMarkdownRenderers(post.excerpt)}
                />
              </div>

              <a
                href={`https://whitep4nth3r.com/${Config.pageMeta.blogIndex.slug}/${post.slug}`}
                className={ContentListStyles.contentList__readMoreLink}
                aria-label={`Read ${post.title}`}
                rel="noopener nofollow"
                target="_blank"
              >
                Read more →
              </a>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
