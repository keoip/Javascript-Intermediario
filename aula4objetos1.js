class Pessoa {
    nome;
    age;

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.age}`)
    }
}

const Kelvin = new Pessoa()
Kelvin.nome = 'kelvin'
Kelvin.age = 17

const Renato = new Pessoa()
Renato.nome = 'Renato'
Renato.age = 56

console.log(Kelvin)
console.log(Renato)