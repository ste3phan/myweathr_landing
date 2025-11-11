// pages/confirm.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function ConfirmPage() {
  const router = useRouter()
  const { token } = router.query
  const [status, setStatus] = useState('loading') // loading, success, error
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!token) return

    // Call the API to confirm the token
    fetch(`/api/confirm?token=${token}`)
      .then(async (res) => {
        const data = await res.json()
        if (res.ok) {
          setStatus('success')
          setMessage(data.message || 'Email confirmed successfully!')
          // Redirect to confirmed page after 2 seconds
          setTimeout(() => {
            router.push('/confirmed')
          }, 2000)
        } else {
          setStatus('error')
          setMessage(data.message || 'Failed to confirm email.')
        }
      })
      .catch((err) => {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
        console.error('Confirmation error:', err)
      })
  }, [token, router])

  return (
    <>
      <Head>
        <title>Confirm Email - MyWeathr</title>
        <link rel="icon" type="image/png" href="/logo-app.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          {status === 'loading' && (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Confirming your email...
              </h1>
              <p className="text-gray-600">Please wait a moment.</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="text-6xl mb-4">✅</div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Email Confirmed!
              </h1>
              <p className="text-gray-600 mb-4">{message}</p>
              <p className="text-sm text-gray-500">
                Redirecting you to the confirmation page...
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="text-6xl mb-4">❌</div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Confirmation Failed
              </h1>
              <p className="text-gray-600 mb-6">{message}</p>
              <button
                onClick={() => router.push('/')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
