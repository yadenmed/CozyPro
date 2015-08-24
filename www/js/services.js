app.factory('ProductService', function() {

	var products=[
      {
    "name" : "Chaudière fioul",
    "type" : {
      "label" : "Chaudière sol fioul",
      "id" :  0
      },
    "local":false,
    "size":"1.5",
    "image": "./img/products/indisponible.jpg"
    },
    {
    "name" : "NAEMA",
    "type" : {
      "label" : "Chaudière murale",
      "id" :  3
      },
    "local":true,
    "size":"3.5",
    "image": "./img/products/indisponible.jpg",
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
    "dysfonctionnements":
      {
        "sanscode":[
          {
            "symptome":"L’électrode d’allumage ne donne pas d’étincelles",
            "causes":[
              "La chaudière n’est pas sous tension.",
              "Anomalie dans le circuit d’allumage."
            ],
            "diagnostics":[
              "Vérifier la ligne 230 V.",
              "Vérifier les connexions électriques.",
              "Vérifier l’écartement et le positionnement de l’électrode (fig. , p. 20)."
            ]
          },
          {
            "symptome":"L’électrode donne des étincelles mais le brûleur ne s’allume pas.",
            "causes":[
              "La vanne d’alimentation gaz est fermée",
              "La pression gaz réseau est trop faible."
            ],
            "diagnostics":[
              "Ouvrir la vanne",
              "Vérifier la pression d’entrée, purger"
            ]
          },
          {
            "symptome":"Le brûleur ne s’allume pas.",
            "causes":[
              "Il n’y a pas de demande de chauffage",
              "L’électrovanne du bloc gaz ne s’ouvre pas.",
              "Anomalie dans le circuit d’air.",
              "Obstruction de l’évacuation des produits de combustion.",
              "Il n’y a pas détection de flamme (voyant présence de flamme ne s’allume pas).",
              "L’électrode ne donne pas d’étincelles."
            ],
            "diagnostics":[
              "Régler le thermostat de chaudière et éventuellement le thermostat d’ambiance pour créer une demande de chauffage. S’assurer que la sécurité manque d’eau, quand elle existe, est bien satisfaite.",
              "Vérifier la ligne 230 V.",
              "Vérifier le bloc gaz.",
              "Vérifier le ventilateur. Vérifier le bon branchement et l’intégrité du tube qui prend la pression sortie ventilateur et qui est relié à la vanne gaz.",
              "Vérifier tout le système d’évacuation (conduit de raccordement et cheminée).",
              "Vérifier l’état de l’électrode d’ionisation, son câblage et son positionnement (fig. , p. 20). Vérifier le câblage de masse. Vérifier le boîtier électronique.",
              "Voir “Symptômes” ci-dessus."
            ]
          },
          {
            "symptome":"Le brûleur s’allume mais passe en sécurité",
            "causes":[
              "Anomalie électrique.",
              "La pression gaz réseau est trop faible."
            ],
            "diagnostics":[
              "Vérifier le bon fonctionnement des électrovannes gaz (ouverture complète). Vérifier l’électrode d’ionisation et son câblage. Vérifier le câblage de masse. Vérifier le boîtier électronique",
              "Vérifier le filtre (entrée bloc gaz ou alimentation gaz) et le nettoyer si nécessaire."
            ]
          },
          {
            "symptome":"La chaudière est bruyante.",
            "causes":[
              "Anomalie sur le circuit hydraulique."
            ],
            "diagnostics":[
              "Vérifier que le circuit hydraulique est purgé correctement. Vérifier la pression hydraulique (1,5 à 2 bars)."
            ]
          },
          {
            "symptome":"La chaudière est trop froide par rapport à la demande de la régulation.",
            "causes":[
              "La consigne du thermostat de chaudière est trop basse."
            ],
            "diagnostics":[
              "Augmenter la consigne du thermostat."
            ]
          },
          {
            "symptome":"La température d’eau chaude sanitaire est trop basse.",
            "causes":[
              "Poche d’air en partie haute du corps de chauffe.",
              "La consigne des thermostats sanitaire et/ou maxi est trop basse."
            ],
            "diagnostics":[
              "Purger le corps de chauffe.",
              "Vérifier la consigne des thermostats (60°C sanitaire - 80°C Maxi)."
            ]
          }
        ],
        "bycode":[
          {
            "code":"E02",
            "causes":[
              "Température de sécurité atteinte sur le départ ou le retour"
            ],
            "diagnostics":[

            ]
          },
          {
            "code":"E04",
            "causes":[
              "Nombre maximal de démarrages échoués atteint"
            ],
            "diagnostics":[
              "Vérifier vanne gaz",
              "Vérifier alimentation gaz",
              "Vérifier ventilateur",
              "Vérifier connexion sonde d’allumage",
              "Vérifier terre"
            ]
          },
          {
            "code":"E107",
            "causes":[
              "Pression hydraulique trop élevée ou trop faible ou capteur de pression déféctueux"
            ],
            "diagnostics":[
              "Erreur automatiquement acquittée quand la pression revient à la pression nominale"
            ]
          },
          {
            "code":"E12",
            "causes":[
              "Erreur de capteur de température ECS (valeur incorrecte ou capteur débranché)"
            ],
            "diagnostics":[
              "Erreur automatiquement acquittée quand la température revient dans sa plage de fonctionnement"
            ]
          },
          {
            "code":"E13",
            "causes":[
              "Température sortie fumée trop élevée ou Erreur de capteur de température fumée (valeur incorrecte ou capteur débranché)"
            ],
            "diagnostics":[
              "Refroidissement machine de 15 minute imposé.",
              "Erreur automatiquement acquittée quand la température revient dans sa plage de fonctionnement."
            ]
          },
          {
            "code":"E16",
            "causes":[
              "Variation trop importante de la température retour"
            ],
            "diagnostics":[
              "Vérifier sonde retour"
            ]
          },
          {
            "code":"E24",
            "causes":[
              "Vitesse ventilateur incorrecte"
            ],
            "diagnostics":[
              "Vérifier cablage ventilo",
              "Vérifier silencieux"
            ]
          },
          {
            "code":"E31",
            "causes":[
              "Erreur de capteur T° départ (valeur incorrecte ou capteur débranché)"
            ],
            "diagnostics":[
              "Vérifier branchement capteur"
            ]
          },
          {
            "code":"E32",
            "causes":[
              "Erreur de capteur T° retour (valeur incorrecte ou capteur débranché)"
            ],
            "diagnostics":[
              "Vérifier branchement capteur"
            ]
          },
          {
            "code":"E96",
            "causes":[
              "Nombre d’acquitement d’erreur maximal atteint"
            ],
            "diagnostics":[
              "Coupure d’alimentation nécessaire"
            ]
          }
        ]
      },
    "quick start":[
  {
    "thumbnail":"",
    "label":"Installation du module hydraulique",
    "description":{
      "label":"",
      "content":[
        "La pièce ou l’appareil fonctionne doit respecter la réglementation en vigueur.",
        "L’installation de ce matériel est interdite dans une salle de bain ou une salle d’eau.",
        "L’appareil étant de type étanche, aucune précaution particulière n’est requise concernant la ventilation du local"
      ]
    },
    "images":[
      "./img/quick-start/1-step1-1.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Montage du système de raccordement conduit fumée",
    "description":{
      "label":"",
      "content":[
        "Verser 5cl d'eau dans l'orifice d'évacuation des fumées"
      ]
    },
    "images":[
      "./img/quick-start/1-step2-1.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Conduit de raccordement ventouse, C13, C33, C93",
    "description":{
      "label":"",
      "content":[

      ]
    },
    "images":[
      "./img/quick-start/1-step3-1.jpg",
      "./img/quick-start/1-step3-2.jpg",
      "./img/quick-start/1-step3-3.jpg",
      "./img/quick-start/1-step3-4.jpg",
      "./img/quick-start/1-step3-5.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Raccordement du circuit de chauffage, du circuit sanitaire et de l'alimentation gaz",
    "description":{
      "label":"",
      "content":[
        "Dans certaines installations la présence de métaux de métaux différents peut engendrer des problèmes de corrosion ; on observe alors la formation de particules métalliques et de boue dans le circuit hydraulique.",
        "Dans ce cas, il est souhaitable d’utiliser un inhibiteur de corrosion dans les proportions indiquées par son fabricant.",
        "D’autre part, il est nécessaire de s’assurer que l’eau traitée ne devient pas agressive.",
        "Raccorder les tuyauteries du chauffage (Ø18mm sur le dosseret de pré-raccordement) en respectant le sens de circulation.",
        "Raccorder les tuyauteries sanitaire (Ø14mm sur le dosseret de pré-raccordement) en respectant le sens de circulation.",
        "Couple de serrage : 15 à 35 Nm",
        "Utiliser de préférence des flexibles de liaison pour éviter de transmettre le bruit et les vibrations au bâtiment.",
        "Raccorder l'alimentation gaz (Ø18mm sur le dosseret de pré-raccordement)."
      ]
    },
    "images":[
      "./img/quick-start/1-step4-1.jpg",
      "./img/quick-start/1-step4-2.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Changement de gaz",
    "description":{
      "label":"",
      "content":[
        "AVERTISSEMENT",
        "Le générateur gaz est préréglé d’usine au gaz naturel G20, pression d'alimentation habitation : 20 mbar",
        "Pour un usage au gaz naturel G25, pression d’alimentation habitation : 25 mbar, il est impératif de retirer le diaphragme à la sortie de la vanne gaz.",
        "Pour un usage au gaz propane G31, pression d’alimentation habitation : 37 mbar (type gaz de Groningue), il est impératif de remplacer le diaphragme à la sortie de la vanne gaz (kit de conversion).",
        "Cette opération doit être effectuée par unprofessionnel qualifié.",
        "Démonter le raccord à la sortie de la vanne gaz",
        "Retirer le diaphragme en place et le remplacer par le modèle, indiqué dans le tableau ci-dessus",
        "Positionner le diaphragme dans la gorge du joint.",
        "Remonter le raccord.",
        "Vérifier l’étanchéité.",
        "Effectuer un contrôle de combustion.(voir § “Réglage des paramètres de combustion lors d’un changement de gaz”, page 29).",
        "Coller l'étiquette de réglage gaz fournie avec le kit de conversion."
      ]
    },
    "images":[
      "./img/quick-start/1-step5-1.jpg",
      "./img/quick-start/1-step5-2.jpg",
      "./img/quick-start/1-step5-3.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Raccordements électriques de puissance (BT)",
    "description":{
      "label":"",
      "content":[
        "Avant toute intervention, s'assurer que l’alimentation électrique générale est coupée.",
        "L'installation électrique doit être réalisée conformément à la réglementation en vigueur en particulier: - France : norme NF C15-100.",
        "Il est impératif de respecter la polarité phase-neutre lors du branchement électrique",
        "Serrer les câbles à l'aide des presse-étoupes afin d'éviter tout débranchement accidentel des fils conducteurs.",
        "Le raccordement à la terre et sa continuité sont impératifs."
      ]
    },
    "images":[
      "./img/quick-start/1-step6-1.jpg",
      "./img/quick-start/1-step6-2.jpg",
      "./img/quick-start/1-step6-3.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Remplissage et purge de l’installation",
    "description":{
      "label":"",
      "content":[
        "S’assurer qu’un rinçage de l’installation a étéeffectué",
        "Vérifier le bon raccordement du système d’expansion. Contrôler la pression du vase d’expansion.",
        "Vérifier la fixation des tuyauteries, le serrage des raccords et la stabilité du module hydraulique.",
        "Vérifier le sens de circulation d’eau et l’ouverture de toutes les vannes (sauf la vanne gaz)."
      ]
    },
    "images":[

    ]
  },
  {
    "thumbnail":"",
    "label":"Contrôles avant mise en service",
    "description":{
      "label":"",
      "content":[
        "S'assurer qu’un rinçage de l'installation a été effectué.",
        "Contrôler la pression de l'installation.",
        "Effectuer le contrôle d’étanchéité de l'ensemble de l’installation.",
        "A la première mise en service, vérifier que le siphon est rempli d’eau."
      ]
    },
    "images":[

    ]
  },
  {
    "thumbnail":"",
    "label":"Mise en service",
    "description":{
      "label":"",
      "content":[
        "Enclencher le disjoncteur général de l’installation.",
        "Enclencher le bouton marche/arrêt.",
        "1. Appui long sur la touche paramètres.",
        "2. Le paramètre n°0 s’affiche (alternance n°0 // 50).",
        "3. Appui sur OK => le numéro seul clignote.",
        "4. Appui sur +/- pour modifier la valeur (0 -> 100 %).",
        "5. Appui sur OK => validation de la valeur => la machine démarre en mode test à la puissance indiquée (la valeur clignote toujours).",
        "6. La consigne peut être modifiée avec +/- et validée avec OK.",
        "7. Un appui sur i/esc permet de quitter le mode test et de revenir à l'écran par défaut.",
        "Remarque: En cas d’échec lors du démarrage, revenir à l’écran principal pour annuler l’erreur et relancer le mode test."
      ]
    },
    "images":[
      "./img/quick-start/1-step9-1.jpg"
    ]
  },
  {
    "thumbnail":"",
    "label":"Réglage des paramètres de combustion lors d'un changement de gaz",
    "description":{
      "label":"",
      "content":[
        "Lors de chaque intervention dans le coffret électrique, s’assurer que l’alimentation électrique est coupée.",
        "Ouvrir toutes le vannes des circuits de chauffage.",
        "Régler les paramètres suivants (voir § 4.3, page 31). Le brûleur fonctionne à l'allure MAXI.",
        "Laisser la température de la chaudière atteindre 60 °C.",
        "Effectuer un contrôle de combustion.",
        "Contrôler le taux de CO2 (voir tableau page 22).",
        "Si nécessaire ajuster le taux de CO2 an réglant le débit gaz au brûleur (vis repère R1, figure 23).",
        "Régler le paramètre (voir § 4.3, page 31).Le brûleur fonctionne à l'allure MINI.",
        "Contrôler le taux de CO2 (voir tableau page 22).",
        "Si nécessaire, ajuster doucement la consigne du régulateur de pression (vis repère  R2, figure 23).",
        "Contrôler les réglages à l’allure MAXI. Le modifier si nécessaire.",
        "Lorsque les réglages sont terminés: Régler le paramètre dans 1 configuration initiale (voir § 4.3, page 31)."
      ]
    },
    "images":[
      "./img/quick-start/1-step10-1.jpg"
    ]
  }
],
    "checklist":[
         {
            "title":"Entretien de l'installation",
            "caution":"L’entretien de la chaudière doit être effectué régulièrement afin de maintenir son rendement élevé. Suivant les conditions de fonctionnement, l’opération d’entretien sera effectuée une ou deux fois par an. Avant toute intervention, s’assurer que l’alimentation électrique générale est coupée. Energie stockée : après sectionnement des alimentations attendre 1 minute avant d’accéder aux parties internes de l'équipement.",
            "steps":[
               {
                  "title":"Entretien de l’échangeur thermique gaz",
                  "content":[
                     "Couper l’alimentation électrique de l’appareil.",
                     "Fermer la vanne d’alimentation gaz.",
                     "Déposer la façade du module hydraulique.",
                     "Démontage de la porte foyer: ",
                     "Déconnecter le bloc gaz de l’alimentation gaz.",
                     "Débrancher les connecteurs du ventilateur.",
                     "Débrancher les câbles électrodes et le câble de terre.",
                     "Desserrer les écrous de la porte foyer.",
                     "Déposer l’ensemble.",
                     "Faire attention de ne pas donner de chocs aux brûleur.",
                     "Nettoyer le faisceau tubulaire de l’échangeur à l’aide d’une brosse synthétique.",
                     "Nettoyer la chambre de combustion.",
                     "Enlever les résidus de nettoyage accumulés de la chambre de combustion.",
                     "Brosser légèrement les grilles du brûleur.",
                     "Vérifier l'écartement et le positionnement des électrodes (figure 27).",
                     "Remonter correctement toute l'installation.",
                     "S'assurer de la bonne étanchéité  du circuit des gaz brûlés de la chaudière.",
                     "Vérifier que les raccords sont bien serrés",
                     "Ouvrir la vanne de gaz, purger les canalisations et vérifier l'étanchéité en amont du bloc gaz."
                  ],
                  "images":[
                     "./img/check-list/1-step61-1.jpg"
                  ]
               },
               {
                  "title":"Vérification du circuit hydraulique",
                  "content":[
                     "Attention, si des remplissages fréquents sont nécessaires, une recherche de fuite est absolument obligatoire. Si un remplissage et une remise en pression s’imposent, vérifier quel type de fluide a été utilisé initialement.",
                     " Pression de remplissage conseillée : entre 1 et 2 bar (la pression précise de remphssage est déterminée en fonction de la hauteur manométrique de l’installation).",
                     "Chaque années,",
                     "Contrôler la pression d'expansion (prégonflage de 1 bar) et le fonctionnement de la soupape de sûreté.",
                     "Vérifier ...",
                     "Vérifier le fonctionnement de la vanne directionnelle."
                  ],
                  "images":[

                  ]
               },
               {
                  "title":"Entretien du conduit d'évacuation",
                  "content":[
                     "Le conduit ventouse (ou la cheminée) doit être vérifié et nettoyé régulièrement par un spécialiste (1 fois par an).",
                     "Vérifier que le conduit ventouse n'est pas obstrué.",
                     "Vérifier que l'évacuation des condensats n'est pas bouchée. Déposer le siphon et le rincer à l'eau claire (figure xx).",
                     "Attention : Les condensats sont acides.",
                     "Pour la maintenance, utiliser des gants et des lunettes résistants aux acides."
                  ],
                  "images":[
                     "./img/check-list/1-step63-1.jpg"
                  ]
               }
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
      {"id": "1", "label" : "FILTRE", "ref": "029370","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "2", "label" : "TRAPPE DE FILTRE AVEC PIECE THERMOFORMEE", "ref": "022499","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "3", "label" :" ENSEMBLE COIFFE POUR PIQUAGES D160MM", "ref": "022576","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "5", "label" : "VIROLE DROITE HABILLAGE PAC", "ref": "022596","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "6", "label" : "VIROLE GAUCHE HABILLAGE PAC", "ref": "022597","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "7", "label" : "VENTILATEUR POMPE A CHALEUR", "ref": "029271","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "8", "label" : "CARTER SEUL VENTILATEUR POMPE A CHALEUR", "ref": "029272","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "9", "label" :"SOCLE POMPE A CHALEUR","ref": "022504","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "10", "label" :"CONNEXION PIPETTE (ENT ONNOIR)","ref": "029273","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "11", "label" :"PIED FIXE","ref": "022599","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "12", "label" :"CAPOT DE FACADE AEROMAX VMC","ref": "022515","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "13", "label" :"PRESSOSTAT + FILERIE PAC","ref": "029274","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "14", "label" :"COMPRESSEUR","ref": "029275","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "16", "label" :"DETENDEUR POMPE A CHALEUR","ref": "029277","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "17", "label" :"SONDE DE PRESSION AVEC RACCORDEMENT AIR","ref": "029278","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "18", "label" :"THERMOSTAT DE SECURITE","ref": "070326","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "19", "label" :"BOITIER ELECTRONIQUE DE REGULATION","ref": "070327","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "20", "label" :"ENS. FILERIES ELECTRIQUES CHOD","ref": "026136","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "21", "label" :"ENS. SONDES DE TEMPERATURE (X3)","ref": "029279","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "22", "label" :"RESISTANCE STEATITE","ref": "099024","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "23", "label" :"JOINT A LEVRE","ref": "099060","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "24", "label" :"CORPS DE CHAUFFE + JOINT","ref": "030146","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "25", "label" :"ANODE ACI + BOUCHON","ref":  "040374","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "26", "label" :"PATTE DE FIXATION","ref": "022507","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "27", "label" :"CONDENSATEUR 7,5UF POUR COMPRESSEUR","ref": "026220","image":"./img/products/indisponible.jpg","panier":false},
      {"id": "42", "label" :"TUYAU EVACUATION CONDENSATS V1BIS","ref": "029300","image":"./img/products/indisponible.jpg","panier":false}
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
    ],
    "prog-chauffage":
    [
    {"day":"lundi", "slots" : "./img/prog/naema/lundi.png"},
    {"day":"mardi", "slots" : "./img/prog/naema/mardi.png"},
    {"day":"mercredi", "slots" : "./img/prog/naema/mercredi.png"},
    {"day":"jeudi", "slots" : "./img/prog/naema/jeudi.png"},
    {"day":"vendredi", "slots" : "./img/prog/naema/vendredi.png"},
    {"day":"samedi", "slots" : "./img/prog/naema/samedi.png"},
    {"day":"dimanche", "slots" : "./img/prog/naema/dimanche.png"}
    ]
    },
    {
    "name" : "Chaudière gaz",
    "type" : {
      "label" : "Chaudière sol gaz",
      "id" :  1
      },
    "local":false,
    "size":"2.5",
    "image": "./img/products/indisponible.jpg"
    },
    {
    "name" : "PAC X",
    "type" : {
      "label" : "Pompe à chaleur",
      "id" :  2
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