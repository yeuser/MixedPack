Ext.define('MarketCatalog.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'homeview',
    requires: [
        'Ext.TitleBar',
        'Ext.Carousel',
        'Ext.form.FieldSet',
        'Ext.Img',
        'MarketCatalog.view.CatalogView',
        'MarketCatalog.view.CatalogList'
    ],
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',

        title: '',
        iconCls: 'info',

        items: [
            {
                itemId: 'home_info_page',
                title: 'مبلمان امینی',
                iconCls: 'home',
                align: 'center',
                margin: '0 auto',

                maxWidth: '400px',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'درباره ما',
                        align: 'right',
                        buttonAlign: 'center',
                        style: {
                            'text-align': 'right'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                margin: '20 20',
                                html: 'توضیحات در مورد نمایشگاه مبلمان امینی',
                                style: {
                                    'border-radius': '0.5em 0.5em 0em 0em',
                                    'font-size': '1.2em',
                                    'text-align': 'right'
                                }
                            },
                            {
                                xtype: 'field',
                                margin: '0 10 0 10',
                                html: 'نمایشگاه مبلمان امینی در سال 1333 هجری شمسی توسط مرحوم حاج حسن امینی در بازار شهر تهران بنیانگذاری شد و به خاک سپرده شد',
                                fieldStyle: 'text-align:right',
                                cls: 'align-text-right',
                                style: 'text-align:right',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                label: 'و‌ب‌سایت',
                                labelAlign: 'right',
                                margin: '0 0 0 10',
                                value: 'http://www.yahoo.com',
                                style: 'text-align:right',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                margin: '0 0 0 10',
                                label: 'آدرس',
                                labelAlign: 'right',
                                value: 'خیابان پانزده خرداد - پلاک 143',
                                cls: 'align-text-right',
                                style: 'text-align:right',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                margin: '0 0 0 10',
                                label: 'تلفن',
                                labelAlign: 'right',
                                value: '021-66666666',
                                style: 'text-align:right',
                                readOnly: true
                            }
                        ]
                    },
                    {
                        xtype: 'image',
                        margin: '0 auto',
                        src: 'resources/images/map.jpg',
//                        style: ' vertical-align: middle; text-align: center',
                        height: '300px',
                        align: 'center'
                    }/*,
                    {
                        xtype: 'button',
                        id: 'product_but',
                        text: 'مشاهده محصولات',
                        action: 'openList',
                        width: '50%',
                        style: ' margin:0 auto; margin-bottom:20px; text-align: center'
                    }*/
                ]
            },

            {
                itemId: 'home_product_page',
                title: 'محصولات',
                iconCls: 'products',
                items: [
                    {
                        xtype: 'cataloglist'
                    }
                ]
            }
        ]
    },
    getTitle: function () {
        if (this.getActiveItem().getItemId() === 'home_product_page') {
            return 'محصولات';
        }
        return 'مبلمان امینی';
    },
    getTitleByItemId: function (itemId) {
        if (itemId === 'home_product_page') {
            return 'محصولات';
        }
        return 'مبلمان امینی';
    }
});
