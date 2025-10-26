import { Badge, Button, Form, Input, InputMask, LucideIcons, Select, Tabs, Toaster, toaster } from "@insightcreativewebs/ui";


export const FreedomTest = () => {

  return (
    <>
      <Form class="bg-white">
        <Form.Group class="col-span-4">
          <Form.Label>Nome</Form.Label>
          <Input size="sm" />
        </Form.Group>
        <Form.Group class="col-span-4">
          <Form.Label>Tipo</Form.Label>
          <Select size="sm" />
        </Form.Group>

        <Form.Group class="col-span-4">
          <Form.Label>Tipo</Form.Label>
          <InputMask size="sm" mask={['(99', '(99) 9999 9999', '(99) 9 9999 9999']} />
        </Form.Group>

      </Form>
      <h3>Tabs Component:</h3>
      <Tabs>
        <Tabs.Tab key="@aba/one">
          <Tabs.TabButton >
            {/* <LucideIcons.Package class="size-4 mr-2" /> */}
            Produtos (0)
          </Tabs.TabButton>
          <Tabs.Content class="p-4 bg-red-500 w-full">
            Conteudo 1
          </Tabs.Content>

        </Tabs.Tab>
        <Tabs.Tab key="@aba/two">
          <Tabs.TabButton >Aba 2</Tabs.TabButton>
          <Tabs.Content class="p-4 bg-blue-500 w-full">
            Conteudo 2
          </Tabs.Content>
        </Tabs.Tab>

        Teste!
      </Tabs>

      <div class="flex flex-row gap-4">
        <Button variant="solid" color="primary" size="sm" onclick={() => {
          toaster('success', 'Aviso', 'Mensagem do toaster', 3000)
        }}>Abrir Toast - Success</Button>
        <Button variant="solid" color="primary" size="sm" onclick={() => {
          toaster('error', 'Aviso', 'Mensagem do toaster', 3000)
        }}>Abrir Toast - Error</Button>
        <Button variant="solid" color="primary" size="sm" onclick={() => {
          toaster('warning', 'Aviso', 'Mensagem do toaster', 3000)
        }}>Abrir Toast - Warning</Button>
        <Button variant="solid" color="primary" size="sm" onclick={() => {
          toaster('info', 'Aviso', 'Mensagem do toaster', 3000)
        }}>Abrir Toast - info</Button>
      </div>
      <div>
        <Toaster position="top-right" />
      </div>

      {/* Badge Examples */}
      <div class="mt-8 space-y-8 bg-white p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Badge Component Examples</h2>

        {/* Colors */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Colors (Solid)</h3>
          <div class="flex flex-wrap gap-3">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary">Secondary</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="warning">Warning</Badge>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Sizes</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Badge size="xs" color="primary">Extra Small</Badge>
            <Badge size="sm" color="primary">Small</Badge>
            <Badge size="md" color="primary">Medium</Badge>
            <Badge size="lg" color="primary">Large</Badge>
          </div>
        </section>

        {/* Rounded */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Rounded</h3>
          <div class="flex flex-wrap gap-3">
            <Badge color="primary" rounded={false}>Default</Badge>
            <Badge color="success" rounded={true}>Rounded Full</Badge>
            <Badge color="danger" rounded={true}>Pill Badge</Badge>
          </div>
        </section>

        {/* Variants */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Variants</h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-3">
              <span class="text-sm font-medium w-24">Solid:</span>
              <Badge variant="solid" color="primary">Primary</Badge>
              <Badge variant="solid" color="success">Success</Badge>
              <Badge variant="solid" color="danger">Danger</Badge>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="text-sm font-medium w-24">Outline:</span>
              <Badge variant="outline" color="primary">Primary</Badge>
              <Badge variant="outline" color="success">Success</Badge>
              <Badge variant="outline" color="danger">Danger</Badge>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="text-sm font-medium w-24">Soft:</span>
              <Badge variant="soft" color="primary">Primary</Badge>
              <Badge variant="soft" color="success">Success</Badge>
              <Badge variant="soft" color="danger">Danger</Badge>
            </div>
          </div>
        </section>

        {/* With Dot */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Dot Indicator</h3>
          <div class="flex flex-wrap gap-3">
            <Badge color="success" dot={true}>Active</Badge>
            <Badge color="danger" dot={true}>Inactive</Badge>
            <Badge color="warning" dot={true}>Pending</Badge>
            <Badge color="info" dot={true} variant="soft">Processing</Badge>
          </div>
        </section>

        {/* With Icon */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Icon</h3>
          <div class="flex flex-wrap gap-3">
            <Badge color="success" icon={<LucideIcons.Check size={14} />}>
              Verified
            </Badge>
            <Badge color="danger" icon={<LucideIcons.X size={14} />}>
              Rejected
            </Badge>
            <Badge color="info" icon={<LucideIcons.Clock size={14} />}>
              Pending
            </Badge>
            <Badge color="warning" icon={<LucideIcons.TriangleAlert size={14} />}>
              Warning
            </Badge>
          </div>
        </section>

        {/* Removable */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Removable</h3>
          <div class="flex flex-wrap gap-3">
            <Badge color="primary" removable={true} onRemove={() => alert('Removed!')}>
              Tag 1
            </Badge>
            <Badge color="success" removable={true} onRemove={() => alert('Removed!')}>
              Tag 2
            </Badge>
            <Badge color="danger" removable={true} onRemove={() => alert('Removed!')}>
              Tag 3
            </Badge>
            <Badge
              color="info"
              variant="soft"
              removable={true}
              rounded={true}
              onRemove={() => alert('Removed!')}
            >
              Removable Pill
            </Badge>
          </div>
        </section>

        {/* Combined Features */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Combined Features</h3>
          <div class="flex flex-wrap gap-3">
            <Badge
              color="success"
              variant="soft"
              size="lg"
              dot={true}
              rounded={true}
            >
              Online
            </Badge>
            <Badge
              color="primary"
              variant="outline"
              icon={<LucideIcons.Star size={14} />}
              rounded={true}
              removable={true}
              onRemove={() => alert('Removed!')}
            >
              Featured
            </Badge>
            <Badge
              color="warning"
              size="sm"
              icon={<LucideIcons.Zap size={12} />}
              removable={true}
              onRemove={() => alert('Removed!')}
            >
              Hot Deal
            </Badge>
          </div>
        </section>

        {/* Practical Use Cases */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Practical Use Cases</h3>
          <div class="space-y-4">
            {/* Status */}
            <div>
              <p class="text-sm text-gray-600 mb-2">Status indicators:</p>
              <div class="flex gap-2">
                <Badge color="success" dot={true} variant="soft" size="sm">Active</Badge>
                <Badge color="warning" dot={true} variant="soft" size="sm">Away</Badge>
                <Badge color="danger" dot={true} variant="soft" size="sm">Busy</Badge>
                <Badge color="info" dot={true} variant="soft" size="sm">Offline</Badge>
              </div>
            </div>

            {/* Notifications */}
            <div>
              <p class="text-sm text-gray-600 mb-2">Notification counts:</p>
              <div class="flex gap-2">
                <Badge color="danger" rounded={true} size="xs">5</Badge>
                <Badge color="primary" rounded={true} size="xs">12</Badge>
                <Badge color="success" rounded={true} size="xs">99+</Badge>
              </div>
            </div>

            {/* Tags */}
            <div>
              <p class="text-sm text-gray-600 mb-2">Product tags:</p>
              <div class="flex flex-wrap gap-2">
                <Badge color="primary" variant="soft" removable={true}>React</Badge>
                <Badge color="success" variant="soft" removable={true}>TypeScript</Badge>
                <Badge color="info" variant="soft" removable={true}>Tailwind</Badge>
                <Badge color="warning" variant="soft" removable={true}>Node.js</Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}