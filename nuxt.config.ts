// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/'
    },
    devtools: { enabled: false },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/styles/app.scss'
    ],
    modules: [
        '@nuxt/image',
        '@nuxt/content',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Figtree: {
                        wght: [400, 600, 700]
                    },
                    download: true,
                    inject: true
                }
            }
        ]
    ],
    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: false
        }
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            theme: 'github-dark',
            preload: ['java', 'javascript']
        },
        markdown: {
            // https://github.com/rehypejs/rehype-external-links
            rehypePlugins: [
                [
                    'rehype-external-links',
                    {
                        target: '_blank',
                        rel: 'noopener noreferer'
                    }
                ]
            ]
        }
    },
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/free-regular-svg-icons'
        ]
    }
});
