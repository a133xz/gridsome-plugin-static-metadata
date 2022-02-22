/**
 * Static Metadata client plugin
 *
 * @param Vue
 * @param options
 */

export default function (Vue, options, { head }) {
  const metadata = [
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }
  ];

  const title = options.title || options.siteName;

  if (title) {
    metadata.push(
      {
        property: 'twitter:title',
        content: title
      },
      {
        property: 'og:title',
        content: title
      }
    );
  }

  if (options.siteDescription) {
    metadata.push(
      {
        property: 'twitter:description',
        content: options.siteDescription
      },
      {
        property: 'og:description',
        content: options.siteDescription
      }
    );
  }

  if (options.image) {
    metadata.push(
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:image',
        content: options.image
      },
      {
        property: 'og:image',
        content: options.image
      }
    );
  }

  if (options.locale) {
    metadata.push({
      property: 'og:locale',
      content: options.locale
    });
  }

  if (options.siteUrl) {
    metadata.push(
      {
        property: 'og:url',
        content: options.siteUrl
      },
      {
        property: 'twitter:url',
        content: options.siteUrl
      }
    );
  }

  if (options.themeColor) {
    metadata.push({
      name: 'theme-color',
      content: options.themeColor
    });
  }

  if (options.robots) {
    metadata.push({ name: 'robots', content: 'index,follow' });
  }

  if (options.lang) {
    head.htmlAttrs = { lang: options.lang };
  }

  head.meta.push(...metadata);
}
