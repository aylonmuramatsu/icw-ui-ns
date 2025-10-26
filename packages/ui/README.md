# UI Framework Roadmap

Este projeto visa ser um UI Framework completo, compondo todos os elementos essenciais para aplicações modernas, com foco em acessibilidade, composição, responsividade e integração com nosso design system.

Abaixo está a lista de componentes que devem ser implementados, organizados por categoria. Use este checklist para acompanhar o progresso e preencher cada componente conforme for desenvolvendo.

---

## 🟦 Foundation

- [x] **Custom Theme**
      Fornecemos uma base no @insightcreativewebs/utils/theme.css, sempre devemos importar para usar! porém podemos criar um css das variantes das cores para customizar conforme a sua necessidade

- [x] **Portal**  
       Renderização fora da árvore principal (dropdowns, modais, tooltips).

- [x] **tv.ts**  
       Utilitário para tailwind-variants.

---

## 🟨 Tipografia

- [ ] **Heading** (`.heading-1`, `.heading-2`, etc)

---

## 🟧 Formulários

- [x] **Form**
  - [x] Form.Group
  - [x] Form.Label
- [x] **Input** (text, email, password, number)
- [x] **Textarea**
- [x] **Select** (custom, digitável, com portal)
- [x] **Checkbox**
- [ ] **Radio**
- [x] **Switch**
- [ ] **Slider**
- [ ] **FileInput**
- [ ] **Combobox** (Input + Dropdown)
- [ ] **DatePicker**
- [ ] **TimePicker**
- [ ] **RangePicker**
- [x] **InputMask**
- [ ] **OTPInput**
- [x] **DurationInput**
- [x] **CurrencyInput**

---

## 🟦 Botões & Ações

- [x] **Button**
  - [x] Outline
  - [x] Solid
  - [x] Ghost
- [ ] **IconButton**
- [x] **ButtonGroup**

---

## 🟪 Feedback

- [x] **Alert**
- [x] **Badge**
- [x] **Chip**
- [x] **Progress**
- [x] **Skeleton**
- [x] **Toast**
- [ ] **Tooltip**
- [ ] **Popover**

---

## 🟥 Overlay

- [x] **Modal**
- [ ] **Drawer**
- [ ] **Dropdown** (usando Portal, digitável, acessível)
- [ ] **Menu** (context menu, dropdown menu)

---

## 🟫 Navegação

- [x] **Tabs**
- [ ] **Accordion**
- [ ] **Breadcrumb**
- [ ] **Pagination**
- [ ] **Stepper**
- [ ] **Sidebar**
- [ ] **Navbar**
- [ ] **CommandPalette**

---

## 🟦 Data Display

- [x] **Avatar**
- [ ] **Table**
- [ ] **List**
- [ ] **Card**
- [ ] **Timeline**
- [ ] **Tag**
- [ ] **EmptyState**
- [ ] **Divider**
- [ ] **Calendar**

---

## 🟩 Ícones

- [x] **Icon Lucide** (sistema de ícones customizável)

---

## 🧩 Observações

- Sempre compor componentes complexos a partir dos básicos (ex: Combobox = Input + Button + Dropdown).
- Não usar libs externas de UI.

---

> **Dica:** Marque os componentes já implementados e adicione observações conforme necessário.
