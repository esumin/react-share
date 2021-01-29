import assert from './utils/assert';
import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

async function facebookLink(
  url: () => Promise<string>,
  { quote, hashtag }: { quote?: string; hashtag?: string },
) {
  const u = await url();

  assert(u, 'facebook.url');

  return (
    'https://www.facebook.com/sharer/sharer.php' +
    objectToGetParams({
      u,
      quote,
      hashtag,
    })
  );
}

const FacebookShareButton = createShareButton<{ quote?: string; hashtag?: string }>(
  'facebook',
  facebookLink,
  props => ({
    quote: props.quote,
    hashtag: props.hashtag,
  }),
  {
    windowWidth: 550,
    windowHeight: 400,
  },
);

export default FacebookShareButton;
