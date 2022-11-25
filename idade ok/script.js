function Verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.lenght == 0 || fano.value > ano ) { 
    window.alert('[ERROR!] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML = `Idade Calculada: ${idade}`
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')}
    if ( fsex[0].checked) {
        gênero = 'Homem'
        if(idade >= 0 && idade < 10)
        { //Criança
         img.setAttribute('src','foto-bebe-m.jpg')
        }
        
        else if(idade < 21){ //jovem
            img.setAttribute('src','foto-jovem-m.jpg')
        }
       
        else if ( idade < 50) {
            //adulto
        img.setAttribute('src','foto-adulto-m.jpg')
        }
        
        else { //idoso
        img.setAttribute('src','foto-idoso-m.jpg')} 

         } if (fsex[1].checked) {
        gênero = 'Mulher'
     if (idade >=  0 && idade < 10) {
            img.setAttribute('src','foto-bebe-f.jpg')
             //Criança 
            }
       
        else if(idade < 21) {
            //jovem
            img.setAttribute( 'src','foto-jovem-f.jpg')
        }
        
        else if ( idade < 50) {
            //adulto
            img.setAttribute('src','foto-adulto-f.jpg')
        }
        
        else {
             //idoso
             img.setAttribute('src','foto-idosa-f.jpg')
        }
    
    } 
    else if ( fsex[2].checked) 
    { gênero = 'Gay'
    img.setAttribute('src' ,'bonuslgbt.jpg')}

    res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} 
    anos.`
    res.appendChild(img)}
