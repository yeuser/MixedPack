Ext.define('MarketCatalog.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navView: 'navview',
            home: 'homeview',
            product_but: '#product_but',
            cataloglist: 'cataloglist',
            catalogItemView: 'catalogitemview',
            pictureList: '#pictureList',
            catalogitemimageview: 'catalogitemimageview'
        },

        control: {
            navView: {
                push: 'onNavViewPush',
                pop: 'onNavViewPop'//,
            },

            home: {
                activeitemchange: 'changeTitle'
            },

            cataloglist: {
                itemtap: 'openItemView'
            },

            pictureList: {
                itemtap: 'openItemImageView'
            },

            product_but: {
                tap: 'openList'
            },

            'button[action=openList]': {
                tap: 'openList'
            },

            'button[action=back2list]': {
                tap: 'back2List'
            },

            'button[action=back2item]': {
                tap: 'back2item'
            }
        }
    },

    refreshTitle: function () {
        var activeTabTitle = '';
        var activeItem = this.getNavView().getActiveItem();
        if (activeItem.xtype == "homeview") {
            activeTabTitle = this.getHome().getTitle();
        } else {
            activeTabTitle = activeItem.title;
            if (!activeTabTitle || activeTabTitle === undefined) {
                activeTabTitle = activeItem._title;
            }
        }
        this.getNavView().getNavigationBar().setTitle(activeTabTitle);
    },

    onNavViewPush: function (view, item) {
//        var editButton = this.getEditButton();
        /*if (item.xtype == "contact-show") {
         //this.getContacts().deselectAll();

         this.showEditButton();
         } else {
         this.hideEditButton();
         }*/
        this.refreshTitle();
    },

    onNavViewPop: function (view, item) {
        /*if (item.xtype == "contact-edit") {
         this.showEditButton();
         } else {
         this.hideEditButton();
         }*/
        this.refreshTitle();
    },

    changeTitle: function (container, value, oldValue, eOpts) {
        //console.log(value.title);
        if (container.xtype == "homeview") {
            this.getNavView().getNavigationBar().setTitle(container.getTitleByItemId(value.getItemId()));
        } else {
            if (value.title && value.title !== undefined) {
                this.getNavView().getNavigationBar().setTitle(value.title);
            } else if (value._title && value._title !== undefined) {
                this.getNavView().getNavigationBar().setTitle(value._title);
            }
        }
    },

    pushNewView: function () {
        var activeTabTitle = this.getTabView().getActiveItem().title;
        var controller = this;
        controller.getNavView().push({
            title: 'Second',
            html: 'Second view!'
        });
        controller.getNavView().getNavigationBar().getBackButton().setText(activeTabTitle);
        controller.getNavView().getNavigationBar().getBackButton().on('tap', function (self) {
            controller.getNavView().getNavigationBar().setTitle(activeTabTitle);
        });
    },

    openItemView: function (list, index, node, record) {
        if (!this.catalogItemView) {
            this.catalogItemView = Ext.create('MarketCatalog.view.catalogItemView');
        }
        // Bind the record onto the show contact view
        this.catalogItemView.updateRecord(record);

        // Push the show contact view into the navigation view
        this.getNavView().push(this.catalogItemView);

    },

    openItemImageView: function (list, index, node, record) {
        if (!this.catalogItemImageView) {
            this.catalogItemImageView = Ext.create('MarketCatalog.view.catalogItemImageView');
        }

        var store = list.getStore();
        if (store && store.getData() && store.getData().length) {
            // Bind the store,index onto the show contact view
            this.catalogItemImageView.updateStore(store.getData(), index);
            // Push the show contact view into the navigation view
            this.getNavView().push(this.catalogItemImageView);
        }
    },

    openList: function () {
        console.log("openList");
        this.getHome().setActiveItem(1);
    },

    //called when the Application is launched, remove if not needed
    launch: function (app) {
        this.refreshTitle();
    }
});