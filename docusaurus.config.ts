import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Xtra Computing Group',
  tagline: 'The Xtra Computing Group is working in exciting areas of Big data management systems (with special interests in cloud computing and emerging hardware systems), Parallel and distributed systems and Cloud Computing.',
  favicon: 'img/logo-small.png',

  future: {
    v4: true,
  },

  url: 'https://www.xtra.science',
  baseUrl: '/',

  organizationName: 'Xtra-Computing',
  projectName: 'blog',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'about',
          path: 'about',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Xtra-Computing/blog/tree/main/',
        },
        blog: {
          blogTitle: 'Xtra Computing Blog',
          blogDescription:
            'Research updates, events, and engineering insights from the Xtra Computing Group at NUS.',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Xtra-Computing/blog/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
          ignorePatterns: ['/markdown-page', '/tags/**', '/authors/**'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Xtra Computing Group',
        url: 'https://www.xtra.science',
        sameAs: ['https://github.com/Xtra-Computing'],
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Xtra Computing Blog',
        url: 'https://www.xtra.science',
      }),
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {
        name: 'description',
        content:
          'Official blog of Xtra Computing Group, NUS. Research updates, events, and systems/AI engineering insights.',
      },
      {
        name: 'keywords',
        content:
          'Xtra Computing, NUS, systems, AI, machine learning, distributed systems, blog',
      },
      {property: 'og:site_name', content: 'Xtra Computing Group'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Xtra Computing',
      logo: {
        alt: 'Xtra Computing Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        width: 32,
        height: 32,
      },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'About', to: '/about/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Xtra-Computing',
            },
            {
              label: 'Hugging Face',
              href: 'https://huggingface.co/Xtra-Computing',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'How to contribute',
              href: 'https://github.com/Xtra-Computing/blog/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Open a PR',
              href: 'https://github.com/Xtra-Computing/blog/pulls',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xtra Computing Group, NUS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
