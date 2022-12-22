import {renderPictures} from './miniatures.js';
import {getData} from './server-data.js';
import {closeUserModal} from './form.js';
import {setUserFormSubmit} from './form.js';
import {debounce} from './util.js';

const filters = document.querySelector('.img-filters');
const defaultFilterButton = filters.querySelector('#filter-default');
const randomFilterButton = filters.querySelector('#filter-random');
const discuessedFilterButton = filters.querySelector('#filter-discussed');
const RERENDER_DELAY = 500;

const setDefaultFilter = (cb) => {
  defaultFilterButton.onclick = function(){
    randomFilterButton.classList.remove('img-filters__button--active');
    discuessedFilterButton.classList.remove('img-filters__button--active');
    defaultFilterButton.classList.add('img-filters__button--active');
    cb();
  };
};

const setRandomFilter = (cb) => {
  randomFilterButton.onclick = function(){
    defaultFilterButton.classList.remove('img-filters__button--active');
    discuessedFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.add('img-filters__button--active');
    cb();
  };
};

const shuffle = function(photos){
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
  return photos;
};

const setDiscuessedFilter = (cb) => {
  discuessedFilterButton.onclick = function(){
    defaultFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.remove('img-filters__button--active');
    discuessedFilterButton.classList.add('img-filters__button--active');
    cb();
  };
};

getData((photos) => {
  renderPictures(photos, photos.length, 0, 'default');
  setDefaultFilter(debounce( () => renderPictures(photos, photos.length, 0, 'default'), RERENDER_DELAY,));
  setRandomFilter(debounce( () => renderPictures(photos, 10, 0, 'random'), RERENDER_DELAY,));
  setDiscuessedFilter(debounce( () => renderPictures(photos, photos.length, 0, 'discuessed'), RERENDER_DELAY,));
});

setUserFormSubmit(closeUserModal);

export {shuffle};
