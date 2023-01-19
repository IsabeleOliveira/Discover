# Pseudo-classes


* É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

> Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse sobre ele.

* Pseudo-classes começam com 2 pontos seguido do nome da pseudo class :pseudo-class-name

## first-child

É quando queremos selecionar o primeiro filho de um grupo de elementos.

```html

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>

```

```css

ul li:first-child {
  font-weight: bold;
}

``` 

## nth-of-type

> :nth-of-type()

Pega o elemento por tipo e posição

```html

  <ul>
  <h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  </ul>

```

```css

  ul li:nth-of-type(1) {
  font-weight: bold;
}

```

## nth-child

> :nth-child()

É quando queremos selecionar o primeiro filho de um grupo de elementos.

```html

  <ul>
    <h3>Palavras bonitas</h3>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
  </ul>

```

```css

  ul li:nth-child(2) {
  font-weight: bold;
}

```

## nth-child odd e even

> nt-child(odd) E :nth-child(even)

> even(números pares)
> odd(números impares)


```html

<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
```

```css

ul li:nth-child(odd) {
  color: gray;
}

```

## hover e focus

> Ações do usuário

Alguns estlos só são aplicados quando o usuário faz alguma ação na página

  
*a:hover {color: red;}*

* vai mudar a cor do link para vermelho quando o usuário *passar o mouse sobre* o link;
* é aplicado quando o elemento rece o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual tipo "ativo".

*input:focus {border-color: red;}*

## disabled e required

Também podemos usar atributos para selecionar elementos no CSS.

* Atributos
  - :disabled
  ```html
  <input type="text" disabled>
  ```

  ```css
  input:disabled {
    background-color: green;
  }
  ```

  - :required
  ```html
  <input type="text" required>
  ```

  ```css
  input:required {
    background-color: red;
  } 
  ```