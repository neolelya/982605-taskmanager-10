import {createMenuTemplate} from './components/menu';
import {createSortingTemplate} from './components/sorting';
import {createFilterTemplate} from './components/filter';
import {createTaskTemplate} from './components/task';
import {createTaskEditTemplate} from './components/task-edit';
import {createLoadMoreButtonTemplate} from './components/load-more-button';
import {createBoardContainerTemplate} from './components/board';

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createMenuTemplate());
render(siteMainElement, createFilterTemplate());
render(siteMainElement, createBoardContainerTemplate());

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate());

new Array(TASK_COUNT)
  .fill(``)
  .forEach(() => render(taskListElement, createTaskTemplate())
  );

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, createSortingTemplate(), `afterbegin`);
render(boardElement, createLoadMoreButtonTemplate());
