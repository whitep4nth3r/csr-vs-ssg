import Head from "next/head";
import { Config } from "@utils/Config";

export default function PageMeta(props) {
  const { title, description, url, canonical } = props;
  const siteTitle = `${title} | ${Config.site.title}`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
