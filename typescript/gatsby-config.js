module.exports = {
    siteMetadata: {
        title: 'Hazel'
    },
    plugins: [
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/web/pages`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/`,
                ignore: ['!(readme.md|technical_overview.md|docs/*|typescript/examples/*.chatito)'],
                name: 'markdown-pages',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-126674236-1',
                head: false,
                anonymize: true,
                respectDNT: true,
                cookieDomain: 'aida.dor.ai',
            },
        },
        'read-chatito-files',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components'
    ]
};
