export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e88a48caaaf8283a0eb3e1c',
                  title: 'Sanity Studio',
                  name: 'comicoffeeuk-studio',
                  apiId: '845c6a42-8770-400f-9e35-4099162c0d2f'
                },
                {
                  buildHookId: '5e88a48cf6dd6180c8b6f3f5',
                  title: 'Portfolio Website',
                  name: 'comicoffeeuk',
                  apiId: 'aea1a968-cf20-46d9-851a-1644bd47f908'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlabs/comicoffeeuk',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://comicoffeeuk.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
