const config = {
  siteTitle: 'Agus Setiyo Budi',
  siteTitleShort: 'Agus Setiyo Budi',
  siteTitleAlt: 'Agus Setiyo Budi',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://agussetiyobudi.my.id',
  repo: 'https://github.com/tirastudio/blogku',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
      'Blog pribadi buat latihan menulis, rencana mau di isi tutorial sama dokumentasi gitu.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://simimin.substack.com',
  newsletterEmbed: 'https://simimin.substack.com/embed',
  userName: 'Agus Setiyo Budi',
  userEmail: 'agussetiyobudi1994@gmail.com',
  userTwitter: 'twitter.com',
  menuLinks: [
    {
      name: 'Home',
      link: '/',
    },
     {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
