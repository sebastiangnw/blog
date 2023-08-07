import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import AnimatedRoutes from 'Routes';

function App() {

  return (
    <HelmetProvider>
    
    <Helmet>

      <title>Murkiva | Software Agency</title>
      <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de apps" />
      <meta name="keywords" content='agencia de marketing, agencia de software, creacion de pagina web' />
      <meta name="robots" content="all" />
      <meta name="author" content="Murkiva" />
      <meta name="publisher" content="Murkiva" />
      <link rel="canonical" href="https://murkiva.com/" />

      {/* social media Tags */}
      <meta property="og:title" content="Murkiva | Software Agency" />
      <meta property="og:description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de apps" />
      <meta property="og:url" content="https://murkiva.com/" />
      <meta property="og:image" content="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" />
      
      {/* Twitter Tags */}
      <meta name="twitter:title" content="Murkiva | Software Agency" />
      <meta 
        name="twitter:description" 
        content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de apps" />
      <meta name="twitter:image" content="https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg" />
      <meta name="twitter:card" content="summary_large_image" />

    </Helmet>

    <Provider store={store}>

      <Router>

        <AnimatedRoutes />
        
      </Router>
      
    </Provider>

    </HelmetProvider>
  );
}

export default App;