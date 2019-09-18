var getNoticias = function() {
    var noticias = [
        {
            id: 1,
            title: 'Notícia 1',
            image: 'noticia1.jpg',
            description: 'Bolsonaro e Guedes vão anistiar dívida bilionária do agronegócio',
            link: 'https://www.conversaafiada.com.br/economia/bolsonaro-e-guedes-vao-anistiar-divida-bilionaria-do-agronegocio'
        },

        {
            id: 2,
            title: 'Notícia 2',
            image: 'noticia2.jpg',
            description: 'Amazônia: áreas cujo desmatamento levou a ações na Justiça foram queimadas neste ano',
            link: 'https://oglobo.globo.com/sociedade/amazonia-areas-cujo-desmatamento-levou-acoes-na-justica-foram-queimadas-neste-ano-23948650'
        },

        {
            id: 3,
            title: 'Notícia 3',
            image: 'noticia3.jpg',
            description: 'Por que a nova tecnologia que habita o iPhone 11 será o futuro de tudo',
            link: 'https://computerworld.com.br/2019/09/17/por-que-a-nova-tecnologia-que-habita-o-iphone-11-sera-o-futuro-de-tudo/'
        },

        {
            id: 4,
            title: 'Notícia 4',
            image: 'noticia4.jpg',
            description: 'GTA San Andreas fica de graça no PC',
            link: 'https://www.techtudo.com.br/dicas-e-tutoriais/2019/09/gta-san-andreas-fica-de-graca-no-pc-veja-como-baixar.ghtml'
        },

        {
            id: 5,
            title: 'Notícia 5',
            image: 'noticia5.jpg',
            description: 'Hospital Albert Einstein lança agência de notícias de saúde',
            link: 'https://www1.folha.uol.com.br/equilibrioesaude/2019/09/hospital-albert-einstein-lanca-agencia-de-noticias-de-saude.shtml'
        }
    ];

    return noticias;
}

module.exports = {
    getNoticias: getNoticias
}
