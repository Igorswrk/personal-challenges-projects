
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        
        // Campos da tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // Qual ong criou o caso, armazena o id da ong
        table.string('ong_id').notNullable(); 

        //  Chave estrangeira para pegar a id da ong na outra tabela
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
