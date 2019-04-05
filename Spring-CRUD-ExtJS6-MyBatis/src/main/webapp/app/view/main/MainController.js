Ext.define('Compagny.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'Ext.Viewport',
        'Compagny.view.main.EmployeeForm',
        'Compagny.view.main.List'
    ],

    model: 'Compagny.model.Personnel',
    store: 'Compagny.store.Personnel',
    views   : ['List', 'EmployeeForm'],
    refs    : [{
      ref   : 'formWindow',
      xtype : 'employeeform',
      selector: 'employeeform',
      ref: 'employeegrid',
      selector: 'employeegrid'
    }],

    onAddClick: function (button, e, eOpts) {
        var window = Ext.create('Compagny.view.main.EmployeeForm');
        window.setTitle('Add employee');
    },

    onDeleteClick: function(btn, e, eOpts){
        var grid = this.lookupReference('employeegrid');
            record = grid.getSelectionModel().getSelection(),
            store = grid.getStore();
        if (!record.length) {
            Ext.Msg.alert('Information', 'No employee selected.')
            return;
        }
        Ext.Msg.show({
            title: 'Delete personnel',
            msg: 'Do you want to delete this employee? ',
            buttons: Ext.MessageBox.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn == 'yes') {
                    console.log('deleting employee');
                    console.log(record);
                    store.remove(record);
                    store.sync();
                }
                
            }
        });
     
    },
    
    onUpdateClick: function(){
        var grid = this.lookupReference('employeegrid'),
          record = grid.getSelectionModel().getSelection();
        if (!record.length) {
            Ext.Msg.alert('Information', 'No employee selected.')
            return;
        }
        var window = Ext.create('Compagny.view.main.EmployeeForm');
        window.setTitle('Update Employee');
        var form = window.down('form').loadRecord(record[0]);
    },
    
    onRefreshClick: function(){
    	var grid = this.lookupReference('employeegrid'),
    		store = grid.getStore();
    	store.reload();
    },

    onSubmitClick: function(button, e, eOpts){
        var window = button.up('window');
        windowTitle = window.getTitle(),
             form = window.down('form'),
             values = form.getValues(), 
             record = form.getRecord(),
             grid = this.lookupReference('employeegrid'),
             store = grid.getStore();

        if (windowTitle == 'Update Employee') {
            record.set(values);
            store.sync({
            	callback: function() {
            		store.reload();
            	}
            });

        } else {
            if (!form.isValid()) {
                Ext.Msg.alert('Status', 'Invalid data');
                return;
            }
             var employee = Ext.create('Compagny.model.Personnel', {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber
            });
                store.add(employee);
                store.sync({
                	callback: function(){
                		store.reload();
                	}
                });   
        }
        
        window.close();
    },

    onCancelButtonClick: function(button, e, eOpts){
        var window = button.up('window'),
        form = window.down('form');
        form.getForm().reset();
        window.close();
    },

    onResetButtonClick: function(button, e, eOpts){
        button.up('window').down('form').reset(); 
        
    }
});
