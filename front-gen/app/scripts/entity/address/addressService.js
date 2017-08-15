(function (angular) {

    angular.module("proApp")
        .service('addressService', ['$http', '$rootScope', 'REST_END_POINT', function ($http, $rootScope, REST_END_POINT) {
          return {
            getAll: function (onSuccess, onError) {
                var req = {
                    method: 'GET',
                    url: REST_END_POINT.concat('/address/'),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                $http(req).then(onSuccess, onError);
            },
            get: function(id,onSuccess,onError){
                var req = {
                    method: 'GET',
                    url: REST_END_POINT.concat('/address/') + id,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                $http(req).then(onSuccess, onError);
            },
            add: function (element, onSuccess, onError) {

                $http.post(REST_END_POINT.concat('/address'),element).then(onSuccess,onError);
            },
            edit: function (element, onSuccess, onError) {
                $http.post(REST_END_POINT.concat('/address/edit/'+ element._id),element).then(onSuccess,onError);
            },
            delete: function(id, onSuccess, onError){
                $http.post(REST_END_POINT.concat('/address/'+ id)).then(onSuccess,onError);
            }
        }
          }]);

})(angular);