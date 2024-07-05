import { Helmet } from 'react-helmet-async';

import { AboutView } from 'src/sections/about';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> Bridge Of Hope </title>
      </Helmet>

      <AboutView />
    </>
  );
}
