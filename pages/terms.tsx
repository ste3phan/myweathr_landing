import RedirectPage from '../components/site/RedirectPage'

// Old language-neutral URL (App Store, app, external links) → /<lang>/terms/
export default function Redirect() {
  return <RedirectPage path="terms/" />
}
