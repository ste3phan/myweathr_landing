import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - myweathr.io</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo-app.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/" className="text-sky-600 hover:text-sky-700 mb-8 inline-block font-medium">
            ← Back to home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy (Waitlist for myweathr.io)</h1>
          <p className="text-slate-600 mb-8">Effective Date: November 2025</p>
          
          <div className="prose prose-slate max-w-none space-y-8">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Overview and Scope</h2>
              <p className="text-slate-700 leading-relaxed">
                This Privacy Policy informs you about the nature, scope, and purpose of the processing of personal data (hereinafter "data") in connection with the subscription to our waitlist for the <strong>myweathr.io</strong> service.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                We, Stephan Lindauer, act as the Data Controller within the meaning of the General Data Protection Regulation (GDPR) and are responsible for the processing of your data.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Name and Contact Details of the Controller</h2>
              <p className="text-slate-700 leading-relaxed">
                <strong>Data Controller under the GDPR:</strong><br />
                Stephan Lindauer<br />
                Kremenholler Str. 91a<br />
                42857 Remscheid, Germany<br />
                Email: <a href="mailto:hello@myweathr.io" className="text-sky-600 hover:text-sky-700 underline">hello@myweathr.io</a>
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Data Processing: Waitlist and Double Opt-in Procedure</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">3.1. Scope and Purpose of Processing</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We process your personal data exclusively for the purpose of managing the waitlist and for the single notification regarding the product launch of <strong>myweathr.io</strong>.
              </p>

              {/* Data Processing Table */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-slate-300">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Data Category</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Data Source</th>
                      <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Purpose of Processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3"><strong>Email Address</strong></td>
                      <td className="border border-slate-300 px-4 py-3">Provided by you</td>
                      <td className="border border-slate-300 px-4 py-3">Execution of the DOI procedure and the single go-live notification.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3"><strong>IP Addresses</strong> (Signup & Confirmation)</td>
                      <td className="border border-slate-300 px-4 py-3">Automated logging</td>
                      <td className="border border-slate-300 px-4 py-3"><strong>Proof of Consent:</strong> Documentation of your consent (Art. 7(1) GDPR).</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-3"><strong>Timestamps</strong> (Signup & Confirmation)</td>
                      <td className="border border-slate-300 px-4 py-3">Automated logging</td>
                      <td className="border border-slate-300 px-4 py-3"><strong>Proof of Consent:</strong> Documentation of when consent was given.</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3"><strong>Status</strong> (confirmed/unconfirmed)</td>
                      <td className="border border-slate-300 px-4 py-3">Automated logging</td>
                      <td className="border border-slate-300 px-4 py-3"><strong>Storage Limitation:</strong> Control of the automated 7-day deletion routine.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mt-4">
                No further marketing communication (newsletters, product updates, etc.) will be sent via this waitlist.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.2. Legal Basis</h3>
              <p className="text-slate-700 leading-relaxed">
                The processing of data for the waitlist is based exclusively on your consent (Art. 6(1)(a) GDPR), which you provide by actively ticking the checkbox and subsequently confirming via the Double Opt-in (DOI) procedure.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">3.3. Double Opt-in and Verification</h3>
              <p className="text-slate-700 leading-relaxed">
                We use the DOI procedure to ensure that you are indeed the owner of the email address provided and that you have actively consented to the storage. Only by clicking the confirmation link in the email will your address be added to the active waitlist. We store the IP address and the timestamp of both steps as proof.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Processor and Third-Country Transfer</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                We use the service <strong>Supabase</strong> as a technical backend processor (database and potentially email delivery) for the storage and management of your waitlist data.
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Data Processing Agreement (DPA):</strong> We have concluded a Data Processing Addendum (DPA) in accordance with Art. 28 GDPR with Supabase, Inc. (970 Toa Payong North #07-04, Singapore 318992).</li>
                <li><strong>Server Location:</strong> Your data is processed on servers located within the European Union (EU).</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Retention and Deletion</h2>
              <p className="text-slate-700 leading-relaxed mb-3">
                We strictly adhere to the principle of storage limitation (Art. 5(1)(e) GDPR).
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Unconfirmed Emails:</strong> Email addresses whose registration has not been verified via the confirmation link within seven (7) days of initial signup will be automatically and completely deleted.</li>
                <li><strong>Confirmed Emails:</strong> Your data will be stored until the single go-live notification and until you withdraw your consent.</li>
                <li><strong>Withdrawal of Consent:</strong> Upon withdrawal of your consent, your email address will be deleted immediately. The minimal necessary metadata for proof of the original consent (pseudonymized, without the email address) may be retained for up to three (3) years to demonstrate the lawfulness of the prior processing (accountability).</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Data Subject Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2">
                <li><strong>Access (Art. 15):</strong> Obtain confirmation as to whether or not personal data concerning you are being processed, and access the data.</li>
                <li><strong>Rectification (Art. 16):</strong> Have inaccurate data corrected.</li>
                <li><strong>Erasure (Art. 17):</strong> Request the deletion of your data (Right to be Forgotten).</li>
                <li><strong>Restriction of Processing (Art. 18):</strong> Request the restriction of the processing of your data.</li>
                <li><strong>Data Portability (Art. 20):</strong> Receive your data in a machine-readable format.</li>
                <li><strong>Withdrawal of Consent (Art. 7(3)):</strong> Withdraw your given consent at any time.</li>
                <li><strong>Complaint (Art. 77):</strong> Lodge a complaint with a supervisory authority (e.g., the data protection authority responsible for you in your home country/state).</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>To exercise your rights, including withdrawal of consent:</strong><br />
                Please send an email to <a href="mailto:hello@myweathr.io" className="text-sky-600 hover:text-sky-700 underline">hello@myweathr.io</a>.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">7. IT Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We use HTTPS/TLS encryption for the transmission of data. The storage in Supabase is secured with modern security standards (database encryption, access controls) to protect your data against manipulation, loss, and unauthorized access.
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
