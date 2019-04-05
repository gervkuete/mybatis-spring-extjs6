Ext.define('Compagny.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Compagny.model.Personnel',
    
    autoLoad: true,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        api: {
            create: 'https://dashboard.heroku.com/apps/spring-mybatis/addEmployee',
            read:   'https://dashboard.heroku.com/apps/spring-mybatis/loadEmployees',
            update: 'https://dashboard.heroku.com/apps/spring-mybatis/updateEmployee',
            destroy:'https://dashboard.heroku.com/apps/spring-mybatis/deleteEmployee'
        },
        reader: {
            type: 'json',
            successProperty: true,
            rootProperty: 'employees'
        } ,
        writer: {
            type: 'json',
            encodeRequest: true,
            rootProperty: 'employee',
            writeAllFields: true
        } 
    }

});
