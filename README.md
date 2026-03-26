# Franca Abre Novas Portas 🍊

Site institucional responsivo da Prefeitura de Franca/SP, voltado para atração de investimentos e apoio ao empreendedorismo.

## ✅ Funcionalidades Implementadas

- **Navbar fixa** com fundo escuro (navy), link ativo ao scroll, menu hambúrguer mobile
- **Hero Section** com título animado, CTA duplo, card visual e estatísticas
- **Seção "Por que Franca?"** com 4 cards de diferenciais com hover animado
- **Seção "Investe Franca"** com fundo laranja, 3 cards de benefícios e CTA externo
- **Banner de pessoas** com fotos diversas e efeito de hover
- **Seção "Franca apoia você"** com accordion interativo (abrir/fechar com +/-)
  - Sala do Empreendedor
  - Bom Crédito
  - Sandbox Regulatório
  - Emprega Franca
- **Seção de reconhecimento** com depoimento e badges
- **CTA Final** com fundo navy e chamada para ação
- **Footer completo** com logo, links, contato e redes sociais
- **Botão "voltar ao topo"** flutuante com aparição por scroll
- **Animações** com IntersectionObserver ao entrar na viewport
- **Contador animado** nas estatísticas do hero
- **Scroll suave** para todas as âncoras
- **Acessibilidade**: aria-labels, aria-expanded, navegação por teclado (ESC fecha menu)

## 📁 Estrutura de Arquivos

```
index.html              — Página principal
css/
  style.css             — Estilos completos + responsivo
js/
  main.js               — JavaScript: navbar, accordion, scroll, animações
README.md               — Documentação do projeto
```

## 🎨 Design

| Elemento     | Valor             |
|-------------|-------------------|
| Laranja      | `#FF6B00`         |
| Navy escuro  | `#0d1a2e`         |
| Navy médio   | `#1a2a4a`         |
| Branco       | `#ffffff`         |
| Cinza claro  | `#f5f6fa`         |
| Font Heading | Montserrat (800/900) |
| Font Body    | Open Sans (400/600) |

## 🔗 URIs e Seções

| Âncora                  | Conteúdo                        |
|-------------------------|----------------------------------|
| `#hero`                 | Hero principal                   |
| `#por-que-franca`       | Por que escolher Franca?         |
| `#investe-franca`       | Programa Investe Franca          |
| `#programas`            | Programas de apoio (accordion)   |

## 📌 Comportamentos (conforme PDF de direcionamentos)

- **Accordion**: ao clicar em `+` a aba se abre e o símbolo vira `-`; a aba anteriormente aberta se fecha automaticamente
- **CTAs dos programas**: cada item tem botão que redireciona para link externo (`target="_blank"`)
- **Menu**: ao clicar em um item, o fundo fica escuro e o link fica em laranja; rola até a seção correspondente
- **Logo**: redireciona para o site da Prefeitura (`#hero` / `franca.sp.gov.br`)
- **Redes sociais**: links externos direcionados ao site oficial
- **Seta de topo**: botão flutuante que direciona ao topo da página

## 🚀 Próximos Passos Recomendados

1. Substituir os SVGs ilustrativos por fotos reais fornecidas pela Prefeitura
2. Adicionar o logo oficial da Prefeitura de Franca em PNG/SVG
3. Conectar CTAs aos links reais dos programas municipais
4. Adicionar seção de mapa com a localização de Franca (Google Maps embed)
5. Incluir galeria de empresas instaladas
6. Adicionar formulário de contato para captura de leads investidores
7. Integrar vídeo institucional no Hero (player embutido)
