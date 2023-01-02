# Form
  
- Elemento que definirá um formulário;
- É um container estilo <section> <footer>

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