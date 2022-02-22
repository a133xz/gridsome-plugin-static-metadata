module.exports = (api, options) => {
  const siteDescription = api.config.siteDescription
  const siteName = api.config.siteName
  const siteUrl = api.config.siteUrl
  const op = Object.assign(options, {
    siteDescription: siteDescription,
    siteName: siteName,
    siteUrl: siteUrl,
  })
  api.setClientOptions(op)
}
