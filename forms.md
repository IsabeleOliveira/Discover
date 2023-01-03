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
        * pattern="[".+seuemail\.com\.br"]

    - list
        -> o id de uma tag <datalist> que está no mesmo documento.
        -> <datalist> irá conter uma lista de valores pré-definidos a fim de sugerir ao usuário, quais valores estão disponívels.
            -> os valores de <datalist> que não são compatíveis com o campo, não serão apresentados como sugestão.

    *input type="url"*

    ### Atributos

    - placeholder
    - readonly / disabled
    - value

    - required
    - minlength / maxlength
    - size
    - pattern
        -> Exemplo:
        * pattern=".*\.com\.br\/.*"
    
    - list
    - spellcheck
        -> habilitar a verificação ortográfica para este input

    *input type="file"*

    - usuário pode escolher 1 ou mais arquivos para enviar no forms

    ### Atributos

    - value
    - accept
        -> descreve que tipos de arquivos são aceitos
        -> exemplo: .doc, .docx, .pdf, audio/*, image.png, .png
    - files
        -> lista de arquivos ou arquivo
    - multiple
        -> permite o envio de múltiplos arquivos

    * envio dos arquivos
        -> deve utilizar o método POST e o atributo <enctype> como "multipart/form-data"

    *input type="color"*

    ### Atributos

    - value: RGB
    - list

    *input type="checkbox"*

    - selecionar um valor para ser enviado

    ### Atributos

    - globais
    - value
    - checked
        -> para deixar o campo marcado por padrão

    "MARCAR MÚLTIPLOS VALORES"
        -> Usa o atributo "name" com o mesmo nome para os diversos campos.

    *input type="hidden"*

    - invisível ao usuário
    - será enviado com o forms
    - não receberá foco
    - leitores de tela não percebem este campo

    *input type="radio"*

    - projetado para selecionar uma única opção de um grupo

    ### Atributos especiais

    - checked
    - value


# Textarea

- mais de uma linha
- útil para textos grandes

    ### Atributos

    - id
    - name
    - rows e cols
    - maxlength e minlength
    - wrap
    
    - autocomplete, autofocus, readonly, form, required, disabled

# Select

- menu de opções

    <option>
    
    ### Atributos necessários

    - value

    ### Atributos únicos

    - multiple
    - size

    *input type="search"*

    - campo de busca
    
    ### Atributos

    - list / datalist
    - pattern
    - aria-label

    *input type="number"*

    ### Atributos 

    - min / max
    - step

    *input type="range"*

    - seleciona um valor numérico
    - slider ou dial control

    ### Atributos

    - min / max
    - step