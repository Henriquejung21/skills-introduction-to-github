function inserir(valor){
    document.getElementById('visor').value += valor;
}
function limpar(){
    document.getElementById('visor').value = '';
}
function calcular(){
    try {
        const resultado = eval(document.getElementById('visor').value);
        document.getElementById('visor').value = resultado;
    } catch (e) {
        alert('expressao invalida!');
    }
}