import type { NextPage } from 'next';
import HeroSection from 'src/components/pages/Home/HeroSection';
import TrustedBy from 'src/components/pages/Home/TrustedBy';
import SEO from 'src/components/SEO';
import Google from '../assets/svg/google.svg';
import Apple from '../assets/svg/apple.svg';
import Facebook from '../assets/svg/facebook.svg';
import Spotify from '../assets/svg/spotify.svg';
import Dropbox from '../assets/svg/dropbox.svg';
import Github from '../assets/svg/github.svg';
import Netflix from '../assets/svg/netflix.svg';
import Organize from 'src/components/pages/Home/Organize';
import Collaborate from 'src/components/pages/Home/Collaborate';
import Connect from 'src/components/pages/Home/Connect';
import PushMarket from 'src/components/pages/Home/PushMarket';
import Features from 'src/components/pages/Home/Features';

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" />
      <HeroSection />
      <TrustedBy companies={companies} />
      <Organize />
      <Collaborate />
      <Connect />
      <PushMarket />
      <Features />
    </>
  );
};

export default Home;

const companies = [
  {
    id: 1,
    svg: <Google />,
    name: 'Google',
    height: '24px',
    width: '72px',
  },
  {
    id: 2,
    svg: <Apple />,
    name: 'Apple',
    height: '26px',
    width: '21px',
  },
  {
    id: 3,
    svg: <Facebook />,
    name: 'Facebook',
    height: '18px',
    width: '93px',
  },
  {
    id: 4,
    svg: <Spotify />,
    name: 'Spotify',
    height: '24px',
    width: '80px',
  },
  {
    id: 5,
    svg: <Dropbox />,
    name: 'Dropbox',
    height: '20px',
    width: '101px',
  },
  {
    id: 6,
    svg: <Github />,
    name: 'Github',
    height: '26px',
    width: '26px',
  },
  {
    id: 7,
    svg: <Netflix />,
    name: 'Netflix',
    height: '18px',
    width: '66px',
  },
];
