import RedirectPage from '../components/site/RedirectPage'

// Old language-neutral URL (App Store, app, external links) → /<lang>/imprint/
export default function Redirect() {
  return <RedirectPage path="imprint/" />
}
