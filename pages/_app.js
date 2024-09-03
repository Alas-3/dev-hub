import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-700 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
