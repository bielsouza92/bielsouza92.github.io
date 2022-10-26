let myImg = document.querySelector('img');

myImg.onclick = function (){
    let meuSrc = myImg.getAttribute('src');

    if (meuSrc === 'imagens/carro-prata.png') {
        myImg.setAttribute ('src','imagens/caminhao-cinza.png');
    }else{
        myImg.setAttribute ('src','imagens/carro-prata.png');
    };
};

let myButton = document.querySelector('button');
let myHead = document.querySelector('h2');

function userNameDefine(){
    let myName = prompt('Favor, digite seu nome: ');
    if (!myName || myName === null){
        userNameDefine();
    }else{    
        localStorage.setItem('nome', myName);
        myHead.textContent = 'Os melhores carros estão aqui, ' + myName + '!';
    };
}

if (!localStorage.getItem('nome')){
    userNameDefine();
}else{
    let savedName = localStorage.getItem("nome");
    myHead.textContent = 'Os melhores carros estão aqui, ' + savedName + '!';
}

myButton.onclick = function() {userNameDefine();}