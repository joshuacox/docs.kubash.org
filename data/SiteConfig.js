module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "Kubash Documentation", // Site title.
  siteTitleAlt: "K8$ the kubernetes interactive shell", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://docs.kubash.org", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater for creating Documentation or Tutorials.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-70757883-2 ", // GA tracking ID.
  disqusShortname: "kubash", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "User", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Austin, TX", // User location to display in the author segment.
  userAvatar: "https://secure.gravatar.com/avatar/f4a3774d2a36a5738e79c07700811241", // User avatar to display in the author segment.
  userDescription: "All about Kubash the interactive shell for kubernetes.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/kubash/kubash",
      iconClassName: "fa fa-github"
    },
  ],
  copyright: "Copyright © 2018. Josh Cox", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#00FF00", // Used for setting manifest and progress theme colors.
  backgroundColor: "#220022", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: ["", "Chapter 1", "Chapter 2"] // Used to generate the Table Of Contents. Index 0 should be blank.
};
