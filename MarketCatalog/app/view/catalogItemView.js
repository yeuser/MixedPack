Ext.define('MarketCatalog.view.catalogItemView', {
    extend: 'Ext.form.Panel',
    xtype: 'catalogitemview',
    requires: [
        'MarketCatalog.model.CatalogItemImage',
        'MarketCatalog.store.CatalogItemImageList',
        'MarketCatalog.view.catalogItemImageView',
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.List',
        'Ext.Carousel'
    ],
    config: {
        title: 'اطلاعات محصول',
        scrollable: true,
        items: [
            {
                style: 'text-align:right',
                xtype: 'fieldset',
                id: 'mainFieldset',
                width: '90%',
                maxWidth: '400px',
                margin: '0 auto',
                items: [
                    {
                        name: 'material',
                        xtype: 'textfield',
                        id: 'materialField',
                        label: 'جنس',
                        labelAlign: 'right',
                        value: '---',
                        cls: 'align-text-right',
                        style: 'text-align:right',
                        readOnly: true
                    },
                    {
                        name: 'price',
                        xtype: 'textfield',
                        id: 'priceField',
                        label: 'قیمت',
                        labelAlign: 'right',
                        value: '---',
                        cls: 'align-text-right',
                        style: 'text-align	: right',
                        readOnly: true
                    },
                    {

                        name: 'description',
                        xtype: 'textfield',
                        id: 'descriptionField',
                        label: 'توضیحات',
                        labelAlign: 'right',
                        value: '---',
                        cls: 'update-text-red-right',
                        style: 'text-align	: right;color:red',
                        readOnly: true
                    }
                ]
            }
            ,
            {
                xtype: 'panel',
                id: 'picturePanel',
                scrollable: false,
                minHeight: '250px',
                width: 'auto',
                margin: '20px 5px 5px 5px',
                layout: 'fit',
                items: [
                    {
                        xtype: 'dataview',
                        itemTpl: new Ext.XTemplate('<div class="image_prev"><img class="img" src="{src}" style="background-image: url(\'{src}\');" /></div>'),
                        store: 'CatalogItemImageList',
                        grouped: false,
                        inline: { wrap: false },
                        scrollable: {
                            direction: 'horizontal',
                            directionLock: true
                        },
                        minHeight: '250px',
                        id: 'pictureList',
                        itemId: 'pictureList'
                    }
                ]
            }
        ]
    },

    updateRecord: function (record) {
        if (record) {
            this.down('#materialField').setValue(record.get('itemMaterial'));
            this.down('#priceField').setValue(record.get('itemPrice') + ' ریال');
            this.down('#descriptionField').setValue(record.get('itemDescription'));
            this.down('#descriptionField').addCls(record.get('itemAvailable') === true ? 'update-text-green-right' : 'update-text-red-right');
            this.down('#descriptionField').setValue(record.get('itemAvailable') === true ? 'موجود است' : 'موجود نیست');
            this.down('#mainFieldset').setTitle(record.get('itemName', null));
            var store = this.down('#pictureList').getStore();
            store.removeAll();
            for (i = 0; i < record.get('pictures').length; i++) {
                var _src = 'resources/images/' + record.get('pictures')[i];
                store.add({src: _src});
            }
            this.record = record;
        }
    }
});