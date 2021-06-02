import ContentfulBlogPost from "@contentful/BlogPost";
import ContentfulPageContent from "@contentful/PageContent";
import { useEffect, useState } from "react";
import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import PostList from "@components/PostList";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import HeroBanner from "@components/HeroBanner";

export default function BlogIndex() {
  const [postSummaries, setPostSummaries] = useState([]);
  const [pageContent, setPageContent] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    (async function getData() {
      console.log("RUNNING");
      const _postSummaries = await ContentfulBlogPost.getPaginatedSummaries(1);
      setPostSummaries(_postSummaries);

      const _pageContent = await ContentfulPageContent.getBySlug(Config.pageMeta.blogIndex.slug);
      setPageContent(_pageContent);

      const _totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize);

      setTotalPages(_totalPages);
    })();

    return () => {
      //
    };
  }, [setPageContent, setPostSummaries]);

  return (
    <MainLayout>
      {pageContent && (
        <PageMeta
          title={pageContent.title}
          description={pageContent.description}
          url={Config.pageMeta.blogIndex.url}
        />
      )}

      <ContentWrapper>
        {pageContent && (
          <PageContentWrapper>
            <RichTextPageContent richTextBodyField={pageContent.body} />
          </PageContentWrapper>
        )}

        {postSummaries.length > 0 && (
          <PostList posts={postSummaries} totalPages={totalPages} currentPage={currentPage} />
        )}
      </ContentWrapper>
    </MainLayout>
  );
}
