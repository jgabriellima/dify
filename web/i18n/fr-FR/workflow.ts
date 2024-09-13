const translation = {
  common: {
    undo: 'Défaire',
    redo: 'Réexécuter',
    editing: 'Édition',
    autoSaved: 'Sauvegardé automatiquement',
    unpublished: 'Non publié',
    published: 'Publié',
    publish: 'Publier',
    update: 'Mettre à jour',
    run: 'Exécuter',
    running: 'En cours d\'exécution',
    inRunMode: 'En mode exécution',
    inPreview: 'En aperçu',
    inPreviewMode: 'En mode aperçu',
    preview: 'Aperçu',
    viewRunHistory: 'Voir l\'historique des exécutions',
    runHistory: 'Historique des exécutions',
    goBackToEdit: 'Retour à l\'éditeur',
    conversationLog: 'Journal de conversation',
    features: 'Fonctionnalités',
    debugAndPreview: 'Aperçu',
    restart: 'Redémarrer',
    currentDraft: 'Brouillon actuel',
    currentDraftUnpublished: 'Brouillon actuel non publié',
    latestPublished: 'Dernière publication',
    publishedAt: 'Publié le',
    restore: 'Restaurer',
    runApp: 'Exécuter l\'application',
    batchRunApp: 'Exécuter l\'application en lot',
    accessAPIReference: 'Accéder à la référence API',
    embedIntoSite: 'Intégrer au site',
    addTitle: 'Ajouter un titre...',
    addDescription: 'Ajouter une description...',
    noVar: 'Pas de variable',
    searchVar: 'Rechercher une variable',
    variableNamePlaceholder: 'Nom de la variable',
    setVarValuePlaceholder: 'Définir la valeur de la variable',
    needConnectTip: 'Cette étape n\'est connectée à rien',
    maxTreeDepth: 'Limite maximale de {{depth}} nœuds par branche',
    needEndNode: 'Le bloc de fin doit être ajouté',
    needAnswerNode: 'Le bloc de réponse doit être ajouté',
    workflowProcess: 'Processus de flux de travail',
    notRunning: 'Pas encore en cours d\'exécution',
    previewPlaceholder: 'Entrez le contenu dans la boîte ci-dessous pour commencer à déboguer le Chatbot',
    effectVarConfirm: {
      title: 'Supprimer la variable',
      content: 'La variable est utilisée dans d\'autres nœuds. Voulez-vous toujours la supprimer?',
    },
    insertVarTip: 'Appuyez sur la touche \'/\' pour insérer rapidement',
    processData: 'Traiter les données',
    input: 'Entrée',
    output: 'Sortie',
    jinjaEditorPlaceholder: 'Tapez \'/\' ou \'{\' pour insérer une variable',
    viewOnly: 'Affichage seulement',
    showRunHistory: 'Afficher l\'historique des exécutions',
    enableJinja: 'Activer le support des templates Jinja',
    learnMore: 'En savoir plus',
    copy: 'Copier',
    duplicate: 'Dupliquer',
    addBlock: 'Ajouter un bloc',
    pasteHere: 'Coller ici',
    pointerMode: 'Mode pointeur',
    handMode: 'Mode main',
    model: 'Modèle',
    workflowAsTool: 'Flux de travail en tant qu\'outil',
    configureRequired: 'Configuration requise',
    configure: 'Configurer',
    manageInTools: 'Gérer dans les outils',
    workflowAsToolTip: 'Reconfiguration de l\'outil requise après la mise à jour du flux de travail.',
    viewDetailInTracingPanel: 'Voir les détails',
    syncingData: 'Synchroniser des données en quelques secondes.',
    importDSL: 'Importe DSL',
    importDSLTip: 'Le projet actuel sera écrasé. Exporter le flux de travail en tant que sauvegarde avant d\'importer.',
    backupCurrentDraft: 'Sauvegarder le projet actuel',
    chooseDSL: 'Choisir le fichier DSL(yml)',
    overwriteAndImport: 'Écraser et importer',
    importFailure: 'Echec de l\'importation',
    importSuccess: 'Import avec succès',
    parallelTip: {
      click: {
        title: 'Cliquer',
        desc: 'à ajouter',
      },
      drag: {
        title: 'Traîner',
        desc: 'pour se connecter',
      },
      limit: 'Le parallélisme est limité aux branches {{num}}.',
      depthLimit: 'Limite de couches d’imbrication parallèle de {{num}} couches',
    },
    parallelRun: 'Exécution parallèle',
    disconnect: 'Déconnecter',
    jumpToNode: 'Aller à ce nœud',
    addParallelNode: 'Ajouter un nœud parallèle',
  },
  env: {
    envPanelTitle: 'Variables d\'Environnement',
    envDescription: 'Les variables d\'environnement peuvent être utilisées pour stocker des informations privées et des informations d\'identification. Elles sont en lecture seule et peuvent être séparées du fichier DSL lors de l\'exportation.',
    envPanelButton: 'Ajouter Variable',
    modal: {
      title: 'Ajouter Variables d\'Environnement',
      editTitle: 'Editer titre',
      type: 'Type',
      name: 'Nom',
      namePlaceholder: 'Nom de l\'env',
      value: 'valeur',
      valuePlaceholder: 'Valeur de l\'env',
      secretTip: 'Utilisé pour définir des informations ou des données sensibles, avec des paramètres DSL configurés pour la prévention des fuites.',
    },
    export: {
      title: 'Exporter des variables d\'environnement secrètes?',
      checkbox: 'Exporter les valeurs secrètes',
      ignore: 'Exporter DSL',
      export: 'Exporter les DSL avec des valeurs secrètes',
    },
  },
  chatVariable: {
    panelTitle: 'Variables de Conversation',
    panelDescription: 'Les Variables de Conversation sont utilisées pour stocker des informations interactives dont le LLM a besoin de se souvenir, y compris l\'historique des conversations, les fichiers téléchargés et les préférences de l\'utilisateur. Elles sont en lecture-écriture.',
    docLink: 'Consultez notre documentation pour en savoir plus.',
    button: 'Ajouter une Variable',
    modal: {
      title: 'Ajouter une Variable de Conversation',
      editTitle: 'Modifier une Variable de Conversation',
      name: 'Nom',
      namePlaceholder: 'Nom de la variable',
      type: 'Type',
      value: 'Valeur par Défaut',
      valuePlaceholder: 'Valeur par défaut, laisser vide pour ne pas définir',
      description: 'Description',
      descriptionPlaceholder: 'Décrivez la variable',
      editInJSON: 'Éditer en JSON',
      oneByOne: 'Ajouter un par un',
      editInForm: 'Éditer dans le Formulaire',
      arrayValue: 'Valeur',
      addArrayValue: 'Ajouter une Valeur',
      objectKey: 'Clé',
      objectType: 'Type',
      objectValue: 'Valeur par Défaut',
    },
    storedContent: 'Contenu stocké',
    updatedAt: 'Mis à jour le ',
  },
  changeHistory: {
    title: 'Historique des modifications',
    placeholder: 'Vous n\'avez encore rien modifié',
    clearHistory: 'Effacer l\'historique',
    hint: 'Conseil',
    hintText: 'Vos actions d\'édition sont suivies dans un historique des modifications, qui est stocké sur votre appareil pour la durée de cette session. Cet historique sera effacé lorsque vous quitterez l\'éditeur.',
    stepBackward_one: '{{count}} pas en arrière',
    stepBackward_other: '{{count}} pas en arrière',
    stepForward_one: '{{count}} pas en avant',
    stepForward_other: '{{count}} pas en avant',
    sessionStart: 'Début de la session',
    currentState: 'État actuel',
    nodeTitleChange: 'Titre du bloc modifié',
    nodeDescriptionChange: 'Description du bloc modifiée',
    nodeDragStop: 'Bloc déplacé',
    nodeChange: 'Bloc modifié',
    nodeConnect: 'Bloc connecté',
    nodePaste: 'Bloc collé',
    nodeDelete: 'Bloc supprimé',
    nodeAdd: 'Bloc ajouté',
    nodeResize: 'Bloc redimensionné',
    noteAdd: 'Note ajoutée',
    noteChange: 'Note modifiée',
    noteDelete: 'Note supprimée',
    edgeDelete: 'Bloc déconnecté',
  },
  errorMsg: {
    fieldRequired: '{{field}} est requis',
    authRequired: 'Autorisation requise',
    invalidJson: '{{field}} est un JSON invalide',
    fields: {
      variable: 'Nom de la variable',
      variableValue: 'Valeur de la variable',
      code: 'Code',
      model: 'Modèle',
      rerankModel: 'Modèle de rerank',
    },
    invalidVariable: 'Variable invalide',
  },
  singleRun: {
    testRun: 'Exécution de test',
    startRun: 'Démarrer l\'exécution',
    running: 'En cours d\'exécution',
    testRunIteration: 'Itération de l\'exécution de test',
    back: 'Retour',
    iteration: 'Itération',
  },
  tabs: {
    'searchBlock': 'Rechercher un bloc',
    'blocks': 'Blocs',
    'tools': 'Outils',
    'allTool': 'Tous',
    'builtInTool': 'Intégré',
    'customTool': 'Personnalisé',
    'workflowTool': 'Flux de travail',
    'question-understand': 'Compréhension des questions',
    'logic': 'Logique',
    'transform': 'Transformer',
    'utilities': 'Utilitaires',
    'noResult': 'Aucun résultat trouvé',
    'searchTool': 'Outil de recherche',
  },
  blocks: {
    'start': 'Début',
    'end': 'Fin',
    'answer': 'Réponse',
    'llm': 'LLM',
    'knowledge-retrieval': 'Récupération de connaissances',
    'question-classifier': 'Classificateur de questions',
    'if-else': 'SI/SINON',
    'code': 'Code',
    'template-transform': 'Modèle',
    'http-request': 'Requête HTTP',
    'variable-assigner': 'Assigneur de variables',
    'variable-aggregator': 'Agrégateur de variables',
    'assigner': 'Assignateur de Variables',
    'iteration-start': 'Début d\'itération',
    'iteration': 'Itération',
    'parameter-extractor': 'Extracteur de paramètres',
  },
  blocksAbout: {
    'start': 'Définir les paramètres initiaux pour lancer un flux de travail',
    'end': 'Définir la fin et le type de résultat d\'un flux de travail',
    'answer': 'Définir le contenu de la réponse d\'une conversation',
    'llm': 'Inviter de grands modèles de langage pour répondre aux questions ou traiter le langage naturel',
    'knowledge-retrieval': 'Permet de consulter le contenu textuel lié aux questions des utilisateurs à partir de la base de connaissances',
    'question-classifier': 'Définir les conditions de classification des questions des utilisateurs, LLM peut définir comment la conversation progresse en fonction de la description de la classification',
    'if-else': 'Permet de diviser le flux de travail en deux branches basées sur des conditions if/else',
    'code': 'Exécuter un morceau de code Python ou NodeJS pour implémenter une logique personnalisée',
    'template-transform': 'Convertir les données en chaîne en utilisant la syntaxe du template Jinja',
    'http-request': 'Permettre l\'envoi de requêtes serveur via le protocole HTTP',
    'variable-assigner': 'Agrégation de variables de plusieurs branches en une seule variable pour la configuration unifiée des nœuds en aval.',
    'assigner': 'Le nœud d\'assignation de variables est utilisé pour attribuer des valeurs aux variables modifiables (comme les variables de conversation).',
    'variable-aggregator': 'Agrégation de variables de plusieurs branches en une seule variable pour la configuration unifiée des nœuds en aval.',
    'iteration': 'Effectuer plusieurs étapes sur un objet de liste jusqu\'à ce que tous les résultats soient produits.',
    'parameter-extractor': 'Utiliser LLM pour extraire des paramètres structurés du langage naturel pour les invocations d\'outils ou les requêtes HTTP.',
  },
  operator: {
    zoomIn: 'Zoomer',
    zoomOut: 'Dézoomer',
    zoomTo50: 'Zoomer à 50%',
    zoomTo100: 'Zoomer à 100%',
    zoomToFit: 'Zoomer pour ajuster',
  },
  panel: {
    userInputField: 'Champ de saisie de l\'utilisateur',
    changeBlock: 'Changer de bloc',
    helpLink: 'Lien d\'aide',
    about: 'À propos',
    createdBy: 'Créé par',
    nextStep: 'Étape suivante',
    addNextStep: 'Ajouter le prochain bloc dans ce flux de travail',
    selectNextStep: 'Sélectionner le prochain bloc',
    runThisStep: 'Exécuter cette étape',
    checklist: 'Liste de contrôle',
    checklistTip: 'Assurez-vous que tous les problèmes sont résolus avant de publier',
    checklistResolved: 'Tous les problèmes ont été résolus',
    organizeBlocks: 'Organiser les blocs',
    change: 'Modifier',
    optional: '(facultatif)',
  },
  nodes: {
    common: {
      outputVars: 'Variables de sortie',
      insertVarTip: 'Insérer une variable',
      memory: {
        memory: 'Mémoire',
        memoryTip: 'Paramètres de mémoire de conversation',
        windowSize: 'Taille de la fenêtre',
        conversationRoleName: 'Nom du rôle de conversation',
        user: 'Préfixe utilisateur',
        assistant: 'Préfixe assistant',
      },
      memories: {
        title: 'Mémoires',
        tip: 'Mémoire de conversation',
        builtIn: 'Intégré',
      },
    },
    start: {
      required: 'requis',
      inputField: 'Champ de saisie',
      builtInVar: 'Variables intégrées',
      outputVars: {
        query: 'Saisie utilisateur',
        memories: {
          des: 'Historique de conversation',
          type: 'type de message',
          content: 'contenu du message',
        },
        files: 'Liste de fichiers',
      },
      noVarTip: 'Définir les entrées qui peuvent être utilisées dans le flux de travail',
    },
    end: {
      outputs: 'Sorties',
      output: {
        type: 'type de sortie',
        variable: 'variable de sortie',
      },
      type: {
        'none': 'Aucun',
        'plain-text': 'Texte brut',
        'structured': 'Structuré',
      },
    },
    answer: {
      answer: 'Réponse',
      outputVars: 'Variables de sortie',
    },
    llm: {
      model: 'modèle',
      variables: 'variables',
      context: 'contexte',
      contextTooltip: 'Vous pouvez importer des connaissances en tant que contexte',
      notSetContextInPromptTip: 'Pour activer la fonctionnalité de contexte, remplissez la variable de contexte dans le PROMPT.',
      prompt: 'invite',
      roleDescription: {
        system: 'Donner des instructions de haut niveau pour la conversation',
        user: 'Fournir des instructions, des questions ou toute entrée textuelle au modèle',
        assistant: 'Les réponses du modèle basées sur les messages des utilisateurs',
      },
      addMessage: 'Ajouter un message',
      vision: 'vision',
      files: 'Fichiers',
      resolution: {
        name: 'Résolution',
        high: 'Haute',
        low: 'Basse',
      },
      outputVars: {
        output: 'Contenu généré',
        usage: 'Informations sur l\'utilisation du modèle',
      },
      singleRun: {
        variable: 'Variable',
      },
      sysQueryInUser: 'sys.query dans le message utilisateur est requis',
    },
    knowledgeRetrieval: {
      queryVariable: 'Variable de requête',
      knowledge: 'Connaissances',
      outputVars: {
        output: 'Données segmentées récupérées',
        content: 'Contenu segmenté',
        title: 'Titre segmenté',
        icon: 'Icône segmentée',
        url: 'URL segmentée',
        metadata: 'Autres métadonnées',
      },
    },
    http: {
      inputVars: 'Variables de saisie',
      api: 'API',
      apiPlaceholder: 'Entrez l\'URL, tapez ‘/’ pour insérer une variable',
      notStartWithHttp: 'L\'API doit commencer par http:// ou https://',
      key: 'Clé',
      value: 'Valeur',
      bulkEdit: 'Édition en masse',
      keyValueEdit: 'Édition clé-valeur',
      headers: 'En-têtes',
      params: 'Paramètres',
      body: 'Corps',
      outputVars: {
        body: 'Contenu de la réponse',
        statusCode: 'Code de statut de la réponse',
        headers: 'Liste des en-têtes de réponse JSON',
        files: 'Liste des fichiers',
      },
      authorization: {
        'authorization': 'Autorisation',
        'authorizationType': 'Type d\'autorisation',
        'no-auth': 'Aucune',
        'api-key': 'Clé API',
        'auth-type': 'Type d\'authentification',
        'basic': 'De base',
        'bearer': 'Bearer',
        'custom': 'Personnalisé',
        'api-key-title': 'Clé API',
        'header': 'En-tête',
      },
      insertVarPlaceholder: 'tapez \'/\' pour insérer une variable',
      timeout: {
        title: 'Délai d\'expiration',
        connectLabel: 'Délai de connexion',
        connectPlaceholder: 'Entrez le délai de connexion en secondes',
        readLabel: 'Délai de lecture',
        readPlaceholder: 'Entrez le délai de lecture en secondes',
        writeLabel: 'Délai d\'écriture',
        writePlaceholder: 'Entrez le délai d\'écriture en secondes',
      },
    },
    code: {
      inputVars: 'Variables de saisie',
      outputVars: 'Variables de sortie',
      advancedDependencies: 'Dépendances avancées',
      advancedDependenciesTip: 'Ajoutez quelques dépendances préchargées qui prennent plus de temps à consommer ou ne sont pas par défaut ici',
      searchDependencies: 'Rechercher des dépendances',
    },
    templateTransform: {
      inputVars: 'Variables de saisie',
      code: 'Code',
      codeSupportTip: 'Prend en charge uniquement Jinja2',
      outputVars: {
        output: 'Contenu transformé',
      },
    },
    ifElse: {
      if: 'Si',
      else: 'Sinon',
      elseDescription: 'Utilisé pour définir la logique à exécuter lorsque la condition if n\'est pas remplie.',
      and: 'et',
      or: 'ou',
      operator: 'Opérateur',
      notSetVariable: 'Veuillez d\'abord définir la variable',
      comparisonOperator: {
        'contains': 'contient',
        'not contains': 'ne contient pas',
        'start with': 'commence par',
        'end with': 'se termine par',
        'is': 'est',
        'is not': 'n\'est pas',
        'empty': 'est vide',
        'not empty': 'n\'est pas vide',
        'null': 'est nul',
        'not null': 'n\'est pas nul',
        'regex match': 'correspondance regex',
      },
      enterValue: 'Entrez la valeur',
      addCondition: 'Ajouter une condition',
      conditionNotSetup: 'Condition NON configurée',
      selectVariable: 'Sélectionner une variable...',
    },
    variableAssigner: {
      title: 'Attribuer des variables',
      outputType: 'Type de sortie',
      varNotSet: 'Variable non définie',
      noVarTip: 'Ajoutez les variables à attribuer',
      type: {
        string: 'Chaîne',
        number: 'Nombre',
        object: 'Objet',
        array: 'Tableau',
      },
      aggregationGroup: 'Groupe d\'agrégation',
      aggregationGroupTip: 'L\'activation de cette fonctionnalité permet à l\'agrégateur de variables d\'agréger plusieurs ensembles de variables.',
      addGroup: 'Ajouter un groupe',
      outputVars: {
        varDescribe: 'Sortie {{groupName}}',
      },
      setAssignVariable: 'Définir la variable à attribuer',
    },
    assigner: {
      'assignedVariable': 'Variable Assignée',
      'writeMode': 'Mode d\'Écriture',
      'writeModeTip': 'Lorsque la VARIABLE ASSIGNÉE est un tableau, le mode d\'ajout ajoute à la fin.',
      'over-write': 'Écraser',
      'append': 'Ajouter',
      'plus': 'Plus',
      'clear': 'Effacer',
      'setVariable': 'Définir Variable',
      'variable': 'Variable',
    },
    tool: {
      toAuthorize: 'Autoriser',
      inputVars: 'Variables de saisie',
      outputVars: {
        text: 'contenu généré par l\'outil',
        files: {
          title: 'fichiers générés par l\'outil',
          type: 'Type de support. Actuellement ne prend en charge que l\'image',
          transfer_method: 'Méthode de transfert. La valeur est remote_url ou local_file',
          url: 'URL de l\'image',
          upload_file_id: 'ID du fichier téléchargé',
        },
        json: 'JSON généré par un outil',
      },
    },
    questionClassifiers: {
      model: 'modèle',
      inputVars: 'Variables de saisie',
      outputVars: {
        className: 'Nom de la classe',
      },
      class: 'Classe',
      classNamePlaceholder: 'Écrivez le nom de votre classe',
      advancedSetting: 'Paramètre avancé',
      topicName: 'Nom du sujet',
      topicPlaceholder: 'Écrivez le nom de votre sujet',
      addClass: 'Ajouter une classe',
      instruction: 'Instruction',
      instructionTip: 'Entrez des instructions supplémentaires pour aider le classificateur de questions à mieux comprendre comment catégoriser les questions.',
      instructionPlaceholder: 'Écrivez votre instruction',
    },
    parameterExtractor: {
      inputVar: 'Variable de saisie',
      extractParameters: 'Extraire des paramètres',
      importFromTool: 'Importer des outils',
      addExtractParameter: 'Ajouter un paramètre d\'extraction',
      addExtractParameterContent: {
        name: 'Nom',
        namePlaceholder: 'Nom du paramètre d\'extraction',
        type: 'Type',
        typePlaceholder: 'Type de paramètre d\'extraction',
        description: 'Description',
        descriptionPlaceholder: 'Description du paramètre d\'extraction',
        required: 'Requis',
        requiredContent: 'Requis est utilisé uniquement comme référence pour l\'inférence du modèle, et non pour la validation obligatoire de la sortiedu paramètre.',
      },
      extractParametersNotSet: 'Paramètres d\'extraction non configurés',
      instruction: 'Instruction',
      instructionTip: 'Entrez des instructions supplémentaires pour aider l\'extracteur de paramètres à comprendre comment extraire les paramètres.',
      advancedSetting: 'Paramètre avancé',
      reasoningMode: 'Mode de raisonnement',
      reasoningModeTip: 'Vous pouvez choisir le mode de raisonnement approprié en fonction de la capacité du modèle à répondre aux instructions pour les appels de fonction ou les invites.',
      isSuccess: 'Est réussi. En cas de succès, la valeur est 1, en cas d\'échec, la valeur est 0.',
      errorReason: 'Raison de l\'erreur',
    },
    iteration: {
      deleteTitle: 'Supprimer le nœud d\'itération?',
      deleteDesc: 'La suppression du nœud d\'itération supprimera tous les nœuds enfants',
      input: 'Entrée',
      output: 'Variables de sortie',
      iteration_one: '{{count}} Itération',
      iteration_other: '{{count}} Itérations',
      currentIteration: 'Itération actuelle',
    },
    note: {
      addNote: 'Ajouter note',
      editor: {
        placeholder: 'Redigez votre note...',
        small: 'Petit',
        medium: 'Moyen',
        large: 'Grand',
        bold: 'Gras',
        italic: 'Italique',
        strikethrough: 'Barré',
        link: 'Lien',
        openLink: 'Ouvrir',
        unlink: 'Annuler le lien',
        enterUrl: 'Entrer l\'URL...',
        invalidUrl: 'URL invalide',
        bulletList: 'Liste à puces',
        showAuthor: 'Afficher l\'auteur',
      },
    },
  },
  tracing: {
    stopBy: 'Arrêté par {{user}}',
  },
}

export default translation
