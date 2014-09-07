Ext.define('MarketCatalog.view.catalogItemImageView', {
    extend: 'Ext.form.Panel',
    xtype: 'catalogitemimageview',
    requires: [
        'Ext.Img',
        'Ext.Carousel'
    ],
    ref: {
        mcarousel: '#mcarousel'
    },
    config: {
        title: 'عکس محصول',
        layout: 'fit',
        pinHeaders: true,
        minHeight: '400px',
        scrollable: true,
        fullscreen: true,
        items: [
            {
                xtype: 'carousel',
                id: 'mcarousel',
                direction: 'horizontal',
                buffer: 2,
                items: []
            }
        ]
    },

    updateStore: function (data, index) {
        if (!index) {
            index = 0;
        }
        if (data) {
            var items = [];
            for (i = 0; i < data.length; i++) {
                items.push({
                    xtype: 'image',
                    cls: 'carousel-item-img',
                    src: data.getAt(i).get('src')
                });
            }
            // fill items into carousel
            this.down('#mcarousel').setItems(items);
            this.down('#mcarousel').setActiveItem(index);
        }
    }
});