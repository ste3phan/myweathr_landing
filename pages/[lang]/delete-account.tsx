import type { GetStaticPaths, GetStaticProps } from 'next'
import { langPaths, type Lang } from '../../lib/i18n'
import { getChrome, type Chrome } from '../../lib/content'
import LegalPage from '../../components/legal/LegalPage'
import Content from '../../components/legal/DeleteAccountContent'

type Props = { lang: Lang; chrome: Chrome }

export default function Page({ lang, chrome }: Props) {
  return (
    <LegalPage lang={lang} chrome={chrome} slug="delete-account">
      <Content lang={lang} />
    </LegalPage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({ paths: langPaths(), fallback: false })

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const lang = params!.lang as Lang
  return { props: { lang, chrome: getChrome(lang) } }
}
