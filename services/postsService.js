var getPosts = function() {
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Cabine de comando do avião',
            body: 'A cabine de um Boeing é ocupada pelo comandante e o copiloto. As atribuições são as mesmas, mas o comandante é o responsável pela aeronave e cabe a ele decolar e pousar. As demais tarefas são divididas. Normalmente, porém, o copiloto se comunica com os órgãos de controle, preenche o plano de voo e checa os procedimentos.'
        },

        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Azul tem trimestre recorde e esperança de conseguir tudo em Congonhas',
            body: 'Companhia aérea encerrou segundo trimestre com alta acima das expectativas, em mescla de eficiência na própria operação e sorte com a saída da Avianca'
        },

        {
            id: 3,
            title: 'Post 3',
            image: 'post3.jpg',
            description: 'Aeroporto',
            body: 'Um Aeroporto é um aeródromo público dotado de instalações e facilidades para apoio de operações de aeronaves, embarque e desembarque de pessoas e/ou coisas. Aeroportos precisam ser de fácil acesso a estradas, para o transporte de passageiros, trabalhadores e carga do aeroporto a outras cidades.'
        }
    ];

    return posts;
}

module.exports = {
    getPosts: getPosts
}
