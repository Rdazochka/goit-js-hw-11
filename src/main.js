import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const searchQuery = formData.get('search-text').trim();
  if (searchQuery === '') {
    iziToast.error({
      title: 'Помилка',
      message: 'Введіть текст для пошуку',
    });
    return;
  }
  const images = await getImagesByQuery(searchQuery);

  if (images.hits.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }
});
