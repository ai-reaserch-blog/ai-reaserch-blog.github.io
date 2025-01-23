// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "AI Reasearch Blog";
export const SITE_TITLE = "AI Reasearch Blog";
export const SITE_DESCRIPTION = "AI Reasearch Blog @ RongshengWang";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "AI Reasearch Blog - All Tags";
export const Tags_DESCRIPTION =
  "AI Reasearch Blog - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AI Reasearch Blog`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in AI Reasearch Blog`,
    description: `Browse all articles under the ${category} category in AI Reasearch Blog`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  // { href: "/posts/about-us/", title: "About Us" },
  { href: "/category/One/1/", title: "Blog Posts" },
  { href: "/tags/", title: "Sort by Tags" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "https://www.wangrs.site/", title: "Copyright @ AI Reasearch Blog" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  {
    href: "https://twitter.com/RongshengWang",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/WangRongsheng",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
