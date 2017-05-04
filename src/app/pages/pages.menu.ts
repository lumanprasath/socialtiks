export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      //           {
      //   path: 'newproject',
      //   data: {
      //     menu: {
      //       title: 'New Project',
      //       icon: 'ion-android-laptop',
      //       selected: false,
      //       expanded: false,
      //       order: 100
      //     }
      //   },
      //    children: [
      //     // {
      //     //   path: 'gamedetails',
      //     //   data: {
      //     //     menu: {
      //     //       title: 'Game Details',
      //     //     }
      //     //   }
      //     // },
      //     //   {
      //     //   path: 'branddetails',
      //     //   data: {
      //     //     menu: {
      //     //       title: 'Brand Details',
      //     //     }
      //     //   }
      //     // },
      //     //   {
      //     //   path: 'videodetails',
      //     //   data: {
      //     //     menu: {
      //     //       title: 'Video Details',
      //     //     }
      //     //   }
      //     // },
      //       {
      //       path: 'formdetails-newproject',
      //       data: {
      //         menu: {
      //           title: 'Details',
      //         }
      //       }
      //     }
  
      //   ]
      // },
     
      // {
      //  path: 'components',
      //  data: {
      //    menu: {
      //      title: 'Components',
      //      icon: 'ion-gear-a',
      //      selected: false,
      //      expanded: false,
      //      order: 250,
      //    }
      //  },
      //  children: [
      //    {
      //      path: 'treeview',
      //      data: {
      //        menu: {
      //          title: 'Tree View',
      //        }
      //      }
      //    }
      //  ]
      // },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'league_monitoring',
            data: {
              menu: {
                title: 'League Monitoring',
              }
            }
          },
           {
            path: 'chartist-js2',
            data: {
              menu: {
                title: 'Brand Socialytiks',
              }
            }
          }
          // {
          //   path: 'maplytiks-brandwise',
          //   data: {
          //     menu: {
          //       title: 'Brand Analytics',
          //     }
          //   }
          // }
        ]
      },
     
      // {
      //   path: 'tables',
      //   data: {
      //     menu: {
      //       title: 'Tables',
      //       icon: 'ion-ios-location-outline',
      //       selected: false,
      //       expanded: false,
      //       order: 600,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'basictables',
      //       data: {
      //         menu: {
      //           title: 'Basic',
      //         }
      //       }
      //     },
      //     {
      //       path: 'smarttables',
      //       data: {
      //         menu: {
      //           title: 'smart ',
      //         }
      //       }
      //     }
    
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'Pages',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 650,
      //     }
      //   },
      //   children: [
      //     {
      //       path: ['/login'],
      //       data: {
      //         menu: {
      //           title: 'Login'
      //         }
      //       }
      //     },
      //     {
      //       path: ['/register'],
      //       data: {
      //         menu: {
      //           title: 'Register'
      //         }
      //       }
      //     },
      //          {
      //       path: 'selection',
      //       data: {
      //         menu: {
      //           title: 'selections'
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        path: '',
        data: {
          menu: {
            title: 'Visit Us',
            url: 'http://drive-analytics.com/',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
