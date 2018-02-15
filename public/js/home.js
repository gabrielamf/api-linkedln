$(".button-collapse").sideNav();

const $firstnameUser = $('#firstname');
const $lastnameUser = $('#lastname');
const $imgUser = $('#photo-user');
const $headlineUser = $('#headline');
const $connectionsUser = $('#connections');

function uerDates() {
  let ruta = localStorage.pictureUrl;
  $imgUser.attr('src', ruta);
  $firstnameUser.text(localStorage.firstName);
  $lastnameUser.text(localStorage.lastName);
  $headlineUser.text(localStorage.headline);
  $connectionsUser.text(localStorage.connections); 
}

uerDates();