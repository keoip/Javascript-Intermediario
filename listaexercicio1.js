 const nota1Aluno = 2.0
 const nota2Aluno = 3.0
 const nota3Aluno = 8.0
 const MediaAluno = (nota1Aluno + nota2Aluno + nota3Aluno) / 3

 if(MediaAluno < 5 ){
    console.log( MediaAluno.toFixed(2) + ' Aluno reprovado!')
 } else if(MediaAluno >= 5 && MediaAluno <= 7){
    console.log( MediaAluno.toFixed(2) + ' Aluno em recuperação!')
 } else{
    console.log(MediaAluno.toFixed(2) + ' Aluno passou de semestre!')
 }