import Head from 'next/head'
import React from 'react'
import Header from './Header'

type LayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  title = 'HD photos | Instasoirée',
  description = 'The go-to place for beautiful photographs. Hosted on the IPFS.',
  children
}) => {
  return (
    <div className="text-sm">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
