import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Xtra Computing Group',
  tagline: 'Research blog of Xtra Computing Group at NUS',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://www.xtra.science',
  baseUrl: '/',

  organizationName: 'Xtra-Computing',
  projectName: 'blog',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Xtra-Computing/blog/tree/main/',
        },
        blog: {
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
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Xtra Computing',
      logo: {
        alt: 'Xtra Computing Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Xtra-Computing/blog',
          label: 'GitHub',
          position: 'right',
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
            {label: 'Docs', to: '/docs/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Xtra-Computing',
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
      copyright: `Copyright © ${new Date().getFullYear()} Xtra Computing Group, NUS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
