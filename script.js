// Variavel de busca

// const buscaBanda = prompt("Digite a banda que você procura!").toLocaleUpperCase()


// itens (bandas) objetos

let banda1 =  { 
    nome:"Slowdive",
    anosFund: 33,
    emAtv: true,
    musicas: ["Alison", "When The Sun Hits", "Sing"]
}

let banda2 = {
    nome: "The Jesus And Mary Chain",
    anosFund: 38,
    emAtv: true,
    musicas: ["Just Like Honey", "Darklands", "Some Candy Talking"]
}


let banda3 = {
    nome: "My Bloody Valentine",
    anosFund: 39,
    emAtv: false,
    musicas: ["Loomer", "Only Shallow", "Sometimes"]
}

// média com soma
console.log("A média da soma dos anos de fundação de cada banda é de:", banda1.anosFund + banda2.anosFund + banda3.anosFund % 3, "!")

// Armazenamento de bandas

const todasBandas = [banda1, banda2, banda3]
const bandas = [] // Em atividade
const bandasFalsaATV = [] // Sem atividade

// Verificação de Atividade e Inserção no armazenamento

if (banda1.emAtv === true){
    bandas.push(banda1)
} else {
    bandasFalsaATV.push(banda1)
    // alert("Slowdive não está em atividade, portanto, ficou fora das bandas em atividade.")
}

if(banda2.emAtv === true){
    bandas.push(banda2)
} else {
    bandasFalsaATV.push(banda2)
    // alert("The Jesus And Mary Chain não está em atividade, portanto, ficou fora das bandas em atividade.")
}

if (banda3.emAtv === true){
    bandas.push(banda3)
} else {
    bandasFalsaATV.push(banda3)
    // alert("My Bloody Valentine não está em atividade, portanto, ficou fora das bandas em atividade.")
}

console.log("Bandas ainda em atividade:", bandas)
console.log("Bandas que não estão mais em atividade:",bandasFalsaATV)

// Refazendo o relatório/músicas (Caracteristicas na array agora em string)

function relatorioMusicas (msc){
    let todasMusicas = ""
    for (let i=0; i< msc.musicas.length;i ++) {
        todasMusicas +=msc.musicas[i]+", "
    }
    msc.nome = msc.nome.toLocaleUpperCase()
    msc.musicas = todasMusicas
    return msc
}
/* Chamando a função */

relatorioMusicas(banda1)
relatorioMusicas(banda2)
relatorioMusicas(banda3)


// relatório

console.log("---RELATÓRIO COM LAÇOS---")

for (band of todasBandas){
    for (i in band){
        console.log(`${i}: ${band[i]}`)
    }
    console.log("-------------------")
}

//  função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto. (sem3. ex3)

function oneString (obj) {
    let texto =""
    for(let i in obj) {
        texto = texto + `${i}: ${obj[i]}\n`;
    }
    return texto;
}

const logObjEmString = (band) => {
    console.log(oneString(band[0]));
    console.log(oneString(band[1]));
}

console.log("---RELATÓRIO COM TODOS OS VALORES STRING---")
logObjEmString(bandas)
logObjEmString(bandasFalsaATV)

// função de busca (sem3. ex4)



//disponibilidade
console.log("Bandas disponiveis no site:", banda1, banda2, banda3)





