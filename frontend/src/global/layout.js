import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-accent">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}