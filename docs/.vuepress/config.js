import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { navbar_en } from './conf/navbar_en'
import { sidebar_en } from './conf/sidebar_en'
import { head_en } from './conf/head_en'


export default defineUserConfig({
    base: '/',
    lang: 'en-US',
    title: 'RoyaleAPI Developers',
    description: 'Documentation for RoyaleAPI Developers',
    extraWatchFiles: ["**/*.md", "**/*.vue"],
    head: head_en,
    theme: defaultTheme({
        logo: '/img/royaleapi-logo.png',
        navbar: navbar_en,
        sidebar: sidebar_en,


    }),
    plugins: [
        googleAnalyticsPlugin({
            id: 'G-YVWNYG0SRC',
        })
    ]
})
