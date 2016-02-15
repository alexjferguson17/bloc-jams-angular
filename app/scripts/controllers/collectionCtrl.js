(function() {
    function CollectionCtrl(Fixtures) {
        this.albums =  Fixtures.getCollection(100);
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl',  CollectionCtrl);
})();
