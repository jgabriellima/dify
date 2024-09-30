const translation = {
  steps: {
    header: {
      creation: 'Criar Conhecimento',
      update: 'Adicionar dados',
    },
    one: 'Escolher fonte de dados',
    two: 'Pré-processamento e Limpeza de Texto',
    three: 'Executar e finalizar',
  },
  error: {
    unavailable: 'Este Conhecimento não está disponível',
  },
  stepOne: {
    filePreview: 'Visualização do arquivo',
    pagePreview: 'Visualização da página',
    dataSourceType: {
      file: 'Importar de arquivo de texto',
      notion: 'Sincronizar do Notion',
      web: 'Sincronizar de site',
    },
    uploader: {
      title: 'Enviar arquivo de texto',
      button: 'Arraste e solte o arquivo, ou',
      browse: 'Navegar',
      tip: 'Suporta {{supportTypes}}. Máximo de {{size}}MB cada.',
      validation: {
        typeError: 'Tipo de arquivo não suportado',
        size: 'Arquivo muito grande. Máximo é {{size}}MB',
        count: 'Vários arquivos não suportados',
        filesNumber: 'Limite de upload em massa {{filesNumber}}.',
      },
      cancel: 'Cancelar',
      change: 'Alterar',
      failed: 'Falha no envio',
    },
    notionSyncTitle: 'Notion não está conectado',
    notionSyncTip: 'Para sincronizar com o Notion, a conexão com o Notion deve ser estabelecida primeiro.',
    connect: 'Ir para conexão',
    button: 'Próximo',
    emptyDatasetCreation: 'Quero criar um Conhecimento vazio',
    modal: {
      title: 'Criar um Conhecimento vazio',
      tip: 'Um Conhecimento vazio não conterá documentos e você poderá fazer upload de documentos a qualquer momento.',
      input: 'Nome do Conhecimento',
      placeholder: 'Por favor, insira',
      nameNotEmpty: 'O nome não pode estar vazio',
      nameLengthInvalid: 'O nome deve ter entre 1 e 40 caracteres',
      cancelButton: 'Cancelar',
      confirmButton: 'Criar',
      failed: 'Falha na criação',
    },
    website: {
      fireCrawlNotConfiguredDescription: 'Configure o Firecrawl com a chave de API para usá-lo.',
      run: 'Correr',
      unknownError: 'Erro desconhecido',
      crawlSubPage: 'Rastrear subpáginas',
      selectAll: 'Selecionar tudo',
      resetAll: 'Redefinir tudo',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      includeOnlyPaths: 'Incluir apenas caminhos',
      configure: 'Configurar',
      limit: 'Limite',
      firecrawlDoc: 'Documentos do Firecrawl',
      preview: 'Visualizar',
      options: 'Opções',
      scrapTimeInfo: 'Páginas {{total}} raspadas no total dentro de {{time}}s',
      exceptionErrorTitle: 'Ocorreu uma exceção durante a execução do trabalho Firecrawl:',
      fireCrawlNotConfigured: 'O Firecrawl não está configurado',
      maxDepthTooltip: 'Profundidade máxima para rastrear em relação ao URL inserido. A profundidade 0 apenas raspa a página do url inserido, a profundidade 1 raspa o url e tudo depois de inseridoURL + um / e assim por diante.',
      firecrawlTitle: 'Extraia conteúdo da web com 🔥Firecrawl',
      maxDepth: 'Profundidade máxima',
      totalPageScraped: 'Total de páginas raspadas:',
      excludePaths: 'Excluir caminhos',
      extractOnlyMainContent: 'Extraia apenas o conteúdo principal (sem cabeçalhos, navs, rodapés, etc.)',
      jinaReaderNotConfiguredDescription: 'Configure o Jina Reader inserindo sua chave de API gratuita para acesso.',
      jinaReaderDoc: 'Saiba mais sobre o Jina Reader',
      chooseProvider: 'Selecione um provedor',
      jinaReaderNotConfigured: 'Jina Reader não está configurado',
      jinaReaderDocLink: 'https://jina.ai/reader',
      useSitemap: 'Usar o mapa do site',
      useSitemapTooltip: 'Siga o mapa do site para rastrear o site. Caso contrário, o Jina Reader rastreará iterativamente com base na relevância da página, produzindo menos páginas, mas de maior qualidade.',
      jinaReaderTitle: 'Converter todo o site em Markdown',
    },
  },
  stepTwo: {
    segmentation: 'Configurações de fragmentação',
    auto: 'Automático',
    autoDescription: 'Configura automaticamente as regras de fragmentação e pré-processamento. Usuários não familiarizados são recomendados a selecionar esta opção.',
    custom: 'Personalizado',
    customDescription: 'Personalize as regras de fragmentação, comprimento dos fragmentos e regras de pré-processamento, etc.',
    separator: 'Identificador de segmento',
    separatorPlaceholder: 'Por exemplo, nova linha (\\\\n) ou separador especial (como "***")',
    maxLength: 'Comprimento máximo do fragmento',
    overlap: 'Sobreposição de blocos',
    overlapTip: 'Configurar a sobreposição de blocos pode manter a relevância semântica entre eles, melhorando o efeito de recuperação. É recomendado definir de 10% a 25% do tamanho máximo do bloco.',
    overlapCheck: 'a sobreposição de blocos não deve ser maior que o comprimento máximo do bloco',
    rules: 'Regras de pré-processamento de texto',
    removeExtraSpaces: 'Substituir espaços consecutivos, quebras de linha e tabulações',
    removeUrlEmails: 'Excluir todos os URLs e endereços de e-mail',
    removeStopwords: 'Remover palavras irrelevantes como "um", "uma", "o"',
    preview: 'Confirmar e visualizar',
    reset: 'Redefinir',
    indexMode: 'Modo de índice',
    qualified: 'Alta qualidade',
    recommend: 'Recomendado',
    qualifiedTip: 'Chama a interface de incorporação do sistema padrão para processamento, fornecendo maior precisão ao consultar.',
    warning: 'Por favor, configure primeiro a chave da API do provedor do modelo.',
    click: 'Ir para configurações',
    economical: 'Econômico',
    economicalTip: 'Use motores de vetor offline, índices de palavras-chave, etc. para reduzir a precisão sem gastar tokens',
    QATitle: 'Fragmentação no formato de Perguntas e Respostas',
    QATip: 'Habilitar esta opção consumirá mais tokens',
    QALanguage: 'Fragmentar usando',
    estimateCost: 'Estimativa',
    estimateSegment: 'Fragmentos estimados',
    segmentCount: 'fragmentos',
    calculating: 'Calculando...',
    fileSource: 'Pré-processar documentos',
    notionSource: 'Pré-processar páginas',
    other: 'e outros ',
    fileUnit: ' arquivos',
    notionUnit: ' páginas',
    previousStep: 'Passo anterior',
    nextStep: 'Salvar e Processar',
    save: 'Salvar e Processar',
    cancel: 'Cancelar',
    sideTipTitle: 'Por que fragmentar e pré-processar?',
    sideTipP1: 'Ao processar dados de texto, fragmentar e limpar são duas etapas importantes de pré-processamento.',
    sideTipP2: 'A fragmentação divide um texto longo em parágrafos para que os modelos possam entender melhor. Isso melhora a qualidade e relevância dos resultados do modelo.',
    sideTipP3: 'A limpeza remove caracteres e formatos desnecessários, tornando o Conhecimento mais limpo e fácil de analisar.',
    sideTipP4: 'Fragmentação e limpeza adequadas melhoram o desempenho do modelo, fornecendo resultados mais precisos e valiosos.',
    previewTitle: 'Visualização',
    previewTitleButton: 'Visualização',
    previewButton: 'Alternar para visualização no formato de Perguntas e Respostas',
    previewSwitchTipStart: 'A visualização atual do fragmento está no formato de texto, alternar para uma visualização no formato de Perguntas e Respostas irá',
    previewSwitchTipEnd: ' consumir tokens adicionais',
    characters: 'caracteres',
    indexSettingTip: 'Para alterar o método de índice, por favor vá para as ',
    retrievalSettingTip: 'Para alterar o método de índice, por favor vá para as ',
    datasetSettingLink: 'configurações do Conhecimento.',
    websiteSource: 'Site de pré-processamento',
    webpageUnit: 'Páginas',
    separatorTip: 'Um delimitador é o caractere usado para separar o texto. \\n\\n e \\n são delimitadores comumente usados para separar parágrafos e linhas. Combinado com vírgulas (\\n\\n,\\n), os parágrafos serão segmentados por linhas ao exceder o comprimento máximo do bloco. Você também pode usar delimitadores especiais definidos por você (por exemplo, ***).',
  },
  stepThree: {
    creationTitle: '🎉 Conhecimento criado',
    creationContent: 'Nomeamos automaticamente o Conhecimento, você pode modificá-lo a qualquer momento',
    label: 'Nome do Conhecimento',
    additionTitle: '🎉 Documento enviado',
    additionP1: 'O documento foi enviado para o Conhecimento',
    additionP2: ', você pode encontrá-lo na lista de documentos do Conhecimento.',
    stop: 'Parar processamento',
    resume: 'Continuar processamento',
    navTo: 'Ir para documento',
    sideTipTitle: 'O que fazer em seguida',
    sideTipContent: 'Após a conclusão da indexação do documento, o Conhecimento pode ser integrado à aplicação como contexto. Você pode encontrar a configuração de contexto na página de orquestração de prompts. Você também pode criá-lo como um plugin de indexação ChatGPT independente para lançamento.',
    modelTitle: 'Tem certeza de que deseja parar a incorporação?',
    modelContent: 'Se você precisar continuar o processamento posteriormente, você continuará de onde parou.',
    modelButtonConfirm: 'Confirmar',
    modelButtonCancel: 'Cancelar',
  },
  firecrawl: {
    apiKeyPlaceholder: 'Chave de API do firecrawl.dev',
    configFirecrawl: 'Configurar 🔥o Firecrawl',
    getApiKeyLinkText: 'Obtenha sua chave de API do firecrawl.dev',
  },
  jinaReader: {
    getApiKeyLinkText: 'Obtenha sua chave de API gratuita em jina.ai',
    configJinaReader: 'Configurar o Jina Reader',
    apiKeyPlaceholder: 'Chave de API do jina.ai',
  },
}

export default translation
