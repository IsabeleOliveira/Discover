# A cascata:
        A  escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

        Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
    
        São levados em consideração 3 fatores:
            1. A origem do estilo;
            2. A especificidade;
            3. A importância;

    - Origem do estilo

        inline > tag style > tag link

    - Especificidade

        É um cálculo matemático, onde, cada tipo de seletor e origem de estilo, possuem valores a serem considerados.

        0. Universal selector, combinators e negation pseudo-class(:not())
        1. Element type selector e pseudo-elements (::before, ::after)
        10. Classes e attribute selectors ([type="radio"])
        100. ID selector 
        1000. Inline


    - A regra !important

    * cuidado, evite o uso
    * não é considerada uma boa prática
    * quebra o fluxo da cascata
    
