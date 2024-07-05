import { Helmet } from 'react-helmet-async';

import Media from 'src/sections/media/Media';

// ----------------------------------------------------------------------

export default function MediaPage() {
  return (
    <>
      <Helmet>
        <title> Bridge Of Hope </title>
      </Helmet>

      <Media />
    </>
  );
}
