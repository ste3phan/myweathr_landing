// Legal text (English). Moved from pages/delete-account.js; only styling was changed.
export default function DeleteAccountContent({ lang }) {
  return (
    <>
    <h1 className="h1-page mb-4 !text-[clamp(34px,4.6vw,56px)]">Account Deletion</h1>
    <p className="text-muted mb-8">Last Updated: January 2026</p>
    
    <div className="legal max-w-none space-y-8">

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">How to Delete Your Account</h2>
        <p className="text-fg-2 leading-relaxed">
          You can delete your myweathr.io account and all associated data directly through the app without contacting us. Follow these steps:
        </p>
        
        <ol className="list-decimal list-inside text-fg-2 mt-4 space-y-3">
          <li className="pl-2">
            <span className="font-medium">Open the myweathr.io app</span> on your device
          </li>
          <li className="pl-2">
            <span className="font-medium">Navigate to Settings</span> by tapping on the gear icon in the bottom navigation bar
          </li>
          <li className="pl-2">
            <span className="font-medium">Scroll down to the Account section</span> at the bottom of the settings page
          </li>
          <li className="pl-2">
            <span className="font-medium">Tap on "Delete Account"</span> option
          </li>
          <li className="pl-2">
            <span className="font-medium">Confirm your decision</span> by entering your complete email address when prompted
          </li>
        </ol>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">What Data Will Be Deleted</h2>
        <p className="text-fg-2 leading-relaxed">
          When you delete your account, the following data will be permanently removed from our systems:
        </p>
        
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>Account information</strong>: Email address and authentication data</li>
          <li><strong>User profile</strong>: All profile information</li>
          <li><strong>Routes</strong>: All GPX routes and associated metadata</li>
          <li><strong>Bike profiles</strong>: All bike configurations and settings</li>
          <li><strong>Coffee stops</strong>: All saved coffee stop locations and details</li>
          <li><strong>Preferences</strong>: Language and unit system settings</li>
          <li><strong>Subscription data</strong>: Subscription status and history</li>
          <li><strong>Third-party connections</strong>: Strava and other integrations</li>
        </ul>
        
        <p className="text-fg-2 leading-relaxed mt-4">
          <strong>Note:</strong> Deletion is immediate and cannot be undone. There is no recovery option once your account is deleted.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">Data Retention</h2>
        <p className="text-fg-2 leading-relaxed">
          After account deletion, your personal data is immediately removed from our active systems. Some data may remain in our backup systems for up to 30 days before being permanently deleted.
        </p>
        
        <p className="text-fg-2 leading-relaxed mt-3">
          We do not retain any personal information after this period. Anonymous, aggregated data that cannot be linked back to you may be retained for analytical purposes.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">Subscription Management</h2>
        <p className="text-fg-2 leading-relaxed">
          <strong>Important:</strong> Deleting your account does not automatically cancel your subscription if you have an active premium plan. To avoid being charged in the future:
        </p>
        
        <ul className="list-disc list-inside text-fg-2 mt-2 space-y-1">
          <li><strong>iOS users</strong>: Cancel your subscription through the App Store before deleting your account</li>
          <li><strong>Android users</strong>: Cancel your subscription through the Google Play Store before deleting your account</li>
        </ul>
        
        <p className="text-fg-2 leading-relaxed mt-3">
          For detailed instructions on canceling your subscription, please visit our <a href="https://support.apple.com/en-us/118428" className="link underline">subscription cancellation guide</a>.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-extrabold [font-stretch:106%]">Need Help?</h2>
        <p className="text-fg-2 leading-relaxed">
          If you encounter any issues with account deletion or have questions about your data, please contact our support team:
        </p>
        
        <p className="text-fg-2 leading-relaxed mt-3">
          <strong>Email:</strong> <a href="mailto:hello@myweathr.io" className="link underline">hello@myweathr.io</a>
        </p>
      </section>

    </div>
    </>
  )
}
