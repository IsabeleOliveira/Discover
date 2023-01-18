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
