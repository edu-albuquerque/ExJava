let elementoH1 = document.querySelector("h1");

console.log(elementoH1);
console.log(elementoH1.innerText);

let elementoA = document.querySelector("a");

console.log(elementoA);
console.log(elementoA.innerText)

let elementoUl = document.querySelector("ul");

elementoUl.innerHTML = `
<ul>
    <li>Elemento de lista 01</li>
    <li>Elemento de lista 02</li>
    <li>Elemento de lista 03</li>

</ul>
`


console.log(elementoUl);


let elementoOl = document.querySelector("ol");

elementoOl.innerHTML = `
<ol><a href="https://globo.com">Globo</a></ol>
<ol><a href="https://google.com">Google</ol>
<ol><a href="https://uol.com.br">Uol</ol>

`

console.log(elementoOl);
