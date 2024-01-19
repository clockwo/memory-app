const fetchData = async () => {
  try {
    const response = await fetch(
      'https://api.imgur.com/3/album/YpCYhLQ/images',
      {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID 28fa00168dcfd6d',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

export default fetchData;
