const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')
Database.then(async db => {
    // inserir dados na tabela 
   /* await saveOrphanage(db, { 
        lat: "-22.8185356",
        lng: "-47.2563912",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "3523523523",
        images: [
            "https://images.unsplash.com/photo-1602622931974-78228760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600712243809-7a3dd4e68fff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário das visitas das 18h até as 8h",
        open_on_weekends: "1"
    })*/
    // consultar dados da tabela 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = //"2"')
    //console.log(orphanage)

    // deletar dado da tabela 
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    
})