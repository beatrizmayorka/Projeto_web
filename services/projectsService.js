var getProjects = function() {
    var projects = [
        {
            id: 1,
            name: 'Projeto: Server-Side',
            image: 'project1.jpg',
            description: 'Primeiro projeto de criação do site na linguagem Javascript',
            subject: 'Programação Server-Side'
        },
    ];

    return projects;
}

module.exports = {
    getProjects: getProjects
}
