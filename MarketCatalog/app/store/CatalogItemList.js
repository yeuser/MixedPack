Ext.define("MarketCatalog.store.CatalogItemList", {
    extend: 'Ext.data.Store',
    alias: 'store.CatalogItemList',
    config: {
        model: 'MarketCatalog.model.CatalogItem',
        sorters: 'itemType',
        grouper: function (record) {
            return record.get('itemType');
        },
        data: [
            {itemType: 'chairs', itemName: 'goldie', itemMaterial: 'چوب', itemPrice: '100,000', itemDescription: 'not Available', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true },
            {itemType: 'chairs', itemName: 'boldie', itemMaterial: 'چوب', itemPrice: '200,000', itemDescription: 'not Available', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true },
            {itemType: 'chairs', itemName: 'moldie', itemMaterial: 'چوب', itemPrice: '300,000', itemDescription: 'not Available sssss sssss ssss ssss ssssssss sssss ssss ssss ssssssss sssss ssss ssss ssssssss sssss ssss ssss sss', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true },
            {itemType: 'tables', itemName: 'marstable', itemMaterial: 'چوب', itemPrice: '100,000', itemDescription: 'not Available', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true },
            {itemType: 'chairs', itemName: 'shamim', itemMaterial: 'چوب', itemPrice: '100,000', itemDescription: 'not Available', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true },
            {itemType: 'chairs', itemName: 'firooze', itemMaterial: 'چوب', itemPrice: '100,000', itemDescription: 'not Available', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true },
            {itemType: 'chairs', itemName: 'marshall', itemMaterial: 'چوب', itemPrice: '100,000', itemDescription: 'not Available', pictures: ['1.jpg', '1.jpg'], mainPic: '1.jpg', itemAvailable: true }
        ]
    }
});
