Ext.define('Compagny.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Compagny.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    reference: 'employeegrid',
    
    initComponent: function() {
        Ext.apply(this, {
            columns: [
                { text: 'Employee_id',  dataIndex:  'employee_id', flex: 1 },
                { text: 'First Name',  dataIndex: 'firstName', flex: 1 },
                { text: 'Last Name',  dataIndex: 'lastName', flex: 1 },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone Number', dataIndex: 'phoneNumber', flex: 1 }
            ],
        
            tbar: [{
                xtype: 'button',
                text: 'Add Employee',
                handler: 'onAddClick'
            }, {
                xtype: 'button',
                text: 'Delete Employee',
                reference: 'deleteEmployee',
                handler: 'onDeleteClick',
                disabled: false
            }, {
                xtype: 'button',
                text: 'Update Employee',
                reference: 'updateEmployee',
                handler: 'onUpdateClick',
                disabled: false
            }, {
                xtype: 'button',
                text: 'Refresh',
                reference: 'btnRefresh',
                handler: 'onRefreshClick',
            }]
        });
        this.callParent(arguments);
    },
});
