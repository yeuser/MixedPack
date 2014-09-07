Ext.define('MarketCatalog.view.CatalogView', {
    extend: 'Ext.Carousel',
    xtype: 'catalogview',
	requires: [
        'Ext.form.FieldSet',
        'Ext.field.Toggle',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.Button'
    ],
    config: {
		title: 'کاتالوگ',
				iconCls: 'search',
				xtype: 'carousel',
				direction: 'horizontal',
				height: '100%',
				items: [
					{	
						title: 'شمیم',
						style: 'background-color: #ffff00;text-align	: right',
						xtype: 'fieldset',
						margin: '0 0 0 0',
						items: [
							{
								name: 'material',
								xtype: 'textfield',
								label: 'جنس',
								labelAlign: 'right',
								value : 'چوب گردو',
								cls   : 'align-text-right',
								style: 'text-align:right',
								readOnly: true
							},
							{
								name: 'price',
								xtype: 'textfield',
								label: 'قیمت',
								labelAlign: 'right',
								value : '2,000,000 تومان',
								cls   : 'align-text-right',
								style: 'text-align	: right',
								readOnly: true
							},
							{
								
								name: 'description',
								xtype: 'textfield',
								label: 'توضیحات',
								labelAlign: 'right',
								value: 'موجود نیست',
								cls : 'update-text-red-right',
								style: 'text-align	: right;color:red',
								readOnly: true
							},
							{
								xtype: 'image',
								src: 'resources/images/1.jpg',
								margin : '20',
								height: 300
							}
						]
					},
					{
						title: 'فیروزه',
						style: 'background-color: aqua;text-align	: right',
						xtype: 'fieldset',
						margin: '0 0 0 0',
						items: [
							{
								name: 'material',
								xtype: 'textfield',
								label: 'جنس',
								labelAlign: 'right',
								value : 'چوب بلوط',
								cls   : 'align-text-right',
								style: 'text-align:right',
								readOnly: true
							},
							{
								name: 'price',
								xtype: 'textfield',
								label: 'قیمت',
								labelAlign: 'right',
								value : '1,500,000  تومان',
								cls   : 'align-text-right',
								style: 'text-align	: right',
								readOnly: true
							},
							{
								name: 'description',
								xtype: 'textfield',
								label: 'توضیحات',
								labelAlign: 'right',
								value: 'موجود است',
								cls : 'update-text-green-right',
								style: 'text-align	: right',
								readOnly: true
							},
							{
								xtype: 'image',
								margin : '20',
								src: 'resources/images/1.jpg',
								height: 300
							}
						]
					}
				]
    }
});