import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { messages as enMessages } from './locales/en-EN/messages'
import { messages as esMessages } from './locales/es-ES/messages'
import reportWebVitals from './reportWebVitals'
import './ui/assets/styles/plugins.css'
import { defaultLocale, loadMessages } from './ui/components/Locales/LocaleLoader'

i18n.load({
  en: enMessages,
  es: esMessages
})

const I18nApp = () => {
  function changeLocale(locale: string) {
    setCurrentLocale(locale)
    loadMessages(locale)
  }

  const [currentLocale, setCurrentLocale] = useState<string>(defaultLocale)

  return (
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <App locale={currentLocale} handleLocaleChange={changeLocale} />
      </I18nProvider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<I18nApp />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
