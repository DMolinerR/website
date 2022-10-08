import { serve } from "./deps.ts";


let pokemon = '';

/*fetch("https://pokeapi.co/api/v2/pokemon/150")
  .then((res) => res.json())
  .then((response) => {
    //console.log(response.name);
    pokemon = response.name;
  });*/

let response = await fetch("https://pokeapi.co/api/v2/pokemon/150");
let json = await response.json();
pokemon = json.name;

// guardar info en el servidor (hasta 10MB, se guarda aunque se reinicie el server)
//localStorage.setItem('name', pokemon);
// recuperar informacion guardada en el servidor
//console.log(localStorage.getItem('name'));

// sessionStorage hace lo mismo pero la informacion solo se guarda mientras el servidor sigue corriendo
//sessionStorage.setItem('name', pokemon);

serve((req) => new Response("Hello " + pokemon + "!"));