Ext.define('MarketCatalog.model.CatalogItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['itemType', 'itemMaterial', 'itemName', 'itemPrice', 'itemDescription', 'pictures', 'itemAvailable', 'mainPic']
    }
});