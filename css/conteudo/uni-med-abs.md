As unidades de medidas absolutas em CSS são aquelas que não dependem do contexto do elemento ou do ambiente de exibição, mas são baseadas em unidades físicas reais. Isso significa que elas mantêm um tamanho fixo e não são afetadas pelas configurações do dispositivo do usuário, como o tamanho da tela ou a resolução. Aqui estão algumas das unidades de medidas absolutas mais comuns:

1. **Pixels (px)**:
   - O pixel é a unidade de medida mais comum e amplamente utilizada em CSS.
   - Um pixel representa um ponto na tela do dispositivo.
   - Pixels são utilizados para definir tamanhos precisos de elementos, bordas, margens, etc.
   - Por ser uma unidade fixa, o tamanho em pixels permanece constante independentemente da resolução do dispositivo.

2. **Polegadas (in)**:
   - Uma polegada é uma medida de comprimento equivalente a 2,54 centímetros.
   - A unidade `in` é utilizada para definir tamanhos de elementos em relação às dimensões físicas da tela, como em impressões ou documentos PDF.
   - No entanto, devido à variedade de tamanhos de tela e à natureza fluida da web, o uso de polegadas é menos comum em desenvolvimento web.

3. **Centímetros (cm)**:
   - O centímetro é uma unidade de medida de comprimento equivalente a 0,01 metros ou 10 milímetros.
   - Assim como as polegadas, os centímetros são utilizados principalmente para definição de tamanhos em documentos de impressão ou PDF.

4. **Milímetros (mm)**:
   - O milímetro é uma unidade de medida de comprimento equivalente a 0,001 metros ou 0,1 centímetros.
   - É menos comum em design web, mas pode ser usado em situações específicas que requerem precisão absoluta em tamanhos de elementos.

As unidades de medidas absolutas são úteis quando se deseja um controle preciso sobre o tamanho dos elementos, especialmente em situações onde a consistência de tamanho é importante, como em designs fixos ou em impressões. No entanto, é importante considerar a acessibilidade e a responsividade ao definir tamanhos absolutos, pois eles podem não se ajustar adequadamente em dispositivos com diferentes tamanhos de tela ou resoluções.

### dimension

No CSS, um `<dimension>` é uma representação numérica de uma medida, podendo ser especificada em diversas unidades de medida. Existem vários tipos numéricos que podem ser utilizados para representar dimensões em CSS. Aqui estão alguns dos tipos numéricos mais comuns que contemplam o `<dimension>`:

1. **Número inteiro (Integer)**:
   - Um número inteiro é uma representação numérica sem frações ou casas decimais.
   - Exemplo: `10`, `20`, `-5`.

2. **Número decimal (Number)**:
   - Um número decimal é uma representação numérica que pode conter frações ou casas decimais.
   - Exemplo: `3.14`, `2.5`, `-0.75`.

3. **Porcentagem (Percentage)**:
   - A porcentagem é uma representação numérica que indica uma fração de um valor base, geralmente 100%.
   - Em muitos casos, a porcentagem é usada para especificar proporções em relação a um valor base.
   - Exemplo: `50%`, `25%`, `75%`.

4. **Comprimento (Length)**:
   - A comprimento é uma representação numérica de uma medida física, como pixels, centímetros, milímetros, polegadas, etc.
   - Exemplos de unidades de comprimento incluem `px` (pixels), `em` (vezes a altura da fonte), `rem` (vezes a altura da fonte do elemento raiz), `cm` (centímetros), `mm` (milímetros), `in` (polegadas), `pt` (pontos) e `pc` (picas).
   - Exemplo: `10px`, `2em`, `5rem`, `1in`.

5. **Ângulo (Angle)**:
   - O ângulo é uma representação numérica de uma medida de ângulo.
   - Unidades de ângulo incluem `deg` (graus), `rad` (radianos) e `turn` (voltas completas).
   - Exemplo: `90deg`, `1.5708rad`, `0.25turn`.

Esses são os tipos numéricos comuns que podem ser usados para representar dimensões em CSS. Cada tipo tem suas próprias unidades e valores permitidos, e a escolha do tipo e unidade depende do contexto e dos requisitos específicos de design.

### Pixels Físicos e Lógicos

Em CSS, existem dois tipos de pixels: os pixels físicos e os pixels lógicos.

1. **Pixels Físicos (Physical Pixels)**:
   - Os pixels físicos, também conhecidos como "pontos de grade", são os pontos individuais na tela do dispositivo físico.
   - Cada dispositivo possui uma densidade de pixels físicos, que é a quantidade de pixels físicos por polegada (PPI ou DPI).
   - Dispositivos com alta densidade de pixels, como telas de alta resolução (Retina, por exemplo), têm mais pixels físicos por polegada do que dispositivos comuns.
   - Nos dispositivos de alta densidade de pixels, cada pixel físico ocupa um espaço menor na tela, resultando em uma exibição mais nítida e detalhada de conteúdo.

2. **Pixels Lógicos (CSS Pixels)**:
   - Os pixels lógicos, também conhecidos como "pixels CSS" ou "pixels independentes de dispositivos", são unidades de medida usadas pelo CSS para especificar dimensões e posicionamento de elementos na página da web.
   - Os pixels lógicos são independentes da densidade de pixels do dispositivo e são utilizados para garantir a consistência visual em diferentes dispositivos e resoluções.
   - O navegador converte automaticamente as dimensões especificadas em pixels lógicos para pixels físicos com base na densidade de pixels do dispositivo.
   - Por exemplo, em uma tela de alta densidade de pixels, como uma tela Retina, um pixel lógico pode ser mapeado para quatro ou mais pixels físicos, garantindo que o conteúdo permaneça nítido e legível.
   - Isso permite que os desenvolvedores criem layouts responsivos que se ajustem automaticamente a diferentes tamanhos e densidades de tela, proporcionando uma experiência consistente em vários dispositivos.

Em resumo, os pixels físicos são os pontos reais na tela do dispositivo, enquanto os pixels lógicos são unidades de medida abstratas usadas pelo CSS para criar layouts consistentes e responsivos em diferentes dispositivos e resoluções.