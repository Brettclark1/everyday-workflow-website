import { useRouter } from './router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { VoiceAI } from './pages/VoiceAI';
import { EvergreenCampaigns } from './pages/EvergreenCampaigns';
import { SaaSPlatform } from './pages/SaaSPlatform';
import { A2PCompliance } from './pages/A2PCompliance';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Contact } from './pages/Contact';
import { Calendar } from './pages/Calendar';

function App() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/services':
        return <Services />;
      case '/voice-ai':
        return <VoiceAI />;
      case '/evergreen-campaigns':
        return <EvergreenCampaigns />;
      case '/saas-platform':
        return <SaaSPlatform />;
      case '/a2p-compliance':
        return <A2PCompliance />;
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/terms-of-service':
        return <TermsOfService />;
      case '/contact':
        return <Contact />;
      case '/calendar':
        return <Calendar />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;
