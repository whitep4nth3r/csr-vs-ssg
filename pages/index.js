import PageMeta from "@components/PageMeta";
import MainLayout from "@layouts/main";
import Styles from "@styles/Typography.module.css";
import ContentWrapper from "@components/ContentWrapper";

export default function Home() {
  return (
    <>
      <MainLayout>
        <PageMeta
          title="CSR vs SSG"
          description="A small demo app to compare page speed for CSR and SSG pages in Next.js"
          url="https://csr-vs-ssg.netlify.app"
        />
        <ContentWrapper>
          <h1 className={Styles.heading__h1}>
            This is small demo app to compare page speed for CSR and SSG pages in Next.js
          </h1>
          <p className={Styles.bodyCopy}>
            Click on the menu links above to view pages rendering the same data in different ways.
          </p>
        </ContentWrapper>
      </MainLayout>
    </>
  );
}
