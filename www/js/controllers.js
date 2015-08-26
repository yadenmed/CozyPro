angular.module('QRCode.controllers', ['ngCordova'])

.controller('MenuCtrl', function($scope, $ionicModal, $timeout,$rootScope) {
 
})

.controller('LoginCtrl', function($scope) {

})
.controller('CategoriesCtrl', function($scope,$rootScope) {


})
.controller('ClientsCtrl', function($scope) {
 
 $scope.searchKey={text:''};
	$scope.clear = function(){
		$scope.searchKey.text = '';
		
	}
})
.controller('ClientCtrl', function($scope,$ionicModal,$ionicPopup,$rootScope,$stateParams) {

$scope.client = $rootScope.clients[$stateParams.id];
$scope.idClient = $stateParams.id;
$scope.clientEdit = angular.copy($scope.client);
$scope.clientEquipements=[];
$scope.clientInterventions = $rootScope.clients[$stateParams.id].interventions;

 //Acoordion list
$scope.toggleGroup = function(group) {
   if ($scope.isGroupShown(group)) {
     $scope.shownGroup = null;
   } else {
     $scope.shownGroup = group;
   }
 };
 $scope.isGroupShown = function(group) {
   return $scope.shownGroup === group;
 };

for (var i=0; i<$scope.client.equipements.length; i++) 
        $scope.clientEquipements.push($rootScope.products[$scope.client.equipements[i]]);
        

$ionicModal.fromTemplateUrl('templates/client-edit.html', function($ionicModal) {
        $scope.modalEdit = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up',
        focusFirstInput : true
    });

$ionicModal.fromTemplateUrl('templates/client-interventions.html', function($ionicModal) {
        $scope.modalInterventions = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up',
        focusFirstInput : true
    });

$ionicModal.fromTemplateUrl('templates/menu-choice.html', function($ionicModal) {
        $scope.modalMenuChoice = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up',
        focusFirstInput : true
    });
    $scope.showModalMenuChoice = function(id){
      $rootScope.currentEquipement = $scope.clientEquipements[id];
      $rootScope.urlId = $scope.client.equipements[id];
      $scope.modalMenuChoice.show();
    }   
   
   $scope.save = function(){
   	$scope.client = $scope.clientEdit;
   	$scope.modalEdit.hide();
   	$ionicPopup.alert({
                title: '<strong>Modification réussie</strong>',
                template: "<center>Les informations du client <strong>"+$scope.client.nom+"</strong> ont été mises à jour</center>",
                okType: 'button-stable'
              });

   }

})
.controller('ProductsCtrl', function($scope,$rootScope,$ionicModal,$state,$interval) {

$scope.loadProducts= false;

$interval(function(){ $scope.loadProducts = true;}, 1000);

	$scope.searchKey={text:''};
  $scope.clear = function(){
    $scope.searchKey.text = '';
    
  }


  $ionicModal.fromTemplateUrl('templates/menu-choice.html', function($ionicModal) {
          $scope.modalMenuChoice = $ionicModal;
      }, {
          // Use our scope for the scope of the modal to keep it simple
          scope: $scope,
          // The animation we want to use for the modal entrance
          animation: 'slide-in-up',
          focusFirstInput : true
      });
      $scope.showModalMenuChoice = function(id){
        $rootScope.currentEquipement  = angular.copy($rootScope.products[id]);
        $rootScope.urlId = id;
        $scope.modalMenuChoice.show();
        
      }   

})
.controller('TheorieFormation',function($scope,$rootScope,$stateParams,$ionicScrollDelegate){
 
 $scope.id=$stateParams.id;
 
 $scope.caracteristiques = $rootScope.products[$scope.id].caracteristiques;
 $scope.performances = $rootScope.products[$scope.id].performances;

 $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop();
  };

 //Accordion list
 $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})
.controller('1ereMiseEnService',function($scope,$rootScope,$stateParams,$ionicScrollDelegate){
 
 $scope.id=$stateParams.id;
 
 $scope.caracteristiques = $rootScope.products[$scope.id].caracteristiques;
 $scope.performances = $rootScope.products[$scope.id].performances;

})
.controller('MaintenanceIntervention',function($scope,$rootScope,$stateParams,$ionicScrollDelegate){
 
 $scope.id=$stateParams.id;
 

})
.controller('SupportDoc',function($scope,$rootScope,$stateParams,$ionicScrollDelegate,$cordovaInAppBrowser){
 
 $scope.id=$stateParams.id;
 
 
 $scope.openNotice = function(){
 var options = {
 location: 'yes',
 clearcache: 'yes',
 toolbar: 'yes'
 };
 $cordovaInAppBrowser.open('https://drive.google.com/file/d/0BxWDnIMT4XvnbnR3MXpQNGsxME0/view?usp=sharing', '_system',options);
      
 };


})
.controller('Guide',function($scope,$rootScope,$stateParams,$ionicScrollDelegate){
 
 $scope.id=$stateParams.id;
 
})
.controller('InstallationMiseEnService',function($scope,$rootScope,$stateParams,$ionicModal){
  $scope.id=$stateParams.id;
  $scope.checklist=$rootScope.products[$scope.id].checklist;

  
  
})
.controller('AideDiagnostic',function($scope,$rootScope,$stateParams,$ionicPopup,$ionicModal){
  $scope.id=$stateParams.id;

  $scope.dysfonctionnements = $rootScope.products[$scope.id].dysfonctionnements;
  $scope.erreurs = $rootScope.products[$scope.id].erreurs;

//Dysfonctionnements

  //Acoordion list
 $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

  //Solution Popup
  $scope.diags='';
  $scope.solutionPopup = function(diags){
    $scope.diags=angular.copy(diags);
    $ionicPopup.show({
        template: '<div class="list wrapping-list"><ion-item class="item item-icon-left" ng-repeat = "diag in diags"><i class="icon ion-android-done"></i>{{diag}}</ion-item></div>',
        title: '<b>Solution</b>',
        scope: $scope,
        buttons: [
          
          {
            text: 'OK',
            type: 'button-stable',
            onTap: function(e) {
             this.close();
            }
          }
        ]
      });
    
  }
  $scope.query={text:''};
   $scope.search = function (item){
       if (angular.lowercase(item.id).indexOf(angular.lowercase($scope.query.text))!=-1 || angular.lowercase(item.title).indexOf(angular.lowercase($scope.query.text))!=-1) {
               return true;
           }
           return false;
     };
     //Assistant d'erreurs 
       $ionicModal.fromTemplateUrl('templates/modal-assistant-erreurs.html', function($ionicModal) {
               $scope.modalAssistantErreurs = $ionicModal;
           }, {
               // Use our scope for the scope of the modal to keep it simple
               scope: $scope,
               // The animation we want to use for the modal entrance
               animation: 'slide-in-up',
               focusFirstInput : true
           });

       $scope.showModalAssistantErreurs = function(numErr){

        $rootScope.currentErreur = angular.copy($scope.erreurs[numErr]);
        $scope.currentErrorTitle = angular.copy($rootScope.currentErreur.title);

        $scope.modalAssistantErreurs.show();

       }
  
})
.controller('Diagnostic',function($scope,$rootScope,$stateParams,$ionicPopup,$ionicModal){
  $scope.id=$stateParams.id;

  $scope.dysfonctionnements = $rootScope.products[$scope.id].dysfonctionnements;
  $scope.erreurs = $rootScope.products[$scope.id].erreurs;


  
})
.controller('Panier',function($scope,$rootScope,$stateParams,$ionicPopup,$ionicModal){
  
    $scope.searchKey={text:''};
    $scope.clear = function(){
      $scope.searchKey.text = '';
      
    }

    $scope.envoyerMail = function(){
      
      $ionicPopup.show({
          template: '<input type="email" autofocus>',
          title: '<b>Transférer le contenu du panier</b>',
          subTitle: 'Veuillez saisir l\'email',
          scope: $scope,
          buttons: [
            
            {
              text: 'OK',
              type: 'button-stable'
            
            }
          ]
        });
}
})
.controller('InterfaceProduit',function($scope,$rootScope,$stateParams,$ionicPopup,$ionicModal){
  $scope.id=$stateParams.id;

  


  
})
.controller('AssistantErreurs',function($scope,$rootScope,$stateParams){

  $scope.yes=function(){
    if($rootScope.currentErreur.yes)
      $rootScope.currentErreur = $rootScope.currentErreur.yes;
  }

  $scope.no = function(){
    if($rootScope.currentErreur.no)
      $rootScope.currentErreur = $rootScope.currentErreur.no;
  }


})
.controller('PiecesAccessoires',function($scope,$rootScope,$stateParams,$ionicModal,$ionicScrollDelegate,$location){
  
  
  $scope.id=$stateParams.id;
  $scope.pieces=$rootScope.products[$scope.id]["pieces"];
  $ionicModal.fromTemplateUrl('templates/modal-vue-eclatee.html', function($ionicModal) {
          $scope.modalVueEclatee = $ionicModal;
      }, {
          // Use our scope for the scope of the modal to keep it simple
          scope: $scope,
          // The animation we want to use for the modal entrance
          animation: 'slide-in-up',
          focusFirstInput : true
      });
   
   $scope.searchKey={ text : ''};
   $scope.clear = function(){
    $scope.searchKey.text = '';
    
   }

   $scope.scrollTo = function(id) {
    $location.hash(id);
    $ionicScrollDelegate.anchorScroll();
};
  
})
.controller('CarnetEntretien',function($scope,$rootScope,$stateParams){
 
  $scope.id=$stateParams.id;
 
  
})
.controller('Utilisation',function($scope,$rootScope,$stateParams){
  $scope.id=$stateParams.id;
  $scope.quickStart=$rootScope.products[$scope.id]["quick start"];
})
.controller('ContactServices',function($scope,$rootScope,$stateParams){
  $scope.id=$stateParams.id;
  $scope.contacts=$rootScope.products[$scope.id]["contacts"];

})
.controller('Intervention',function($scope,$rootScope,$stateParams){
  

})
.controller('miseEnService',function($scope,$rootScope,$stateParams,$timeout,$ionicPopup,$ionicModal){
  
  $scope.step=0;

  $scope.message ="Assurez vous d'avoir bien branché le pass Bluetooth sur votre produit, puis appuyer sur commencer."; 

  $scope.startMiseEnService = function(){
    $scope.step = 1;
    $scope.message ="Connexion en cours ...";

      $timeout(function(){
        $ionicPopup.confirm({
             title: 'Vérifications hydrauliques',
             template: 'Avez vous bien fait les vérifications hydrauliques ?',
             cancelText: 'Non',
             okText:'Oui',
             cancelType:'button-outline button-assertive',
             okType:'button-balanced'
           }).then(function(res) {
            if(res) {
              $scope.step = 2;
              $scope.message ="Synchronisation des paramètres ...";
              $timeout(function(){
                $scope.step = 4;
                $scope.message ="Paramétrage";
              },2000);
            } else {
              $scope.step = 3;
              $scope.message ="Faites les vérifications hydrauliques, et appuyer sur suivant.";
            }
          });
      },2000);
   
  }
  $scope.nextStep = function(){
    $scope.step = 2;
    $scope.message ="Synchronisation des paramètres ...";
    $timeout(function(){
      $scope.step = 4;
      $scope.message ="Paramétrage";
    },2000);
  }

  $scope.chart = {
      labels : [1, 2],
      datasets : [
          {
              fillColor : "rgba(151,187,205,0)",
              strokeColor : "#e67e22",
              pointColor : "rgba(151,187,205,0)",
              pointStrokeColor : "#e67e22",
              data : [0,5]
              
          }
      ]
  };

  $scope.chartOptions = {
          animation: false,
          scaleOverride: true,
          scaleStepWidth: 1,
          scaleSteps : 5,
          scaleStartValue : 0,
          scaleBeginAtZero: true,
          showScale: true,
          showTooltips: false        
      };

      $ionicModal.fromTemplateUrl('templates/config-favoris.html', function($ionicModal) {
              $scope.favConfig = $ionicModal;
          }, {
              // Use our scope for the scope of the modal to keep it simple
              scope: $scope,
              // The animation we want to use for the modal entrance
              animation: 'slide-in-up'
          });

})
.controller('IHMNAEMA',function($scope,$rootScope,$stateParams){
 
  $scope.id=$stateParams.id;

  //Prog
    $scope.progChauffage = $rootScope.products[$scope.id]["prog-chauffage"];
    

    //Acoordion list
   $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };
    
    //Chart loi d'eau
    $scope.chart = {
        labels : [1, 2],
        datasets : [
            {
                fillColor : "rgba(151,187,205,0)",
                strokeColor : "#e67e22",
                pointColor : "rgba(151,187,205,0)",
                pointStrokeColor : "#e67e22",
                data : [0,5]
                
            }
        ]
    };

    $scope.chartOptions = {
            animation: false,
            scaleOverride: true,
            scaleStepWidth: 1,
            scaleSteps : 5,
            scaleStartValue : 0,
            scaleBeginAtZero: true,
            showScale: true,
            showTooltips: false        
        };
  
});
