# Aplicações com AWS Elastic Beanstalk 

## Objetivos 

- Criar uma role IAM (Perfil de Instância EC2) com as permissões necessárias para o Elastic Beanstalk. 
- Configurar e lançar um ambiente Elastic Beanstalk para uma aplicação web (Node.js neste exemplo).
- Navegar pelo console do Elastic Beanstalk para monitorar a saúde, logs e métricas da aplicação.
- Entender como o Elastic Beanstalk abstrai e gerencia a infraestrutura AWS subjacente (EC2, Auto Scaling, ELB, CloudWatch). 

## Passo a passo

![roles_beanstalk]('docs\imgs\lab_beanstalk\print_role.png')

- Criação de uma role com as seguintes políticas anexadas:
    - AWSElasticBeanstalkWebTier: permissão para servidores web interagirem com Elastic Beanstalk
    - AWSElasticBeanstalkWorkerTier - permite worket tier (operações assíncronas) com SQS
    - AWSElasticBeanstalkMulticontainerDocker - permite acessar Multi-container Docker com EC2
    - AWSElasticBeanstalkEnhancedHealth - essencial para relatórios de saúde detalhados na plataforma do Elastic Beanstalk
    - AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy - permite manutenção de serviços AWS. Não deve ser anexada a usuários

![ambiente-beanstalk]('docs\imgs\lab_beanstalk\print_ambiente_elasticbeanstalk.png')

- Criação de ambiente de desenvolvimento dentro do Elastic Beanstalk
    - Implantação de aplicação por arquivo .zip (opcional)

![aplicacao-criada]('docs\imgs\lab_beanstalk\print_app_ativo')