Ext.define('CatalogTemplate.view.itemslist', {
    extend: 'Ext.Container',
	xtype: 'itemslist',
    requires: ['CatalogTemplate.model.CatalogItem',
				'CatalogTemplate.view.catalogItemView',
				'CatalogTemplate.view.CatalogList'],
    config: {
		
		layout:'fit',
		height: '100%',
        width : '100%',
        //cls: 'demo-list',
        items: [{
            width: Ext.os.deviceType == 'Phone' ? null : '100%',
            height: Ext.os.deviceType == 'Phone' ? null : '100%',
            xtype: 'cataloglist',
			listeners:{
            itemtap: function(list, index, e, event) {
                //Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('itemType'), Ext.emptyFn);
				//var vieew = Ext.create('CatalogTemplate.view.CatalogView', { id: 'Speakers' });
				var record = list.getStore().getAt(index);
				var vieew = Ext.Viewport.add({
						xtype: 'catalogitemview',
						id: 'itemInfoView',
						layout:'fit',
						html:'find new one',
						height: '100%',
						width:'100%',
						zIndex: 100,
						backgroundColor: 'red'
					});
					//Ext.get('.catalogview .x-input-text[name="description"]').setValue('hello');
					//getMainView().push(vieew);
					Ext.getCmp('materialField').setValue(record.get('itemMaterial'));
					Ext.getCmp('priceField').setValue('تومان '+record.get('itemPrice'));
					Ext.getCmp('descriptionField').setValue(record.get('itemDescription'));
					//Ext.getCmp('descriptionField').reset();
					Ext.getCmp('descriptionField').addCls(record.get('itemAvailable')===true ? 'update-text-green-right' : 'update-text-red-right');
					Ext.getCmp('descriptionField').setValue(record.get('itemAvailable')===true ? 'موجود است' : 'موجود نیست');
					Ext.getCmp('mainFieldset').setTitle(record.get('itemName',null));
					for(i=0;i<record.get('pictures').length;i++)
					{
						Ext.getCmp('pictureCarousel').add(
							{
								xtype: 'image',
								src: 'resources/resources/images/'+record.get('pictures')[i],
								margin : '20 0 0 0',
								height: '80%',
							}
						);
					}
					Ext.Viewport.setActiveItem(vieew);
					//vieew.show();
            }
			},
            store: 'CatalogItemList',
			grouped: true,
            //itemTpl: '{itemName}'
        }]
    }
});