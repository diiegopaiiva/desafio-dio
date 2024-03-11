### 1.  Propriedade `border-width`:

- **Descrição**:
  - `border-width` é uma propriedade CSS que define a largura das bordas de um elemento.
- **Valores**:
  - Pode ser especificado como um valor único para todas as quatro bordas ou como uma lista separada por espaços para especificar tamanhos diferentes para cada borda.
  - Os valores podem ser em unidades absolutas (como pixels, centímetros) ou relativas (como porcentagem, em).
- **Exemplo**:
  ```css
  .elemento {
      border-width: 2px; /* Define a largura da borda para 2 pixels em todas as quatro bordas */
  }

  .elemento {
      border-width: 2px 4px; /* Define a largura da borda para 2 pixels na borda superior e inferior e 4 pixels nas bordas esquerda e direita */
  }

  .elemento {
      border-width: 1px 2px 3px 4px; /* Define a largura da borda para 1 pixel na borda superior, 2 pixels na borda direita, 3 pixels na borda inferior e 4 pixels na borda esquerda */
  }
  ```
- **Detalhes**:
  - Se apenas um valor é especificado, ele se aplica a todas as quatro bordas.
  - Se dois valores são especificados, o primeiro valor se aplica à borda superior e inferior, enquanto o segundo valor se aplica às bordas esquerda e direita.
  - Se três valores são especificados, o primeiro valor se aplica à borda superior, o segundo valor à borda esquerda e direita, e o terceiro valor à borda inferior.
  - Se quatro valores são especificados, eles são aplicados em ordem: borda superior, borda direita, borda inferior e borda esquerda.
  - O tamanho da borda pode ser zero para remover completamente a borda de um elemento.
  - É importante observar que o tamanho da borda adiciona à largura e altura totais do elemento.

### 2. Propriedade `border-style`:

- **Descrição**:
  - `border-style` é uma propriedade CSS que define o estilo das bordas de um elemento.
- **Valores**:
  - Pode ser especificado como um valor único para todas as quatro bordas ou como uma lista separada por espaços para especificar estilos diferentes para cada borda.
  - Os valores comuns incluem: `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`, e `none`.
- **Exemplo**:
  ```css
  .elemento {
      border-style: solid; /* Define o estilo da borda como sólida em todas as quatro bordas */
  }

  .elemento {
      border-style: dotted dashed; /* Define o estilo da borda como pontilhada na borda superior e tracejada nas bordas esquerda, direita e inferior */
  }

  .elemento {
      border-style: solid none double; /* Define o estilo da borda como sólida na borda superior, nenhuma na borda direita e dupla na borda inferior e esquerda */
  }
  ```
- **Detalhes**:
  - Se apenas um valor é especificado, ele se aplica a todas as quatro bordas.
  - Se dois valores são especificados, o primeiro valor se aplica à borda superior e inferior, enquanto o segundo valor se aplica às bordas esquerda e direita.
  - Se três valores são especificados, o primeiro valor se aplica à borda superior, o segundo valor à borda esquerda e direita, e o terceiro valor à borda inferior.
  - Se quatro valores são especificados, eles são aplicados em ordem: borda superior, borda direita, borda inferior e borda esquerda.
  - `none` é comumente usado para remover completamente a borda de um elemento.
  - Os estilos de borda como `dotted` (pontilhada) e `dashed` (tracejada) são úteis para criar efeitos visuais decorativos.
  - Além dos estilos mencionados, há outros estilos de borda que podem ser explorados para atender às necessidades de design específicas.

 

### 3. Propriedade `border-color`:

- **Descrição**:
  - `border-color` é uma propriedade CSS que define a cor das bordas de um elemento.
- **Valores**:
  - Pode ser especificado como um valor único para todas as quatro bordas ou como uma lista separada por espaços para especificar cores diferentes para cada borda.
  - Os valores podem ser nomes de cores, códigos hexadecimais, valores RGB ou RGBA.
- **Exemplo**:
  ```css
  .elemento {
      border-color: red; /* Define a cor da borda como vermelha em todas as quatro bordas */
  }

  .elemento {
      border-color: #ff0000 #00ff00; /* Define a cor da borda superior como vermelha e a cor da borda direita como verde */
  }

  .elemento {
      border-color: rgb(255, 0, 0) rgba(0, 255, 0, 0.5); /* Define a cor da borda superior como vermelha e com transparência de 50% */
  }
  ```
- **Detalhes**:
  - Se apenas um valor é especificado, ele se aplica a todas as quatro bordas.
  - Se dois valores são especificados, o primeiro valor se aplica à borda superior e inferior, enquanto o segundo valor se aplica às bordas esquerda e direita.
  - Se três valores são especificados, o primeiro valor se aplica à borda superior, o segundo valor à borda esquerda e direita, e o terceiro valor à borda inferior.
  - Se quatro valores são especificados, eles são aplicados em ordem: borda superior, borda direita, borda inferior e borda esquerda.
  - Você pode usar nomes de cores comuns, códigos hexadecimais, valores RGB ou RGBA para especificar a cor das bordas.
  - A transparência pode ser definida usando o valor RGBA, onde o último parâmetro representa a opacidade (0 é totalmente transparente e 1 é totalmente opaco).

  

### 4. Propriedade `border`:

- **Descrição**:
  - `border` é uma propriedade CSS abreviada que permite definir todas as propriedades de borda (largura, estilo e cor) em uma única declaração.
- **Valores**:
  - Pode ser especificado como um valor único para definir todas as quatro bordas da mesma forma.
  - Pode ser especificado como uma lista separada por espaços para definir propriedades diferentes para cada borda, na ordem: largura, estilo e cor.
- **Exemplo**:
  ```css
  .elemento {
      border: 2px solid black; /* Define uma borda de 2 pixels de largura, sólida e preta em todas as quatro bordas */
  }

  .elemento {
      border: 2px solid black red; /* Define uma borda de 2 pixels de largura, sólida e preta na borda superior e inferior, e vermelha na borda esquerda e direita */
  }

  .elemento {
      border: 1px dashed #00ff00; /* Define uma borda de 1 pixel de largura, tracejada e verde em todas as quatro bordas */
  }
  ```
- **Detalhes**:
  - Se apenas um valor é especificado, ele será aplicado a todas as quatro bordas.
  - Se dois valores são especificados, o primeiro valor é a largura da borda e o segundo valor é o estilo da borda (por exemplo, `2px solid`).
  - Se três valores são especificados, o primeiro valor é a largura da borda, o segundo valor é o estilo da borda e o terceiro valor é a cor da borda (por exemplo, `2px solid black`).
  - Se quatro valores são especificados, eles são aplicados em ordem: largura da borda, estilo da borda, cor da borda e raio do canto (se especificado).
  - Essa propriedade abreviada é útil para simplificar o código CSS ao definir propriedades de borda para um elemento, especialmente quando as bordas têm propriedades semelhantes.

 

### 5. Propriedade `border-radius`:

- **Descrição**:
  - `border-radius` é uma propriedade CSS que define o raio dos cantos de um elemento, arredondando-os.
- **Valores**:
  - Pode ser especificado como um valor único para definir o mesmo raio de curvatura para todos os cantos.
  - Pode ser especificado como quatro valores separados por espaços para definir o raio de curvatura de cada canto separadamente, no seguinte formato: `top-left top-right bottom-right bottom-left`.
- **Exemplo**:
  ```css
  .elemento {
      border-radius: 10px; /* Define um raio de curvatura de 10 pixels para todos os cantos */
  }

  .elemento {
      border-radius: 10px 20px; /* Define um raio de curvatura de 10 pixels para os cantos superiores e inferiores e 20 pixels para os cantos esquerdos e direitos */
  }

  .elemento {
      border-radius: 5px 10px 15px 20px; /* Define um raio de curvatura de 5 pixels para o canto superior esquerdo, 10 pixels para o canto superior direito, 15 pixels para o canto inferior direito e 20 pixels para o canto inferior esquerdo */
  }
  ```
- **Detalhes**:
  - Se apenas um valor é especificado, ele é aplicado a todos os quatro cantos do elemento.
  - Se dois valores são especificados, o primeiro valor se aplica aos cantos superiores e inferiores, enquanto o segundo valor se aplica aos cantos esquerdo e direito.
  - Se três valores são especificados, o primeiro valor se aplica ao canto superior esquerdo, o segundo valor ao canto superior direito e o terceiro valor se aplica aos cantos inferior esquerdo e inferior direito.
  - Se quatro valores são especificados, cada valor é aplicado a um canto específico, no formato: `top-left top-right bottom-right bottom-left`.
  - A propriedade `border-radius` pode aceitar valores em pixels, em porcentagem ou em outras unidades de medida, como `em` ou `rem`.
  
Essa propriedade é amplamente utilizada para criar elementos com bordas arredondadas, como botões, caixas de diálogo, contêineres e muito mais. Ela permite uma maior flexibilidade no design de interfaces de usuário, proporcionando uma aparência mais suave e agradável.



### 6. Propriedade `border-image-source`:

- **Descrição**:
  - `border-image-source` é uma propriedade CSS que especifica o caminho para a imagem a ser usada como borda de um elemento.
- **Valor**:
  - Pode ser uma URL que aponta para o arquivo de imagem a ser usado.
- **Exemplo**:
  ```css
  .elemento {
      border-image-source: url('caminho/para/imagem.png');
  }
  ```
  ```css
  .elemento {
      border-image-source: linear-gradient();
  }
  ```
- **Detalhes**:
  - Essa propriedade é usada em conjunto com a propriedade `border-image` para criar bordas personalizadas usando uma imagem.
  - A imagem especificada é dividida em nove partes, onde a parte central é usada para preencher a área de conteúdo do elemento e as partes restantes são usadas para estender as bordas.
  - A propriedade `border-image-source` é apenas uma parte do conjunto completo de propriedades `border-image`, que inclui `border-image-slice`, `border-image-width`, `border-image-outset` e `border-image-repeat`.
  - É importante fornecer um caminho válido para a imagem que será usada como borda, caso contrário, a borda não será exibida corretamente.
  - O uso de imagens como bordas permite criar efeitos visuais complexos e personalizados que não são possíveis apenas com as propriedades de borda padrão do CSS.

### 7. Propriedade `border-image-slice`:

  A propriedade `border-image-slice` em CSS é utilizada para especificar as dimensões da área da imagem da borda que será desenhada. Isso é importante especialmente quando se trabalha com imagens que serão utilizadas para criar bordas de elementos, permitindo que você defina áreas específicas da imagem para serem redimensionadas, repetidas ou esticadas.

- **Descrição**:
  - A propriedade `border-image-slice` define a área da imagem da borda que será desenhada. Ela divide a imagem da borda em nove partes distintas: quatro cantos, quatro bordas e uma área central.
- **Valores**:
  - Pode ser especificado como um valor único, que representa o valor para as quatro partes (topo, direita, inferior e esquerda) da imagem da borda.
  - Também pode ser especificado como quatro valores separados por espaços, cada um representando uma fatia específica da imagem da borda na ordem: parte superior, direita, inferior e esquerda.
  - Os valores podem ser definidos em unidades absolutas (por exemplo, pixels) ou em porcentagem.
- **Exemplo**:
  ```css
  .elemento {
      border-image-slice: 30%; /* Define a fatia da imagem da borda para 30% da largura/altura da imagem em todas as quatro partes */
  }

  .elemento {
      border-image-slice: 10% 20%; /* Define a fatia da imagem da borda para 10% da largura/altura da imagem na parte superior e inferior, e 20% nas laterais */
  }

  .elemento {
      border-image-slice: 10% 20% 15% 25%; /* Define a fatia da imagem da borda para 10% na parte superior, 20% na parte direita, 15% na parte inferior e 25% na parte esquerda */
  }
  ```
- **Detalhes**:
  - O valor padrão é `100%`, o que significa que a imagem da borda é dividida igualmente em todas as partes.
  - Ao ajustar a fatia da imagem da borda, você pode controlar como a imagem é redimensionada e repetida para criar uma borda personalizada.
  - Os valores podem ser definidos em porcentagem ou em unidades absolutas, proporcionando uma flexibilidade adicional na criação de bordas com imagens.


### 8.  Propriedade `border-image-width`:


  A propriedade `border-image-width` em CSS é utilizada para especificar a largura da borda da imagem, que é a largura da área da imagem da borda que será desenhada. Isso permite controlar a largura da borda criada a partir da imagem, ajudando a ajustar o visual da borda conforme necessário.


- **Descrição**:
  - A propriedade `border-image-width` define a largura da borda da imagem, que é a largura da área da imagem da borda que será desenhada.
- **Valores**:
  - Pode ser especificado como um valor único, que representa a largura da borda para todas as quatro partes (topo, direita, inferior e esquerda) da imagem da borda.
  - Também pode ser especificado como quatro valores separados por espaços, cada um representando a largura da borda para uma parte específica da imagem da borda na ordem: parte superior, direita, inferior e esquerda.
  - Os valores podem ser definidos em unidades absolutas (por exemplo, pixels) ou em porcentagem.
- **Exemplo**:
  ```css
  .elemento {
      border-image-width: 10px; /* Define a largura da borda da imagem para 10 pixels em todas as quatro partes */
  }

  .elemento {
      border-image-width: 5px 10px; /* Define a largura da borda da imagem para 5 pixels na parte superior e inferior, e 10 pixels nas laterais */
  }

  .elemento {
      border-image-width: 5px 10px 15px 20px; /* Define a largura da borda da imagem para 5 pixels na parte superior, 10 pixels na parte direita, 15 pixels na parte inferior e 20 pixels na parte esquerda */
  }
  ```
- **Detalhes**:
  - O valor padrão é `1`, o que significa que a largura da borda é definida como `1`.
  - Ao ajustar a largura da borda da imagem, você pode controlar a aparência da borda, tornando-a mais fina ou mais espessa conforme necessário.
  - Os valores podem ser definidos em porcentagem ou em unidades absolutas, proporcionando uma flexibilidade adicional na criação de bordas com imagens.
  - É importante observar que a largura da borda da imagem é aplicada sobre a largura da borda tradicional.

### 9. Propriedade `border-image-repeat`:

  A propriedade `border-image-repeat` em CSS é utilizada para controlar a repetição da imagem de borda ao longo do elemento.


- **Descrição**:
  - A propriedade `border-image-repeat` especifica como a imagem de borda será repetida ao longo das bordas de um elemento.
- **Valores**:
  - `stretch`: A imagem de borda é esticada para preencher o espaço disponível ao longo da borda.
  - `repeat`: A imagem de borda é repetida até preencher completamente o espaço disponível ao longo da borda. Se a imagem não couber perfeitamente, ela será repetida sem escala.
  - `round`: A imagem de borda é repetida até que o número total de repetições preencha completamente o espaço disponível ao longo da borda, e as imagens individuais são redimensionadas para se ajustarem precisamente.
  - `space`: A imagem de borda é repetida até que o número total de repetições preencha completamente o espaço disponível ao longo da borda, mas o espaçamento entre as imagens é distribuído uniformemente.
- **Exemplo**:
  ```css
  .elemento {
      border-image-source: url('caminho/para/imagem.png');
      border-image-repeat: repeat; /* Repete a imagem de borda */
  }
  ```
- **Detalhes**:
  - Esta propriedade permite controlar como a imagem de borda é repetida ao longo das bordas do elemento.
  - Dependendo do efeito desejado, você pode escolher entre esticar a imagem, repeti-la, redimensioná-la precisamente ou distribuir uniformemente o espaçamento entre as imagens repetidas.
  - O valor padrão é `stretch`, o que significa que a imagem de borda será esticada para preencher a borda.
  - Esta propriedade é especialmente útil ao criar bordas personalizadas usando imagens, pois oferece controle sobre como a imagem é repetida para criar o efeito desejado.

### 10. Propriedade `border-image-outset`:

  A propriedade `border-image-outset` em CSS é utilizada para controlar o espaço extra que é adicionado ao redor da borda de uma imagem de borda.


- **Descrição**:
  - A propriedade `border-image-outset` especifica a quantidade de espaço extra que é adicionada ao redor da borda de uma imagem de borda.
- **Valor**:
  - Pode ser especificado como um valor único, que é aplicado a todas as bordas.
  - Também pode ser especificado como até quatro valores separados por espaços, que são aplicados na ordem: superior, direita, inferior e esquerda.
  - Os valores podem ser definidos em unidades absolutas (como pixels) ou em porcentagem.
- **Exemplo**:
  ```css
  .elemento {
      border-image-source: url('caminho/para/imagem.png');
      border-image-outset: 10px; /* Adiciona 10 pixels de espaço extra ao redor de todas as bordas */
  }

  .elemento {
      border-image-source: url('caminho/para/imagem.png');
      border-image-outset: 5px 10px; /* Adiciona 5 pixels de espaço extra à borda superior e inferior, e 10 pixels à borda esquerda e direita */
  }
  ```
- **Detalhes**:
  - Esta propriedade é útil quando você precisa adicionar espaço extra ao redor da borda de uma imagem de borda, criando um efeito de afastamento da borda.
  - Os valores positivos expandem o espaço ao redor da borda, enquanto os valores negativos reduzem o espaço.
  - O valor padrão é `0`, o que significa que não há espaço extra adicionado ao redor da borda.
  - O espaço extra adicionado pela propriedade `border-image-outset` não afeta o layout do conteúdo, mas apenas altera a aparência da borda da imagem.

### 11. Propriedade `border-image`:

  A propriedade `border-image` em CSS é uma propriedade abreviada que permite definir todas as propriedades relacionadas à borda de uma imagem em uma única declaração. Vamos explorar detalhadamente:


- **Descrição**:
  - `border-image` é uma propriedade CSS abreviada que combina várias outras propriedades relacionadas à borda de uma imagem em uma única declaração.
- **Valores**:
  - Pode ser especificado como um valor único ou uma lista separada por espaços contendo os valores para: `border-image-source`, `border-image-slice`, `border-image-width`, `border-image-outset`, e `border-image-repeat`.
- **Exemplo**:
  ```css
  .elemento {
      border-image: url('caminho/para/imagem.png') 30% round 10px repeat;
  }
  ```
- **Detalhes**:
  - A ordem dos valores é a seguinte: `source`, `slice`, `width`, `outset` e `repeat`.
  - Essa propriedade é útil para simplificar o código CSS ao definir várias propriedades relacionadas à borda de uma imagem.
  - Ao usar a propriedade `border-image`, você pode definir a imagem da borda, como ela é cortada e redimensionada, sua largura, o espaço extra ao redor da borda e como a imagem é repetida ao longo da borda, tudo em uma única declaração.
  - É importante lembrar que, se algum valor não for especificado na propriedade abreviada, o navegador usará seu valor padrão correspondente.