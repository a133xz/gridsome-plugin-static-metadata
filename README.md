# gridsome-plugin-static-metadata

Gridsome plugin to add global static metadata.

When building a microsite or a small site with Gridsome, you might want to add Open Graph (and Twitter) meta tags that control how URLs are displayed when shared on social media. With this plugin you can do it in the Gridsome config file.

Check below to see all the tags that will be included.

## Install

- `npm install gridsome-plugin-static-metadata`
- `yarn add gridsome-plugin-static-metadata`
- `pnpm install gridsome-plugin-static-metadata`

## Basic usage

The `siteName` `siteDescription` and `siteUrl` properties must be defined in the `gridsome.config.js` file of your project

```js
//gridsome.config.js
module.exports = {
  siteName: 'MySite Name',
  siteDescription: 'MySite description',
  siteUrl: 'https://mysiteurl.com/',
  plugins: [
    {
      use: 'gridsome-plugin-static-metadata',
      options: {
        // To replace siteName
        title: '',
        image: '/meta.png',
        themeColor: '#171c31',
        lang: 'es',
        locale: 'es_ES'
        robots: true,
      },
    },
  ],
}
```

## Tags

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mysiteurl.com/" />
<meta property="og:title" content="MySite Name" />
<meta property="og:description" content="MySite description" />
<meta property="og:image" content="/meta.png" />
<meta property="og:locale" content="es_ES" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://mysiteurl.com/" />
<meta property="twitter:title" content="MySite Name" />
<meta property="twitter:description" content="MySite description" />
<meta property="twitter:image" content="/meta.png" />
<meta name="theme-color" content="#171c31" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta data-key="description" name="description" content="MySite description" />
```

## Options on `gridsome.config.js`

#### siteName

- Type: `string`
- Default: ``

Title for `twitter:title` and `og:title` property

#### siteDescription

- Type: `string`
- Default: ``

Description for `twitter:description` and `og:description` property

#### siteUrl

- Type: `string`
- Default: ``

Url for `twitter:url` and `og:url` property

## Plugin options

#### title

- Type: `string`
- Default: (siteName property above)

Optional property to replace `siteName`, so you can use it as a variable

#### image

- Type: `string`
- Default: ``

Image for `twitter:image` and `og:url` property

#### themeColor

- Type: `string`
- Default: ``

Theme color for `theme-color` meta property

#### locale

- Type: `string`
- Default: ``

Set `og:locale` property language

#### lang

- Type: `string`
- Default: ``

Lang for `htmlAttrs` of the page

#### robots

- Type: `boolean`
- Default: `false`

If true `<meta name="robots" content="index,follow" />` will be added
