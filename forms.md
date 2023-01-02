# Form
  
- Elemento que definirá um formulário;
- É um container estilo <section> <footer>;

* Atributos básicos
    - action
    - method

# Fieldset

- agrupamento de campos;
- mesmo propósito;
- semântica;
- acessibilidade. 

    ### Atributos especiais
    - disabled
        -> desabilita todos os elementos internos;
        -> não serão enviados ao submeter o formulário;
    - form
        -> o id de um formulário ao qual esse fieldset pertence;
        -> não precisa estar dentro do formulário;
    - nome
        -> nome do grupo
    
# Legend
    
- nome do agrupamento;
- primeiro elemento dentro do fieldset.

# Label

- associar e identificar uma (ou mais) tag de entrada de dados;
- acessibilidade;
- você poderá clicar para mudar o foco da entrada de dados.

    ### Atributos
    - for
        -> para fazer a conexão entre este label e a tag de entrada de dados;
        -> é feita via id de input;
        -> só funciona com elementos específicos:
            - button, input (not hidden), meter, output, progress, select, textarea.

# Button

- representa um botão;
- usado para enviar formulários;
- é estilizado pelo user agent

    ### Atributos
    - type
        -> submit;
        -> reset;
        -> button;
    - autofocus
    - disabled
    - name
    - value
    - form

# Datalist

- lista de valores como sugestão a uma tag <input>;
- valores sugestivos e não obrigatórios;
- usuário poderá selecionar um dos valores, ou colocar um valor diferente da sugestão;

    ### List
    - recebe como valor o id de um <datalist> residente no mesmo documento.

    ### Tipos de input suportados
    - text, search, url, tel, email, date, month, week, time, datetime-local, number, range e color.

    ### Tipos não suportados
    - hidden, password, checkbox, radio, file, ou qualquer tipo de button.


# Input

- Um dos mais usados em formulários
- Aceita os mais diversos tipos de dados

    ### Atributos
    - type
    - name
    - id

    ### Atributos comuns
    - autocomplete
    - autofocus
    - disabled
    - readonly
    - value
    - form
    - name
    - required
    - placeholder

    *input type="Password"*

    - Colocar uma senha de maneira segura
    - Esconde o que está sendo digitado no campo

        ### Atributos

        - minlength / maxlength
            -> o número mínimo e máximo de caractere para este campo
        - size
            -> o número aceitável de caracteres que esse campo deverá conter
        - pattern
            -> expressão regular para validar o que está sendo digitado no campo
            -> altamente recomendado a uso de um padrão de segurança alta de senhas
            -> Exemplo: 
            *   pattern="[0-9a-fA-F]{4,8}"
        - placeholder
            -> mostra um exemplo de texto a ser digitado no campo
        - readonly / disabled
            -> atributo booleano indicando se o campo está habilitado ou não
        - required
            -> o campo será obrigatório
        - inputmode
            -> poderá alterar o uso do teclado em mobile
            -> Exemplo:
            *   inputmode="numeric"
        - autocomplete
            -> on: permite a sugestão de: new-password ou current-password
            -> off: desabilita a opção de autocompletar
            -> new-password: navegador sugere uma nova senha
    
    *input type="email"*    

    ### Atributos
    - placeholder
    - readonly / disabled
    - value

    - required

    - multiple
        -> o campo irá receber 1 ou mais emails, separado por vírgula
    
    - minlength / maxlength
    - size
    - pattern
        -> uso de expressão regular para validar o campo
        -> Exemplo:
        * pattern="[]