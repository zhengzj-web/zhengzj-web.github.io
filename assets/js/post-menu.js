// creat post menu
const createMenu = () => {
  $('#post-menu .pin').css('top', '0.16rem');
  $('#post .post-content')
    .find('h1,h2,h3,h4,h5,h6')
    .each(function (i) {
      switch (this.tagName) {
        case 'H1':
          topArr.push($(this).get(0).offsetTop);
          $(this).attr('id', 'title' + i);
          html += `<li class="li-h1" title="${$(this).text()}">
              <a href="javascript:;" data-href="#title${i}" data-index="${i}">
                ${$(this).text()}
              </a>
            </li>`;
          break;
        case 'H2':
          topArr.push($(this).get(0).offsetTop);
          $(this).attr('id', 'title' + i);
          html += `<li class="li-h2 ${i == 0 ? 'is-active' : ''}" title="${$(this).text()}">
              <a href="javascript:;" data-href="#title${i}" data-index="${i}">
                ${$(this).text()}
              </a>
            </li>`;
          break;
        case 'H3':
          topArr.push($(this).get(0).offsetTop);
          $(this).attr('id', 'title' + i);
          html += `<li class="li-h3" title="${$(this).text()}">
              <a href="javascript:;" data-href="#title${i}" data-index="${i}">
                ${$(this).text()}
              </a>
            </li>`;
          break;
        case 'H4':
          topArr.push($(this).get(0).offsetTop);
          $(this).attr('id', 'title' + i);
          html += `<li class="li-h4" title="${$(this).text()}">
              <a href="javascript:;" data-href="#title${i}" data-index="${i}">
                ${$(this).text()}
              </a>
            </li>`;
          break;
        case 'H5':
          topArr.push($(this).get(0).offsetTop);
          $(this).attr('id', 'title' + i);
          html += `<li class="li-h5" title="${$(this).text()}">
              <a href="javascript:;" data-href="#title${i}" data-index="${i}">
                ${$(this).text()}
              </a>
            </li>`;
          break;
        case 'H6':
          topArr.push($(this).get(0).offsetTop);
          $(this).attr('id', 'title' + i);
          html += `<li class="li-h6" title="${$(this).text()}">
              <a href="javascript:;" data-href="#title${i}" data-index="${i}">
                ${$(this).text()}
              </a>
            </li>`;
          break;
      }
    });
  if (html.length) {
    $('#post-menu .sidebar-panel-ul').html(html);
    $('#post-menu').parent().show();
  }
};
