Ext.define('Compagny.model.Personnel', {
    extend: 'Compagny.model.Base',

    
    fields: [
        {name: 'employee_id', type: 'int'} , 
        {name: 'firstName', type: 'string'}, 
        {name: 'lastName', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phoneNumber', type: 'string'}
     ]
});