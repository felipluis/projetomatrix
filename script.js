const textarea = document.querySelector('.textarea')
const mensagem = document.querySelector('.textarea2')





// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
// Função para o botão

    function btncriptografar() {

        if (textarea.value === '') {
            alert('Digite Um Texto!')
        }else{
            const textoEncriptado = criptografar(textarea.value);
            mensagem.value = textoEncriptado;
            textarea.value = '';
            mensageminvisivel();
        }



        
       
        
    }

    function btnDesencriptografar() {
       
        if (textarea.value === ''){
            alert('Digite Um Texto')
        }else{
            const textoDescriptado = descriptografar(textarea.value);
            mensagem.value = textoDescriptado;
            textarea.value = '';        
            mensageminvisivel();
        }
       
       
        
        
    }

// função de criptografar



function btncopiar() {

    
    // Copia o texto do textarea para a área de transferência usando a Clipboard API
    navigator.clipboard.writeText(mensagem.value).then(function() {
    }).catch(function(error) {
        console.error('Erro ao copiar o texto: ', error);
    });
   
    mensagemvisivel();


}

// função para criptografar
function criptografar(TextoCriptografado) {
    let matrizcodigo = [['e', 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ifat']];
    TextoCriptografado = TextoCriptografado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if (TextoCriptografado.includes(matrizcodigo[i][0])) {
            TextoCriptografado = TextoCriptografado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }

    return TextoCriptografado
}

//  Função para descriptografar

function descriptografar(TextoDesencriptografado) {
    let matrizcodigo = [['e', 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ifat']];
    TextoDesencriptografado = TextoDesencriptografado.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++){
        if (TextoDesencriptografado.includes(matrizcodigo[i][1])) {
            TextoDesencriptografado = TextoDesencriptografado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }

    return TextoDesencriptografado
}

// Consts para tirar os elementos da direita
const textarea2 = document.querySelector( '.textarea2'  )
const h2 = document.querySelector('h2')
const p = document.querySelector('.p')
const img = document.querySelector('.img')
const copiar = document.querySelector('.copiar')





// Função para tirar a imagem quando o texto for codificado

function mensageminvisivel() {

    h2.style.display = 'none';
    p.style.display = 'none';
    img.style.display = 'none';
    textarea2.style.display = 'block';
    copiar.style.display = 'block';

}

function mensagemvisivel(){
    h2.style.display = 'block';
    p.style.display = 'block';
    img.style.display = 'block';
    textarea2.style.display = 'none';
    copiar.style.display = 'none';
    
}




   


