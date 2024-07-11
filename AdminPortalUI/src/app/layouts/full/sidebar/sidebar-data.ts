import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  // {
  //   displayName: 'Badge',
  //   iconName: 'rosette',
  //   route: '/ui-components/badge',
  // },
  {
    displayName: 'Trip Subscriptions',
    iconName: 'route',
    route: '/ui-components/tripsubscriptions',
  },
  {
    displayName: 'Company',
    iconName: 'building',
    route: '/ui-components/company',
  },
  {
    displayName: 'Drivers',
    iconName: 'steering-wheel',
    route: '/ui-components/driver',
  },
  {
    displayName: 'Location',
    iconName: 'map-pin',
    route: '/ui-components/location',
  },
  {
    displayName: 'Timing',
    iconName: 'clock-24',
    route: '/ui-components/timing',
  },
  {
    displayName: 'Trip Type',
    iconName: 'arrows-diff',
    route: '/ui-components/tripType',
  },
  {
    displayName: 'Route',
    iconName: 'map',
    route: '/ui-components/route',
  },
  {
    displayName: 'Vehicles',
    iconName: 'car',
    route: '/ui-components/vehicles',
  },

  // {
  //   displayName: 'Chips',
  //   iconName: 'poker-chip',
  //   route: '/ui-components/chips',
  // },
  {
    displayName: 'Lists',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'tooltip',
    route: '/ui-components/tooltips',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
