const clientes = [
    {nome:"Rafael", email: "rafael@gmail.com", status: true},
    
    { nome: "Fernanda", email: "fernanda@gmail.com", status: true },

    { nome: "João", email: "joao@gmail.com", status: false },

    { nome: "Maria", email: "maria@gmail.com", status: false },

    { nome: "Ana", email: "ana@gmail.com", status: true },
];
    
    const busca = clientes.filter(data => data.status === true );
   
     console.log(busca);