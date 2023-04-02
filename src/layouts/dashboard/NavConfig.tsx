// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name: string) => <Iconify icon={name} width={22} height={22} />;

const navConfig =
 [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('material-symbols:dashboard'),
  },
  {
    title: 'Orders',
    path: '/dashboard/hsclassifier',
    icon: getIcon('fluent:box-20-filled'),
  },
  {
    title: 'Team Members',
    icon: getIcon('mdi:person-multiple'),
    path: '/dashboard/miscellaneous'
  },
  {
    title: 'Partners',
    icon: getIcon('mdi:partnership'),
    path: '/dashboard/miscellaneous'
  },
  {
    title: 'Product Listings',
    icon: getIcon('tabler:packages'),
    path: '/dashboard/miscellaneous'
  },
  {
    title: 'Awards & Honours',
    icon: getIcon('healthicons:award-trophy'),
    path: '/dashboard/miscellaneous'
  },
  {
    title: 'About Us',
    icon: getIcon('bxs:comment-error'),
    path: '/dashboard/about'
  },
  {
    title: 'Payment info',
    icon: getIcon('ic:baseline-payments'),
    path: '/dashboard/miscellaneous'
  },
];

export default navConfig;
