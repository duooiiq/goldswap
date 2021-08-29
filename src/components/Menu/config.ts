import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('HomePage'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('DEX And Liquidity'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/pool',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'mailto: paperguitar1789@gmail.com',
      },
      {
        label: t('Github'),
        href: 'https://github.com/duooiiq',
      },
    ],
  },
]

export default config
