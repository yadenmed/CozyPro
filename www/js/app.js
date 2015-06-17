
var app =angular.module('QRCode', ['ionic', 'QRCode.controllers','fab-component','tabSlideBox','ionMdInput'])

.run(function($ionicPlatform,$cordovaBarcodeScanner,$state,$rootScope,$ionicPopup,$ionicPlatform,$ionicModal,$ionicHistory,$ionicLoading,ProductService,ClientService,$ionicSideMenuDelegate) {

$rootScope.showMenu = function(){
    $rootScope.menu=true;
  }
$rootScope.hideMenu = function(){
    $rootScope.menu=false;
    $ionicSideMenuDelegate.toggleLeft();
  }
  $rootScope.showParam = function(){
      $rootScope.parametres=true;
    }
  $rootScope.hideParam = function(){
      $rootScope.parametres=false;
      $ionicSideMenuDelegate.toggleLeft();
    }
    $rootScope.refresh = true;
  // Data
$rootScope.clients =ClientService.getAllClients();
$rootScope.products=ProductService.getAllProducts();
$rootScope.productType=["Chauffages électriques","Chauffe-eau","Climatisation / Ventilation","Pompes à chaleur / Chaudières"];
  
  $rootScope.currentEquipement={};
  $rootScope.currentErreur={};
  $rootScope.urlId=0;
  $ionicModal.fromTemplateUrl('templates/menu-choice.html', function($ionicModal) {

          $rootScope.modalMenuChoice = $ionicModal;
      }, {
          // Use our scope for the scope of the modal to keep it simple
          scope: $rootScope,
          // The animation we want to use for the modal entrance
          animation: 'slide-in-up',
          focusFirstInput : true
      });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
 

  $rootScope.QRScan = function(){
   
  $cordovaBarcodeScanner.scan().then(function(imageData) {

    $ionicPlatform.registerBackButtonAction(function () {
                        $state.go($ionicHistory.currentStateName());
                }, 100);
          if(imageData.text){
            $rootScope.currentEquipement = $rootScope.products[1];
            $rootScope.urlId = 1;
            $rootScope.modalMenuChoice.show();
          }
           
        }, function(error) {
            console.log("An error happened -> " + error);
        });
 }

$rootScope.go = function(x){
  $state.go(x);
}
})

.config(function($stateProvider, $urlRouterProvider, $compileProvider,$ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
  $stateProvider


  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'MenuCtrl'
  })

  .state('login', {
    url: "/",
   
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
     
        })
  .state('app.categories', {
    url: "/categories",
    views: {
      'menuContent': {
        templateUrl: "templates/categories.html",
        controller: 'CategoriesCtrl'
      }
    }
  })
  .state('app.products', {
  url: "/products",
  views: {
    'menuContent': {
      templateUrl: "templates/products.html",
      controller: 'ProductsCtrl'
    }
  }
  })
 .state('app.clients', {
 url: "/clients",
 views: {
   'menuContent': {
     templateUrl: "templates/clients.html",
     controller: 'ClientsCtrl'
   }
 }

  })
  .state('app.client', {
 url: "/client/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/client.html",
     controller: 'ClientCtrl'
   }
 }
 
  })
  .state('app.client-equipements', {
 url: "/client-equipements/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/client-equipements.html",
     controller: 'ClientCtrl'
   }
 }
 
  })
   
.state('app.theorie-formation', {
 url: "/theorie-formation/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/theorie-formation.html",
     controller: 'TheorieFormation'
   }
 }
 
  })
  .state('app.installation-mise-en-service', {
 url: "/installation-mise-en-service/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/installation-mise-en-service.html",
     controller: 'InstallationMiseEnService'
   }
 }
  })
  .state('app.aide-diagnostic', {
 url: "/aide-diagnostic/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/aide-diagnostic.html",
     controller: 'AideDiagnostic'
   }
 }
 
  })
  .state('app.pieces-accessoires', {
 url: "/pieces-accessoires/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/pieces-accessoires.html",
     controller: 'PiecesAccessoires'
   }
 } 
})
.state('app.carnet-entretien', {
 url: "/carnet-entretien/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/carnet-entretien.html",
     controller: 'CarnetEntretien'
   }
 }
 
  })
.state('app.utilisation', {
 url: "/utilisation/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/utilisation.html",
     controller: 'Utilisation'
   }
 }
 
  })
.state('app.contact-services', {
 url: "/contact-services/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/contact-services.html",
     controller: 'ContactServices'
   }
 }
 
  })
.state('app.caracteristiques-performances', {
 url: "/caracteristiques-performances/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/01-01-caracteristiques-performances.html",
     controller: 'TheorieFormation'
   }
 }
 
  })
.state('app.dysfonctionnements', {
 url: "/dysfonctionnements/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/03-02-dysfonctionnements.html",
     controller: 'AideDiagnostic'
   }
 }
 
  })
.state('app.erreurs', {
 url: "/erreurs/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/03-01-assistant-erreurs.html",
     controller: 'AideDiagnostic'
   }
 }
 
  })
.state('app.quick-installation', {
 url: "/quick-installation/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/02-02-quick-installation.html",
     controller: 'InstallationMiseEnService'
   }
 }
 
  })
.state('app.quick-start', {
 url: "/quick-start/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/06-01-quick-start.html",
     controller: 'Utilisation'
   }
 }
 
  })
  .state('app.vue-eclatee', {
 url: "/vue-eclatee/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/04-01-vue-eclatee.html",
     controller: 'PiecesAccessoires'
   }
 } 
})
  .state('app.contact-sav', {
   url: "/contact-sav/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/07-01-contact-sav.html",
       controller: 'ContactServices'
     }
   } 
  })
  .state('app.parametres', {
   url: "/parametres",
   views: {
     'menuContent': {
       templateUrl: "templates/parametres.html",
       controller: 'MenuCtrl'
     }
   } 
  })
  .state('app.intervention', {
   url: "/intervention",
   views: {
     'menuContent': {
       templateUrl: "templates/intervention.html",
       controller: 'Intervention'
     }
   } 
  })
  .state('app.mise-en-service', {
   url: "/mise-en-service",
   views: {
     'menuContent': {
       templateUrl: "templates/mise-en-service.html",
       controller: 'miseEnService'
     }
   } 
  });

  
  $urlRouterProvider.otherwise('/'); 
  
  // $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo|sms|tel):/);

});

