# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos

* Element Selector
    - Todos os elementos HTML
    ```html
    <h1>Titulo da página</h1>
    <p>Conteúdo da página</p>
    ```

    ```css
    h1{
        color:blue;
        font-size: 60px;
    }

    p{
        color:green;
    }
    ```

* ID Selector
    - Um elemento que tenha um atributo id
    - Cada id deve ser único
    ```html
    <h1 id="title">Titulo da página</h1>
    <p id="content">Conteúdo da página</p>
    ```

    ```css 
    #title{
        color:yellow;
    }

    #content{
        color: orange;
    }
    ```

* Class Selector
    - Os elementos com atributo class, podendo ter uma ou mais classes
    - Usa-se . pra indicar um class selector

    ```html
    <h1 id="title">Titulo da página</h1>
    <p id="content">Conteúdo da página</p>
    ```
* Attribute Selector
    - Um elemento que tenha um atributo específico.
* Pseudo-class Selector
    - Elementos em um estado específico

## Múltiplos

Você pode selecionar múltimos elementos e aplicar alguma regra CSS para todos eles.

Usamos uma separaçã por vírgulas para isso:

```css
h1, p, a{
    color: red;
}
```
