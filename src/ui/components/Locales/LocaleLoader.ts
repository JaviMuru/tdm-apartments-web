import { i18n } from '@lingui/core'

export const locales = {
  'en-EN': 'EN',
  'es-ES': 'ES'
}

export const defaultLocale = 'es-ES'

i18n.load(defaultLocale, {})
i18n.activate(defaultLocale)

export async function loadMessages(locale: string) {
  const { messages } = await import(`../../../locales/${locale}/messages`)

  // After we load the messages, we need to add them
  // to Lingui and tell it to activate the locale.
  i18n.load(locale, messages)
  i18n.activate(locale)
}
