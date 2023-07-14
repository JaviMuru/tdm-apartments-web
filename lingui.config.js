/** @type {import("@lingui/conf").LinguiConfig} */
module.exports = {
  locales: ['en-EN', 'es-ES'],
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src']
    }
  ],
  format: 'po',
  sourceLocale: 'es-ES'
}
