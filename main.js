//con esto realizamos una solicitud GET a la API de Datamuse
//para encontrar palabras que riman


const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy='; 
//'rel_rhy=' es el comienzo de un parametro para la cadena de consulta.
//Este parametro limitara su busqueda a palabras que rimen


const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


const getSuggestions = () => {
  const wordQuery = inputField.value;
  //toma el valor de lo que se ingrese en el input y lo  guardo en la variable
  const endpoint = url + queryParams + wordQuery;
  //almacenara el valor de toda la URL y la cadena de consulta.
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'; //cuando los datos se envian de vuelta estaran en formato JSON
  xhr.onreadystatechange = () =>{
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  xhr.open('GET', endpoint);
  xhr.send();
}


const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

//renderRawResponse(), me enviara la respuesta sin procesar de la api