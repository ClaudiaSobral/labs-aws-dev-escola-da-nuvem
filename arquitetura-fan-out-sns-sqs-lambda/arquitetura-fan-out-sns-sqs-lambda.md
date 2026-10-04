# Lab - Arquitetura Fan-Out com SNS, SQS e Lambda

## Objetivos
- Usar o Amazon SNS para publicar uma mensagem que será distribuída para múltiplos assinantes. 
- Configurar filtros de assinatura SNS para que diferentes Lambdas processem apenas mensagens relevantes. 
- Integrar o SNS com Amazon SQS para desacoplar o processamento e aumentar a resiliência, com uma das "ramificações" do fan-out. 
- Criar múltiplas AWS Lambda functions que serão acionadas pelos eventos do SNS (diretamente ou via SQS), cada uma realizando uma tarefa distinta. 
- Configurar Dead-Letter Queues (DLQs) para tratamento de erros em uma das filas SQS.
- Monitorar o fluxo usando o Amazon CloudWatch Logs.

## Passo a passo
- Criar uma Dead Letter Queue
- Criar uma fila principal
- Criar tópico SNS
- Criar permissão para uma Lambda executar e escrever logs no CloudWatch e permissão para a outra Lambda consumir SQS
    - A que executa logs no CloudWatch recebe um AWSLambdaBasicExecutionRole. A que usa SQS, recebe a permissão AmazonSQSFullAccess (em produção, é aconselhado usar permissões mais restritas, mas para propósito de estudos estamos utilizamos o SQSFullAccess)
- Criar Lambdas
- Criar tópicos para processamento de pedidos e pagamentos (as Lambdas serão acionadas mediante pedido, check de inventário ou pagamento com cartão de crédito ou boleto)
    - Notificação ao cliente: notifica quando pedido é confirmado ou enviado
    - Análise de fraude: fila SQS recebe notificação se EventType for um OrderPlaced e TransactionValue > 500


## Habilidades exercitadas

Fan-Out com SNS: Utilizar o Amazon SNS como um hub central para distribuir mensagens para múltiplos destinos de forma eficiente.
Filtragem de Assinaturas SNS: Implementar filtros de atributos para garantir que cada serviço (Lambdas e SQS) processe apenas as mensagens que são relevantes para ele, otimizando o processamento e reduzindo custos.
Desacoplamento com SQS: Integrar o SNS com o Amazon SQS para criar um buffer resiliente, permitindo que tarefas mais demoradas (como a análise de fraude) sejam processadas de forma assíncrona, sem impactar o fluxo principal.
Processamento Paralelo com Lambda: Criar múltiplas funções Lambda que respondem a diferentes eventos, permitindo que diversas lógicas de negócio (atualização de inventário, processamento de pagamento, notificação ao cliente, análise de fraude) ocorram em paralelo.
Tratamento de Erros com DLQs: Configurar Dead-Letter Queues (DLQs) para capturar e isolar mensagens que não puderam ser processadas com sucesso, facilitando a depuração e a reintrodução dessas mensagens no sistema, se necessário.
Monitoramento com CloudWatch Logs: Utilizar o CloudWatch Logs para inspecionar a execução das suas funções Lambda e entender o fluxo das mensagens através do sistema.
Gerenciamento de Permissões com IAM: Criar papéis IAM específicos para suas funções Lambda, seguindo o princípio do menor privilégio.