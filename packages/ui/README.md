
# UI Framework Roadmap

Este projeto visa ser um UI Framework completo, compondo todos os elementos essenciais para aplicações modernas, com foco em acessibilidade, composição, responsividade e integração com nosso design system.

Abaixo está a lista de componentes que devem ser implementados, organizados por categoria. Use este checklist para acompanhar o progresso e preencher cada componente conforme for desenvolvendo.

---

## 🟦 Foundation

- [ ] **ThemeProvider**  
  Gerencia tokens, troca de tema em tempo real, aplica custom properties.

- [ ] **Portal**  
  Renderização fora da árvore principal (dropdowns, modais, tooltips).

- [ ] **tv.ts**  
  Utilitário para tailwind-variants.

---

## 🟨 Tipografia

- [ ] **Heading** (`.heading-1`, `.heading-2`, etc)
- [ ] **Text** (`.text-primary`, `.text-secondary`, etc)

---

## 🟧 Formulários

- [ ] **Form**
  - [ ] Form.Group
  - [ ] Form.Label
  - [ ] Form.Error
- [ ] **Input** (text, email, password, number)
- [ ] **Textarea**
- [ ] **Select** (custom, digitável, com portal)
- [ ] **Checkbox**
- [ ] **Radio**
- [ ] **Switch**
- [ ] **Slider**
- [ ] **FileInput**
- [ ] **Combobox** (Input + Dropdown)
- [ ] **DatePicker**
- [ ] **TimePicker**
- [ ] **RangePicker**
- [ ] **InputMask**
- [ ] **OTPInput**
- [ ] **DurationInput**
- [ ] **CurrencyInput**

---

## 🟦 Botões & Ações

- [ ] **Button**
- [ ] **IconButton**
- [ ] **ButtonGroup**

---

## 🟪 Feedback

- [ ] **Alert**
- [ ] **Badge**
- [ ] **Chip**
- [ ] **Progress**
- [ ] **Skeleton**
- [ ] **Spinner/Loader**
- [ ] **Toast**
- [ ] **Tooltip**
- [ ] **Popover**

---

## 🟥 Overlay

- [ ] **Modal**
- [ ] **Drawer**
- [ ] **Dropdown** (usando Portal, digitável, acessível)
- [ ] **Menu** (context menu, dropdown menu)

---

## 🟫 Navegação

- [ ] **Tabs**
- [ ] **Accordion**
- [ ] **Breadcrumb**
- [ ] **Pagination**
- [ ] **Stepper**
- [ ] **Sidebar**
- [ ] **Navbar**
- [ ] **CommandPalette**

---

## 🟦 Data Display

- [ ] **Avatar**
- [ ] **Table**
- [ ] **List**
- [ ] **Card**
- [ ] **Timeline**
- [ ] **Tag**
- [ ] **EmptyState**
- [ ] **Divider**

---

## 🟩 Ícones

- [ ] **Icon Lucide** (sistema de ícones customizável)

---

## 🧩 Observações

- Sempre compor componentes complexos a partir dos básicos (ex: Combobox = Input + Button + Dropdown).
- Seguir tokens e temas definidos em `theme.ts`.
- Não usar libs externas de UI.

---

> **Dica:** Marque os componentes já implementados e adicione observações conforme necessário.

