# Terminologia

- Flex Container
    - Flex item
- Nesting
- Axis
    - main
        - start, end
    - cross
        - start, end
- Flex sizing
    - flexível
    - altera width/height dos itens para preenchimento dos espaços do flex container

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>

```

```css
.container{
    display: flex;
    border: 1px solid red;
    height: 200px;
}

.item{
    background-color: gray;
    border: 1px solid;
    flex: 1;
}