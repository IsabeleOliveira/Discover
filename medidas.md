# Unidades de medida e valores: 

    -> Cada propriedade possui valores 'property: value'

Como conhecer e estudar os valores na documentação?
    <color> <length>
Os termos podem variar values ou data types


## Tipos numéricos

    * integer - -10 ou 223
    * number - -2,4, 64 ou 0.234
    * dimension - number com uma unidade de medida junto: 90deg, 2s, 8px
    * percentagem - fração de outro número: 50%


## Unidades comuns

    * length -  representa um valor de distância: px, em, vw
    * angle - representa um ângulo: deg, rad, turn
    * time - representa tempo: s, ms
    * resolution - resoluções para dispositivos: dpi


## Distâncias absolutas <length>
    
    -> São fixas e não alteram seu valor.

    | Unidade  | Nome                | Equivalência         |
    |----------|---------------------|----------------------|
    | cm       | Centímetros         | 1cm = 96px/2.54      | 
    | in       | Inches (polegadas)  | 1in = 2.54cm = 96px  | 
    | px       | Pixels              | 1px = 1/96th of 1in  |

    -o mais comum e mais utilizado é o PX
    -não recomendado utilizar o CM


## Distâncias relativas

    -> São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.
    
    Benefício: Maior adaptação aos diferentes tipos de tela.
    
    | Unidade  | Relativo a                                    |
    |----------|-----------------------------------------------|
    | em       | Tamanho da font do elemento pai               |
    | rem      | Tamanho da font do elemento raiz (root/html)  | 
    | vw       | 1% da viewport wid                            |  
    | vh       | 1% da viewport height                         |


    ---
    Cotidianamente o tamanho da fonte padrão do navegador é 16px e para que esse valor seja mudado tem que ser feita a alteração no root ou elemento html.
    ---

    :root{
        font-size: 18px;
    }

    html{
        font-size: 18px;
    }

    -> Viewport: parte da tela que está sendo exibida.. No caso dos navegadores web, é o que é exibido na janela/tela do documento. Conteúdos 
    que estão fora do viewport só serão exibidos quando feito um scroll da área de visualização.

## Porcentagens 
    -> length - relativo a distância
    Sempre relativo a algum valor

    Se for relativo ao elemento pai
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three
                <ul>
                    <li>Three A</li>
                    <li>Three B</li>
                    <ul>
                        <li>Three B 2</li>
                    </ul>
                
                </ul>

        </li>
    </ul>

    li{
        font-size: 80%;
    }              


## Position
    -> Conjunto de coordenadas 2D:
    
        - top, right, bottom, left e center    
        Usado para alguns tipos de propriedades como o background-position

## Funções

    reaproveitamento de código::after

    * rgb()
    * hsl()
    * url()
    * calc()

    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions

## String e Identificadores
    
    -> Strings: frases entre aspas
    -> Identificadore: red, black, gold
*/