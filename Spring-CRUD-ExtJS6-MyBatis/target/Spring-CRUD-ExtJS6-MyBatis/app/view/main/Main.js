Ext.define('Compagny.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Compagny.view.main.MainController',
        'Compagny.view.main.MainModel',
        'Compagny.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    
        items: [{
            xtype: 'mainlist'
        }]

});
