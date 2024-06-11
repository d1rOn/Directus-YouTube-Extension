const initialUrl = 'https://noembed.com/embed?url=';

export default async function getYoutubeInfo(youtubeUrl) {
  const url = `${initialUrl}${youtubeUrl}`;
  const result = {
    success: false,
    title: '',
    thumbnailUrl: '',
  };

  try {
    const response = await fetch(url);
    const data = await response.json();

    const { title, thumbnail_url: thumbnailUrl } = data;
    if (title && thumbnailUrl) {
      result.success = true;
      result.title = title;
      result.thumbnailUrl = thumbnailUrl;
    }
  } catch (error) {
    result.success = false;
    result.error = `Failed to fetch YouTube info: ${error.message}`;
  }

  return result;
}
