const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); //falta el #
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');

async function displayUser(username) {  //falta el async para que funcione el await al ser una promesa asincrona
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  //falta traer el json
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; /*se cambian apostrofes por bactips */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` /* se agrega el $n que si esta declarado */
}

displayUser('stolinski').catch(handleError);
