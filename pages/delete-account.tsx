import RedirectPage from '../components/site/RedirectPage'

// Old language-neutral URL (App Store, app, external links) → /<lang>/delete-account/
export default function Redirect() {
  return <RedirectPage path="delete-account/" />
}
