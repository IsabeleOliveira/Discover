# Introdução

A *tipografia transmite uma mensagem*, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em *negrito*.

Podemos transmitir uma mensagem diferente dependendo do *estilo* que escrevemos o texto.

Algumas das propriedades de fontes do css que podem ajudar a transmitir uma mensagem através dos textos da página são:

    - font-family (Lista de fontes e ordem de prioridade)
    - font-weight (Peso da fonte)
        -> normal | bold | bolder | lighter | 100-900
        -> dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte.
    - font-style (Estilo da fonte)
        -> normal | italic | oblique
        -> os valores que podem ser aplicados depedem da fonte usada.
    - font-size (Tamanho da fonte)

# Web Fonts

*Fontes do sistema* são as que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver esses casos podemos preparar nossas fonts para web ou usar fontes da web.

- Como Usar?
    * @font-face
    * @import
    * link
    

# Font Variant
	- p{
        font-variant: small-caps;
    }

# Font Stretch
    - Alargamento ou encolhimento da fonte;
    - Aceita palavras-chave como:
        -> expanded | condensed | normal
    - Aceita porcentagens de 50% a 200%;
    - Essa propriedade não vai funcionar em todas as fontes

# Letter e word spacing

* Letter Spacing (ESPAÇAMENTO ENTRE CARACTERES)
    - p{
        letter-spacing: 4px;
    }


* Word Spacing (ESPAÇAMENTO ENTRE PALAVRAS)
    - p{
        word-spacing: 1em;
    }


# Line Heigth e Text transform

* Line height
    - define os espaços entre linhas;
    - pode ser com unidade ou sem unidade de medida;
    - values comuns: 1.5 ou 2

* Text transform
    - values: none | capitalize | uppercase | lowercase | full-width | full-size-kana

* Text decoration
    - aparência decorativa de um texto;
    - line: underline | overline | line-through;
    - podemos aplicar mais de 1 valor;
    - style: wavy | dotted | double | dashed | solid;
    - color: <color> values

* Text align
    - alinhamento de um texto;
    - values: start | end | left | right | center | justify | match-parent

* Text shadow
    - sombra aplicada a um texto;
    - permite múltiplos valores
    - estrutura:
        -> offset-y | offset-x | blur-radius | color

* Shorthand
    - determinar os seguintes valores:
        -> font-style
        -> font-variant
        -> font-weight
        -> font-stretch
        -> line-height
        -> font-family