// Legal text (English). Moved from pages/imprint.js; only styling was changed.
export default function ImprintContent({ lang }) {
  return (
    <>
    <h1 className="h1-page mb-4 !text-[clamp(34px,4.6vw,56px)]">Imprint / Legal Notice</h1>
    
    <div className="legal max-w-none space-y-8">

      {/* Section 1 */}
      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">Information pursuant to Section 5 of the German Digital Services Act (DDG)</h2>
        <p className="text-fg-2 leading-relaxed">
          <strong>Responsible for content and Service Provider:</strong><br />
          Stephan Lindauer<br />
          Kremenholler Str. 91a<br />
          42857 Remscheid, Germany
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">Contact</h2>
        <p className="text-fg-2 leading-relaxed">
          <strong>Fast electronic and direct communication:</strong><br />
          Phone: <a href="tel:+4915232068012" className="link underline">+49 15232068012</a><br />
          Email: <a href="mailto:hello@myweathr.io" className="link underline">hello@myweathr.io</a>
        </p>
      </section>

    </div>
    </>
  )
}
