import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <Head>
        <title>WordPress to Social Media Preview</title>
        <meta name="description" content="Share WordPress posts with rich previews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700' }}>
          WordPress Social Preview
        </h1>
        
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
          Share your WordPress posts on social media with rich previews
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How to Use:</h2>
          
          <ol style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Take your WordPress post URL: <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '4px' }}>https://yoursite.com/post-slug</code></li>
            <li>Replace the domain with this site: <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '4px' }}>https://dainty-kheer-4cc17f.netlify.app/post-slug</code></li>
            <li>Share the new URL on Facebook, Twitter, or any social platform</li>
            <li>When users click, they'll be redirected to your WordPress site</li>
          </ol>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'left'
        }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Example:</h3>
          <p style={{ marginBottom: '0.5rem' }}>WordPress Post:</p>
          <code style={{ 
            display: 'block',
            background: 'rgba(0,0,0,0.3)', 
            padding: '12px', 
            borderRadius: '6px',
            marginBottom: '1rem',
            wordBreak: 'break-all'
          }}>https://earn.tapza.site/how-to-earn/</code>
          
          <p style={{ marginBottom: '0.5rem' }}>Share This Instead:</p>
          <code style={{ 
            display: 'block',
            background: 'rgba(0,0,0,0.3)', 
            padding: '12px', 
            borderRadius: '6px',
            wordBreak: 'break-all'
          }}>https://dainty-kheer-4cc17f.netlify.app/how-to-earn</code>
        </div>
      </main>

      <footer style={{ marginTop: '3rem', opacity: 0.7 }}>
        <p>Powered by Next.js & WordPress GraphQL</p>
      </footer>
    </div>
  )
}

export default Home
