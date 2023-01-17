# Combinators

combinadores trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendent combinator

* identificado por um espaço entre os seletores.
* busca um elemento dentro de outro

```css
body article h2
```


## Child combinator

* identificado pelo sinal (>) entre dois seletores
* seleciona somente o elemento que é filho direto do pai
* elementos depois do filho direito serão considerados

```html
<body>
    <ul>
        <li>item 1</li>
        <ul>
            <li>item 2</li>
        </ul>
    </ul>
</body>
```

```css
body > ul > li{
    color: blue
}
```

## Adjacent sibling combinator

* identificado pelo sinal (+) entre dois seletores
* selecione somente o elemento do lado direito que é irmão direto da hierarquia

```html

<h1>
    titulo
</h1>
<p>
    Esse é o parágrafo
</p>
<p>
    mais um parágrafo
</p>

```

```css
h1 + p{
    color: red;
}
```

## General sibling combinator

* identificado pelo sinal (-) entre dois elementos 