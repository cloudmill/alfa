import jBox from "jbox";

export const myModal = new jBox('Modal', {
  attach: '#myModal',
  content: $('#projectsPopup'),
  animation: {
    open: 'slide:right',
    close: 'slide:right',
  },
  onOpen: function () {
    const el = this.content[0].children[0];

    const toolBlock = el.getElementsByClassName('popup-tool')[0].getElementsByClassName('text__sm')[0];
    const titleBlock = el.getElementsByClassName('popup-title')[0].getElementsByTagName('h5')[0];
    const contentBlock = el.getElementsByClassName('popup-desc')[0].getElementsByClassName('text__sm')[0];
    const catBlock = el.getElementsByClassName('popup-cat')[0].getElementsByTagName('b')[0];
    const imageBlock = el.getElementsByClassName('popup-image')[0].getElementsByTagName('img')[0];
    const linkBlock = el.getElementsByClassName('btn--primary')[0];
    const tool = el.dataset.tool;
    const title = el.dataset.title;
    const content = el.dataset.content;
    const cat = el.dataset.cat;
    const image = el.dataset.image;
    const link = el.dataset.link;

    if(tool) toolBlock.textContent = tool;
    if(title) titleBlock.textContent = title;
    if(content) contentBlock.textContent = content;
    if(cat) catBlock.textContent = cat;
    if(image) imageBlock.setAttribute('src', image);
    if(link) linkBlock.setAttribute('href', link);
  }
});
