
var app =angular.module('Cozypro', ['ionic', 'QRCode.controllers','fab-component','tabSlideBox','ionMdInput','angles'])

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

// $rootScope.productType=["Chauffages électriques","Chauffe-eau","Climatisation / Ventilation","Pompes à chaleur / Chaudières"];
  
  $rootScope.currentEquipement=$rootScope.products[1];
  $rootScope.currentErreur={};
  $rootScope.urlId=1;
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
            $state.go('app.maintenance-intervention',{id:1});
            $rootScope.showMenu();
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
  .state('app.1ere-mise-en-service', {
   url: "/1ere-mise-en-service/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/1ere-mise-en-service.html",
       controller: '1ereMiseEnService'
     }
   }
   
    })
  .state('app.maintenance-intervention', {
   url: "/maintenance-intervention/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/maintenance-intervention.html",
       controller: 'MaintenanceIntervention'
     }
   }
   
    })
  .state('app.support-doc', {
   url: "/support-doc/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/support-doc.html",
       controller: 'SupportDoc'
     }
   }
   
    })
  .state('app.guide', {
   url: "/guide/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/guide.html",
       controller: 'Guide'
     }
   }
   
    })
  .state('app.interface-produit', {
   url: "/interface-produit/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/interface-produit.html",
       controller: 'InterfaceProduit'
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
  .state('app.diagnostic', {
 url: "/diagnostic/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/diagnostic.html",
     controller: 'Diagnostic'
   }
 }
 
  })
   .state('app.panier', {
  url: "/panier",
  views: {
    'menuContent': {
      templateUrl: "templates/panier.html",
      controller: 'Panier'
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
.state('app.tunnel-diagnostic', {
 url: "/tunnel-diagnostic/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/tunnel-diagnostic.html",
     controller: 'AideDiagnostic'
   }
 }
 
  })
.state('app.codes-erreurs', {
 url: "/codes-erreurs/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/codes-erreurs.html",
     controller: 'AideDiagnostic'
   }
 }
 
  })
.state('app.check-list', {
 url: "/check-list/:id",
 views: {
   'menuContent': {
     templateUrl: "templates/check-list.html",
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
  })
  .state('app.naema-menu', {
   url: "/naema-menu/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/menu.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-configuration-circuits', {
   url: "/naema-configuration-circuits/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/configuration-circuits.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-configuration-generateur', {
   url: "/naema-configuration-generateur/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/configuration-generateur.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-modes-en-cours', {
   url: "/naema-modes-en-cours/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/modes-en-cours.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-fonctions-maintenance', {
   url: "/naema-fonctions-maintenance/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/fonctions-maintenance.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-parametres', {
   url: "/naema-parametres/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/parametres.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-circuit-direct', {
   url: "/naema-circuit-direct/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/circuit-direct.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-circuit-melange', {
   url: "/naema-circuit-melange/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/circuit-melange.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-circuit-ecs', {
   url: "/naema-circuit-ecs/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/circuit-ecs.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-purge-circuits', {
   url: "/naema-purge-circuits/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/purge-circuits.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-test-entrees-sorties', {
   url: "/naema-test-entrees-sorties/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/test-entrees-sorties.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-loi-eau', {
   url: "/naema-loi-eau/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/loi-eau.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-temperature-consigne', {
   url: "/naema-temperature-consigne/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/temperature-consigne.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-programmation-horaire-chauffage-zone1', {
   url: "/naema-programmation-horaire-chauffage-zone1/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/programmation-horaire-chauffage-zone1.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-configuration-circuit-ecs', {
   url: "/naema-configuration-circuit-ecs/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/configuration-circuit-ecs.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-programmation-circuit-ecs', {
   url: "/naema-programmation-circuit-ecs/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/programmation-circuit-ecs.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-consignes-circuit-ecs', {
   url: "/naema-consignes-circuit-ecs/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/consignes-circuit-ecs.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-gestion-anti-legionnelles-circuit-ecs', {
   url: "/naema-gestion-anti-legionnelles-circuit-ecs/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/gestion-anti-legionnelles-circuit-ecs.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  .state('app.naema-reglage-combustion', {
   url: "/naema-reglage-combustion/:id",
   views: {
     'menuContent': {
       templateUrl: "templates/IHM NAEMA/reglage-combustion.html",
       controller: 'IHMNAEMA'
     }
   } 
  })
  ;

  
  $urlRouterProvider.otherwise('/'); 
  
  // $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo|sms|tel):/);

});

