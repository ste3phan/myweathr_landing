import RedirectPage from '../components/site/RedirectPage'

// Old language-neutral URL (App Store, app, external links) → /<lang>/privacy/
export default function Redirect() {
  return <RedirectPage path="privacy/" />
}
