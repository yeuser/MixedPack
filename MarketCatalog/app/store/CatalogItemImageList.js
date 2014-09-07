Ext.define("MarketCatalog.store.CatalogItemImageList", {
    extend: 'Ext.data.Store',
    alias: 'store.CatalogItemImageList',
    config: {
        model: 'MarketCatalog.model.CatalogItemImage',
        data: [
        ],
        sorters: 'src',
        grouper: function (record) {
            return record.get('src');
        }
    }
});