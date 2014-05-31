angular.module('mvApp',['ngResource','ngRoute','leaflet-directive'])



angular.module('mvApp').config(function($routeProvider, $locationProvider){



  var routeRoleChecks={
    admin:{auth:function(mvAuth){
        return mvAuth.authoriseCurrentUserForRoute('admin');
      }
    },
    user:{auth:function(mvAuth){
        return mvAuth.authoriseAuthenticatedUserForRoute();
      }
    }
  }

  //this means that we don't need to provide a hash in local href links
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/',{templateUrl:'/partials/main/main', controller:'mvMainCtrl'})
    .when('/home',{templateUrl:'/partials/home/home',
      resolve:routeRoleChecks.user})
    .when('/admin/users', {templateUrl:'/partials/admin/user-list',
      controller:'mvUserListCtrl',resolve: routeRoleChecks.admin
    })
    .when('/signup',{templateUrl:'/partials/account/signup',
      controller:'mvSignUpCtrl'
    })
    .when('/profile',{templateUrl:'/partials/account/profile',
      controller:'mvProfileCtrl', resolve:routeRoleChecks.user
    })
    .when('/dem', {templateUrl:'/partials/dem/dem-points',
      controller:'mvDemPointsCtrl',resolve:routeRoleChecks.user
    })
    .when('/solar', {templateUrl:'/partials/solar/solar-points',
      controller:'mvSolarPointsCtrl',resolve:routeRoleChecks.user
    })
    .when('/wind', {templateUrl:'/partials/wind/wind-points',
      controller:'mvWindPointsCtrl',resolve:routeRoleChecks.user
    })
    .when('/map', {templateUrl:'/partials/map/renewables-map',
      controller:'mvRenewablesMapCtrl',resolve:routeRoleChecks.user
    })
});

angular.module('mvApp').run(function($rootScope,$location){
  $rootScope.$on('$routeChangeError',function(evt,current,previous,rejection){
    if(rejection==='not authorised') {
      $location.path('/');
    }
  });
})



