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
                  buildHookId: '5d7cfc20866ff1a1a94856d8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rcyeeyio',
                  apiId: '98529a1d-e220-4e24-88d9-6e30ac250ca1'
                },
                {
                  buildHookId: '5d7cfc20451e268a854ab6ed',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t4vrbjuy',
                  apiId: '88384268-fe85-46d8-bf55-0a258b20938b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lwebber/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t4vrbjuy.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
