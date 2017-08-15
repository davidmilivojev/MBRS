(function (angular) {

    angular.module("proApp")
        .service('bankService', ['$http', '$rootScope', 'REST_END_POINT', function ($http, $rootScope, REST_END_POINT) {
          return {
            getAll: function (onSuccess, onError) {
                var req = {
                    method: 'GET',
                    url: REST_END_POINT.concat('/bank/'),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                $http(req).then(onSuccess, onError);
            },
            get: function(id,onSuccess,onError){
                var req = {
                    method: 'GET',
                    url: REST_END_POINT.concat('/bank/') + id,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                $http(req).then(onSuccess, onError);
            },
            add: function (element, onSuccess, onError) {

                $http.post(REST_END_POINT.concat('/bank'),element).then(onSuccess,onError);
            },
            edit: function (element, onSuccess, onError) {
                $http.post(REST_END_POINT.concat('/bank/edit/'+ element._id),element).then(onSuccess,onError);
            },
            delete: function(id, onSuccess, onError){
                $http.post(REST_END_POINT.concat('/bank/'+ id)).then(onSuccess,onError);
            }
        }
          }]);

})(angular);