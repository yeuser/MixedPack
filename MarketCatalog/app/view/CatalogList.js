Ext.define('MarketCatalog.view.CatalogList', {
    extend: 'Ext.List',
    xtype: 'cataloglist',
    requires: [
        'MarketCatalog.model.CatalogItem'
    ],

    config: {
        layout: 'fit',
        height: '100%',
        width: '100%',

        useSimpleItems: false,
        variableHeights: true,
        infinite: true,
        disableSelection: true,
        allowDeselect: false,
        scrollToTopOnRefresh: false,
        store: 'CatalogItemList',

        plugins: [
            //{ xclass: 'Ext.plugin.ListPaging' },
        ],

        emptyText: '<p class="no-searches">No tweets found matching that search</p>',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="catalog-item">',
            '<img src="resources/images/{mainPic}" />',
            '<div class="tweet">',
            '<h2>{itemName}</h2>',
            '<p>{itemDescription}</p>',
            '</div>',
            {
                //posted: timeAgoInWords
            }
        )
    }
});