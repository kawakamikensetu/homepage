import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'ホーム',
      href: '/home',
    },
    {
      text: '施工までの流れ',
      href: '/flow-of-construction',
    },
    {
      text: '実績',
      href: '/track-record',
    },
    {
      text: 'お問い合わせ',
      href: '/contact',
    },
    // {
    //   text: 'ホーム',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //   ],
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'ホーム', href: '/home' },
        { text: '施工までの流れ', href: '/flow-of-construction' },
        { text: '実績', href: '/track-record' },
        { text: 'お問い合わせ', href: '/contact' },
      ],
    },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/kawakamiconstruction?igsh=Y29nZ2hxbjU1OTNt&utm_source=qr',
    },
  ],
  footNote: '©️ 2024 川上建設',
};
