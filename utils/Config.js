const SITE_URL = "https://whitep4nth3r.com";

export const Config = {
  site: {
    owner: "Salma Alam-Naylor | whitep4nth3r",
    title: "Comparing CSR with SSG with data fetching",
    domain: "whitep4nth3r.com",
    email: "whitep4nth3r@gmail.com",
  },
  pageMeta: {
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
  },
  menuLinks: [
    {
      displayName: "SSG",
      path: "/ssg/page",
    },
    {
      displayName: "CSR",
      path: "/csr/page",
    },
  ],
};
