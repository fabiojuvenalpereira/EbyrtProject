# EbytrProject
####  Muito bem, você está agora do diretório de backend do projeto EbytrProject.

##

#### Aqui é onde está localizada toda a parte de backend do projeto. Você vai encontrar um projeto baseado em arquitetura MSC, organizado por pastas, onde as principais pastas representam camadas de uma arquitetura, visando organização, melhor compreensão e facilitar a manutenção de código.



## Backend
Desenho simplificado de como os dados são armazenados no banco de dados.

![exemplo de armazenamento de dados](https://thumbs2.imgbox.com/34/65/NYJLq8at_t.png)
*Aqui você verá em forma de tabela, pois é a forma mais simples de demonstrar um exemplo de como funciona a persistência de dados do usuário.

Requisições básicas da API:
  * `/` `POST` Cria uma nova tarefa e adiciona no banco
  * `/` `GET` Busca toda tarefa que esta no banco
  * `/` `PUT`  Edita dados de uma tarefa já cadastrada no banco
  * `/:id` `DELETE` Deleta uma tarefa cadastrada no banco

