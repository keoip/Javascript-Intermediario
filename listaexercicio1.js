 
 let condicional = (MediaAluno)=>{
   if(MediaAluno < 5 ){
      console.log( MediaAluno.toFixed(2) + ' Aluno reprovado!')
   } else if(MediaAluno >= 5 && MediaAluno <= 7){
      console.log( MediaAluno.toFixed(2) + ' Aluno em recuperação!')
   } else{
      console.log(MediaAluno.toFixed(2) + ' Aluno passou de semestre!')
   }
 }

 let main = (nota1Aluno, nota2Aluno, nota3Aluno)=>{
   const MediaAluno = (nota1Aluno + nota2Aluno + nota3Aluno) / 3
   return MediaAluno
 }

 let mediaAluno = main(3, 8, 10)

 condicional(mediaAluno)