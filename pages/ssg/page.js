import ContentfulBlogPost from "@contentful/BlogPost";
import ContentfulPageContent from "@contentful/PageContent";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";

export default function BlogIndex(props) {
  const { postSummaries, currentPage, totalPages, pageContent } = props;

  return (
    <MainLayout>
      <PageMeta
        title={pageContent.title}
        description={pageContent.description}
        url={Config.pageMeta.blogIndex.url}
      />

      <ContentWrapper>
        <PageContentWrapper>
          <RichTextPageContent richTextBodyField={pageContent.body} />
        </PageContentWrapper>
        <PostList posts={postSummaries} />
      </ContentWrapper>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const postSummaries = await ContentfulBlogPost.getPaginatedSummaries();
  const pageContent = await ContentfulPageContent.getBySlug(Config.pageMeta.blogIndex.slug);

  return {
    props: {
      postSummaries: postSummaries.items,
      currentPage: "1",
      pageContent,
    },
  };
}
