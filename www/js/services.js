app.factory('ProductService', function() {

	var products=[
      {
    "name" : "Chauffage X",
    "type" : {
      "label" : "Chauffage électrique",
      "id" :  0
      },
    "local":false,
    "size":"1.5",
    "image": "./img/products/indisponible.jpg"
    },
    {
    "name" : "Aéraulix 2",
    "type" : {
      "label" : "Ventilation / Chauffe-eau",
      "id" :  1
      },
    "local":true,
    "size":"3.5",
    "image": "./img/products/aerolix2.jpg",
    "vue eclatee": "./img/vues-eclatees/1-vue-eclatee.jpg",
    "caracteristiques":{
      "Dimensions":{
        "individuel":"1657 x l 588 x P 626",
        "collectif":"1657 x l 588 x P 626",
        "unite":"mm"
      },
      "Poids à vide":{
        "individuel":"80",
        "collectif":"78",
        "unite":"kg"
      },
      "Capacité de la cuve":{
        "individuel":"200",
        "collectif":"200",
        "unite":"L"
      },
      "Raccordement eau chaude /eau froide":{
        "individuel":"3/4 ’ ’",
        "collectif":"3/4 ’ ’",
        "unite":""
      },
      "Diamètre extérieur du tuyau de raccordement des condensats":{
        "individuel":"17",
        "collectif":"17",
        "unite":"mm"
      },
      "Protection anti-corrosion":{
        "individuel":"ACI Hybride",
        "collectif":"ACI Hybride",
        "unite":""
      },
      "Pression d’utilisation maximale":{
        "individuel":"10",
        "collectif":"10",
        "unite":"bar"
      },
      "Raccordement électrique":{
        "individuel":"230 V monophasé 50 Hz",
        "collectif":"230 V monophasé 50 Hz",
        "unite":"(tension / fréquence)"
      },
      "Puissance nominale absorbée par":{
        "individuel":"400",
        "collectif":"375",
        "unite":"W"
      },
      "Puissance absorbée par appoint électrique":{
        "individuel":"1800",
        "collectif":"1800",
        "unite":"W"
      },
      "Plage de réglage de la température de l’eau par pompe à chaleur":{
        "individuel":"45 à 62",
        "collectif":"45 à 62",
        "unite":"°C"
      },
      "Plage de température d’utilisation de la pompe à chaleur (température de l’air extrait)":{
        "individuel":"5 à 35",
        "collectif":"5 à 35",
        "unite":"°C"
      },
      "Débit d’air en configuration gainé sur la VMC":{
        "individuel":"35 à 265",
        "collectif":"35 à 265",
        "unite":"m3/h"
      },
      "Pression d’aspiration":{
        "individuel":"110 réglé en usine, 130 si caisson de répartition",
        "collectif":"110 réglé en usine, 130 si caisson de répartition",
        "unite":"Pa"
      },
      "Fluide frigorigène":{
        "individuel":"R134a* / 0,7",
        "collectif":"R134a* / 0,7",
        "unite":"-/Kg"
      },
      "Charge en fluide rapportée au volume d’eau":{
        "individuel":"0,00375",
        "collectif":"0,00375",
        "unite":"Kg/L"
      }
    },
    "performances":{
      "A un débit d’air de 150 m3/h":{
        "Coefficient de performance (COP)":{
          "individuel":"3,55",
          "collectif":"3,36",
          "unite":""
        },
        "Pes":{
          "individuel":"24,9",
          "collectif":"26,1",
          "unite":"W"
        },
        "Temps de chauffe (tr)":{
          "individuel":"11h58mn",
          "collectif":"11h58mn",
          "unite":""
        },
        "Température de référence (Tref)":{
          "individuel":"53,0",
          "collectif":"53,0",
          "unite":"°C"
        }
      },
      "A un débit d’air de 57 m3/h":{
        "Coefficient de performance (COP)":{
          "individuel":"3,21",
          "collectif":"3,23",
          "unite":""
        },
        "Pes":{
          "individuel":"28,0",
          "collectif":"27,8",
          "unite":"W"
        },
        "Temps de chauffe (tr)":{
          "individuel":"14h10mn",
          "collectif":"14h10mn",
          "unite":""
        },
        "Température de référence (Tref)":{
          "individuel":"53,1",
          "collectif":"53,1",
          "unite":"°C"
        }
      },
      "A un débit d’air de 35 m3/h":{
        "Coefficient de performance (COP)":{
          "individuel":"2,77",
          "collectif":"2,77",
          "unite":""
        },
        "Pes":{
          "individuel":"28,8",
          "collectif":"28,2",
          "unite":"W"
        },
        "Temps de chauffe (tr)":{
          "individuel":"17h01mn",
          "collectif":"17h01mn",
          "unite":""
        },
        "Température de référence (Tref)":{
          "individuel":"53,0",
          "collectif":"53,0",
          "unite":"°C"
        }
      },
      "Produit certifié NF Electricité Performance":{
        "Puissance acoustique***":{
          "individuel":"49,1***",
          "collectif":"45,7****",
          "unite":"dB(A)"
        }
      }
    },
    "dysfonctionnements":[
      {
        "symptome":"Pas d’eau chaude",
        "causes":[
          "Ce chauffe-eau est équipé du système anti chauffe à sec : si le chauffe-eau n’est pas rempli d’eau, l’anti chauffe à sec est activée et empêche l’alimentation électrique de l’élément chauffant."
        ],
        "diagnostics":[
          "Vérifiez que le chauffe-eau est bien rempli en ouvrant en robinet d’eau chaude.",
          "Vérifiez la connexion du connecteur et du fil de masse.",
          "Vérifier que la résistivité de l’eau est bien comprise entre 0,5 et 25 kOhms"
        ]
      },
      {
        "symptome":"Plus de chauffe / Pas d’eau chaude.",
        "causes":[
          "Pas d’alimentation électrique du chauffe-eau : contacteur jour/nuit hors service, fusibles, etc…",
          "Elément chauffant ou son câblage hors service.",
          "Circuit ouvert : filerie mal connectée ou coupée."
        ],
        "diagnostics":[
          "Examen visuel du raccordement de la filerie."
        ]
      }
    ],
    "quick start":[
      {
        "thumbnail":"./img/quick-start/1-step1.jpg",
        "label":"Je règle la date et l'heure",
        "description":{
          "label":"",
          "content":[

          ]
        },
        "images":[
          "./img/quick-start/1-step1-1.jpg",
          "./img/quick-start/1-step1-2.jpg",
          "./img/quick-start/1-step1-3.jpg"
        ]
      },
      {
        "thumbnail":"./img/quick-start/1-step2.jpg",
        "label":"J'active le pilotage intelligent",
        "description":{
          "label":"Qu’est-ce que le pilotage intelligent ?",
          "content":[
            "Adaptation du besoin en eau chaude en fonction du nombre de douches ou bains souhaité : il optimise ainsi votre confort et vos économies.",
            "En cas d’absence ou de départ en vacances, le chauffe-eau détecte et évite tout gaspillage d’eau chaude.",
            "Vous n’avez rien à faire, ODYSSÉE s’occupe de tout, tout seul !"
          ]
        },
        "images":[
          "./img/quick-start/1-step2-1.jpg",
          "./img/quick-start/1-step2-2.jpg"
        ]
      },
      {
        "thumbnail":"./img/quick-start/1-step3.jpg",
        "label":"Je pars en vacances",
        "description":{
          "label":"",
          "content":[
            "Je règle la date de départ et la date de retour"
          ]
        },
        "images":[
          "./img/quick-start/1-step3-1.jpg",
          "./img/quick-start/1-step3-2.jpg"
        ]
      },
      {
        "thumbnail":"./img/quick-start/1-step4.jpg",
        "label":"J'ai du monde à la maison, je veux plus d'eau chaude rapidement",
        "description":{
          "label":"",
          "content":[
            "Je règle la durée pendant laquelle je veux avoir le maximum d’eau chaude.",
            "À la fin de la durée que j’ai réglée, le chauffe-eau reprendra automatiquement son fonctionnement initial."
          ]
        },
        "images":[
          "./img/quick-start/1-step4-1.jpg",
          "./img/quick-start/1-step4-2.jpg"
        ]
      },
      {
        "thumbnail":"./img/quick-start/1-step5.jpg",
        "label":"Je veux avoir des informations sur mes consommations",
        "description":{
          "label":"",
          "content":[

          ]
        },
        "images":[
          "./img/quick-start/1-step5-1.jpg",
          "./img/quick-start/1-step5-2.jpg",
          "./img/quick-start/1-step5-3.jpg",
          "./img/quick-start/1-step5-4.jpg",
          "./img/quick-start/1-step5-5.jpg"
        ]
      }
    ],
    "quick installation":{
      "caution":"Effectuer le remplissage du ballon avant la mise sous tension.",
      "steps":[
        {
          "label":"Mise en place du chauffe-eau",
          "description":{
            "label":"",
            "content":[
              "L’étiquette signalétique située au-dessus de la sortie eau chaude doit être accessible à tout moment.",
              "Le chauffe-eau doit être installé sur un sol lisse et horizontal.",
              "Pour orienter les bouches, retirer les vis de blocage.",
              "Avant le remplissage, le chauffe-eau doit être mis de niveau à l’aide des pieds réglables (livrés séparément).",
              "Fixer le chauffe-eau au sol avec la sangle (l’oeillet permettant la fixation peut être positionné à droite ou à gauche)."
            ]
          },
          "images":[
            "./img/quick-installation/1-step1-1.jpg",
            "./img/quick-installation/1-step1-2.jpg"
          ]
        },
        {
          "label":"Raccordements hydrauliques",
          "description":{
            "label":"Branchement eau froide et eau chaude",
            "content":[
              "Un raccord diélectrique doit impérativement être installé sur la sortie eau chaude.",
              "Important : monter les accessoires hydrauliques livrés."
            ]
          },
          "images":[
            "./img/quick-installation/1-step2-1.jpg"
          ]
        },
        {
          "label":"Raccordements hydrauliques",
          "description":{
            "label":"Evacuation des condensats",
            "content":[
              "Insérer le tuyau d’évacuation des condensats sur le collecteur d’écoulement à l’arrière droite du produit.",
              "Fixer le clip de serrage sur le tuyau d’écoulement et le serrer dans la zone de recouvrement du tube et du collecteur.",
              "Raccorder l’autre extrémité du tuyau à l’évacuation des eaux usées au travers d’un siphon."
            ]
          },
          "images":[
            "./img/quick-installation/1-step2-1.jpg"
          ]
        },
        {
          "label":"Raccordements hydrauliques",
          "description":{
            "label":"Remplir le chauffe-eau",
            "content":[

            ]
          },
          "images":[
            "./img/quick-installation/1-step2-1.jpg"
          ]
        },
        {
          "label":"Raccordements aérauliques",
          "description":{
            "label":"Sur air ambiant",
            "content":[

            ]
          },
          "images":[
            "./img/quick-installation/1-step3-1.jpg",
            "./img/quick-installation/1-step3-2.jpg",
            "./img/quick-installation/1-step3-3.jpg"
          ]
        },
        {
          "label":"Raccordements aérauliques",
          "description":{
            "label":"Gainé sur air extérieur",
            "content":[

            ]
          },
          "images":[
            "./img/quick-installation/1-step3-4.jpg",
            "./img/quick-installation/1-step3-5.jpg",
            "./img/quick-installation/1-step3-6.jpg"
          ]
        },
        {
          "label":"Raccordements électriques",
          "description":{
            "label":"cf. page 19 de la notice",
            "content":[
              "Retrouvez les schémas électriques dans les pages de couverture de notice.",
              "Le chauffe-eau doit être alimenté électriquement de façon permanente."
            ]
          },
          "images":[
            "./img/quick-installation/1-step4-1.jpg"
          ]
        },
        {
          "label":"Mise en route",
          "description":{
            "label":"",
            "content":[
              "Mettez l’appareil sous tension puis suivez les indications affichées sur l’écran.",
              "Afin d’accéder au menu installateur, tournez la molette d’un demi-tour vers la droite tout en appuyant sur MENU."
            ]
          },
          "images":[

          ]
        }
      ]
    },
    "contact sav":{
      "departement":"Atlantic CLIM et Ventilation",
      "adresse":"13 boulevard Monge",
      "code postal":"69882",
      "ville":"MEYZIEU",
      "tel":"04 72 45 19 45",
      "num azur":"0810 0 810 69",
      "disponibilite":"Du lundi au jeudi de 8h à 12h30 et de 13h30 à 18h. Le vendredi, de 8h à 12h30 et de 13h30 à 16h30.",
      "site":"www.atlantic-ventilation.fr"
    },
    "pieces" :

    [
      {"id": "1", "label" : "FILTRE", "ref": "029370"},
      {"id": "2", "label" : "TRAPPE DE FILTRE AVEC PIECE THERMOFORMEE", "ref": "022499"},
      {"id": "3", "label" :" ENSEMBLE COIFFE POUR PIQUAGES D160MM", "ref": "022576"},
      {"id": "5", "label" : "VIROLE DROITE HABILLAGE PAC", "ref": "022596"},
      {"id": "6", "label" : "VIROLE GAUCHE HABILLAGE PAC", "ref": "022597"},
      {"id": "7", "label" : "VENTILATEUR POMPE A CHALEUR", "ref": "029271"},
      {"id": "8", "label" : "CARTER SEUL VENTILATEUR POMPE A CHALEUR", "ref": "029272"},
      {"id": "9", "label" :"SOCLE POMPE A CHALEUR","ref": "022504"},
      {"id": "10", "label" :"CONNEXION PIPETTE (ENT ONNOIR)","ref": "029273"},
      {"id": "11", "label" :"PIED FIXE","ref": "022599"},
      {"id": "12", "label" :"CAPOT DE FACADE AEROMAX VMC","ref": "022515"},
      {"id": "13", "label" :"PRESSOSTAT + FILERIE PAC","ref": "029274"},
      {"id": "14", "label" :"COMPRESSEUR","ref": "029275"},
      {"id": "16", "label" :"DETENDEUR POMPE A CHALEUR","ref": "029277"},
      {"id": "17", "label" :"SONDE DE PRESSION AVEC RACCORDEMENT AIR","ref": "029278"},
      {"id": "18", "label" :"THERMOSTAT DE SECURITE","ref": "070326"},
      {"id": "19", "label" :"BOITIER ELECTRONIQUE DE REGULATION","ref": "070327"},
      {"id": "20", "label" :"ENS. FILERIES ELECTRIQUES CHOD","ref": "026136"},
      {"id": "21", "label" :"ENS. SONDES DE TEMPERATURE (X3)","ref": "029279"},
      {"id": "22", "label" :"RESISTANCE STEATITE","ref": "099024"},
      {"id": "23", "label" :"JOINT A LEVRE","ref": "099060"},
      {"id": "24", "label" :"CORPS DE CHAUFFE + JOINT","ref": "030146"},
      {"id": "25", "label" :"ANODE ACI + BOUCHON","ref":  "040374"},
      {"id": "26", "label" :"PATTE DE FIXATION","ref": "022507"},
      {"id": "27", "label" :"CONDENSATEUR 7,5UF POUR COMPRESSEUR","ref": "026220"},
      {"id": "42", "label" :"TUYAU EVACUATION CONDENSATS V1BIS","ref": "029300"}
    ],
    "erreurs":[
      {
        "id":"3",
        "title":"Sonde ECS doigt de gant",
        "content":"Les connecteurs sont-ils bien en place sur la carte de régulation ?",
        "yes":{
          "content":"La sonde de température d'eau est-elle bien positionnée, au fond du doigt de gant ? (voir notice)",
          "yes":{
            "content":"Sonde HS",
            "code":"13A 003 002"
          },
          "no":{
            "content":"Corriger le positionnement",
            "code":"13A 003 003"
          }
        },
        "no":{
          "content":"Corriger la connectique",
          "code":"13A 003 001"
        }
      },
      {
        "id":"7",
        "title":"Courant de protection",
        "content":"L'appareil est-il plein d'eau ?",
        "yes":{
          "content":"Les connecteurs du circuit de protection de cuve ACI sont-ils bien en place sur la carte de régulation et en sortie du doigt de gant?",
          "yes":{
            "content":"Contacter le SAV",
            "code":"13A 007 002"
          },
          "no":{
            "content":"Corriger la connectique",
            "code":"13A 007 003"
          }
        },
        "no":{
          "content":"Remplir le chauffe-eau.",
          "code":"13A 007 001"
        }
      },
      {
        "id":"9",
        "title":"Détection eau trop chaude",
        "content":"La sonde de température d'eau percoit une témpérature supérieure à 80°C. Faites couler un robinet d'eau chaude. L'eau est-elle très chaude ?",
        "yes":{
          "content":"L'appoint électrique est-il alimenté (faire une mesure de tension aux bornes de la résistance ) ?",
          "yes":{
            "content":"Remplacer la carte de régulation.",
            "code":"13A 009 001"
          },
          "no":{
            "content":"Probable entartrage du chauffe-eau. Faire un détartrage.",
            "code":"13A 009 002"
          }
        },
        "no":{
          "content":"Les connecteurs du circuit de protection de cuve ACI sont-ils bien en place sur la carte de régulation et en sortie du doigt de gant?",
          "yes":{
            "content":"Les connecteurs sont-ils bien en place sur la carte de régulation ?",
            "yes":{
              "content":"La sonde de température d'eau est-elle bien positionnée, au fond du doigt de gant ? (voir notice)",
              "yes":{
                "content":"Sonde ECS doigt de gant HS",
                "code":"13A 009 004"
              },
              "no":{
                "content":"Corriger le positionnement de la sonde ECS doigt de gant",
                "code":"13A 007 005"
              }
            },
            "no":{
              "content":"Corriger la connectique",
              "code":"13A 007 003"
            }
          }
        }
      }
    ]
    },
    {
    "name" : "Ventilation X",
    "type" : {
      "label" : "Climatisation / Ventilation",
      "id" :  2
      },
    "local":false,
    "size":"2.5",
    "image": "./img/products/indisponible.jpg"
    },
    {
    "name" : "PAC X",
    "type" : {
      "label" : "Pompes à chaleur / Chaudières",
      "id" :  3
      },
    "local":false,
    "size":"2.9",
    "image": "./img/products/indisponible.jpg"
    }
  ];

  products.getAllProducts=function(){
  	return products;
  }
  products.getProduct=function(index){
  	return products[index];
  }

  return products;
});

app.factory('ClientService', function() {

	var clients = [
 {
  nom : "Jacques Benoit",
  img : "./img/persons/Gary_Donovan.jpg",
  adresse: "5 boulevard stalingrad",
  ville : "Nantes",
  CodePostal: "44000",
  Tel: "01 23 45 67 89",
  nextIntervention : "22/09/2015",
  lastIntervention : "23/03/2014",
  email : "jbenoit@fakemail.com",
  equipements : [0,1,2],
  interventions : [{
    label : "Une première intervention",
    date : "10/04/2013",
    description : "Remplacement d'une résistance du chauffe-eau.",
    installateur : "Installateur 3"
  },
  {
      label : "Une deuxième intervention",
      date : "20/05/2014",
      description : "Nettoyage et changement du thermocouple",
      installateur : "Installateur 2"
  },
  {
      label : "Une troisième intervention",
      date : "25/04/2015",
      description : "Changement de l'anode du chauffe-eau et le groupe de sécurité.",
      installateur : "Installateur 1"
  }]
 },
 {
  nom : "Simon Lee",
  img : "./img/persons/Eugene_Lee.jpg",
  adresse: "12 Boulevard des états unis",
  ville : "La roche-sur-yon",
  CodePostal: "85000",
  Tel: "09 87 65 43 21",
  nextIntervention : "11/10/2015",
  lastIntervention : "15/03/2014",
  email : "sleet@fakemail.com",
  equipements : [2,3],
  interventions : [{
    label : "Une première intervention",
    date : "10/04/2013",
    description : "Remplacement d'une résistance du chauffe-eau.",
    installateur : "Installateur 3"
  },
  {
      label : "Une deuxième intervention",
      date : "20/05/2014",
      description : "Nettoyage et changement du thermocouple",
      installateur : "Installateur 2"
  },
  {
      label : "Une troisième intervention",
      date : "25/04/2015",
      description : "Changement de l'anode du chauffe-eau et le groupe de sécurité.",
      installateur : "Installateur 1"
  }]
 },
 {
  nom : "Pauline Dubois",
  img : "./img/persons/Lisa_Wong.jpg",
  adresse: "21 rue exemple",
  ville : "Paris",
  CodePostal: "75000",
  Tel: "06 00 00 00 00",
  nextIntervention : "21/08/2015",
  lastIntervention : "25/04/2015",
  email : "pdubois@fakemail.com",
  equipements : [2,1],
  interventions : [{
    label : "Une première intervention",
    date : "10/04/2013",
    description : "Remplacement d'une résistance du chauffe-eau.",
    installateur : "Installateur 3"
  },
  {
      label : "Une deuxième intervention",
      date : "20/05/2014",
      description : "Nettoyage et changement du thermocouple",
      installateur : "Installateur 2"
  },
  {
      label : "Une troisième intervention",
      date : "25/04/2015",
      description : "Changement de l'anode du chauffe-eau et le groupe de sécurité.",
      installateur : "Installateur 1"
  }]
 }
 ];

 clients.getAllClients = function(){
 	return clients;
 }
 clients.getClient = function(index){
 	return clients[index];
 }

 return clients;
});