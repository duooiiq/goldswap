import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'GoldSwap',
  description:
    'Stay active this exchange is very peculiar and attractive ...',
  image: 'https://i.ibb.co/jrk24fm/GOLDSWAP.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('GoldSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('GoldSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('GoldSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('GoldSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('GoldSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('GoldSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('GoldSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('GoldSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('GoldSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('GoldSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('GoldSwap')}`,
      }
    default:
      return null
  }
}
