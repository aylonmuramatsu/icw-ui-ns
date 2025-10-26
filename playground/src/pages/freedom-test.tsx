import { Badge, Button, Chip, Form, Input, InputMask, LucideIcons, Select, Tabs, Toaster, toaster } from "@insightcreativewebs/ui";


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

      {/* Chip Examples */}
      <div class="mt-8 space-y-8 bg-white p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Chip Component Examples</h2>

        {/* Colors */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Colors (Solid)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip color="primary">Primary</Chip>
            <Chip color="secondary">Secondary</Chip>
            <Chip color="danger">Danger</Chip>
            <Chip color="success">Success</Chip>
            <Chip color="info">Info</Chip>
            <Chip color="warning">Warning</Chip>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Sizes</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Chip size="xs" color="primary">Extra Small</Chip>
            <Chip size="sm" color="primary">Small</Chip>
            <Chip size="md" color="primary">Medium</Chip>
            <Chip size="lg" color="primary">Large</Chip>
          </div>
        </section>

        {/* Variants */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Variants</h3>
          <div class="space-y-3">
            <div class="flex flex-wrap gap-3">
              <span class="text-sm font-medium w-24">Solid:</span>
              <Chip variant="solid" color="primary">Primary</Chip>
              <Chip variant="solid" color="success">Success</Chip>
              <Chip variant="solid" color="danger">Danger</Chip>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="text-sm font-medium w-24">Outline:</span>
              <Chip variant="outline" color="primary">Primary</Chip>
              <Chip variant="outline" color="success">Success</Chip>
              <Chip variant="outline" color="danger">Danger</Chip>
            </div>
            <div class="flex flex-wrap gap-3">
              <span class="text-sm font-medium w-24">Soft:</span>
              <Chip variant="soft" color="primary">Primary</Chip>
              <Chip variant="soft" color="success">Success</Chip>
              <Chip variant="soft" color="danger">Danger</Chip>
            </div>
          </div>
        </section>

        {/* With Icon */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Icon</h3>
          <div class="flex flex-wrap gap-3">
            <Chip color="success" icon={<LucideIcons.Check size={14} />}>
              Verified
            </Chip>
            <Chip color="danger" icon={<LucideIcons.X size={14} />}>
              Rejected
            </Chip>
            <Chip color="info" icon={<LucideIcons.Clock size={14} />}>
              Pending
            </Chip>
            <Chip color="warning" icon={<LucideIcons.Zap size={14} />}>
              Premium
            </Chip>
          </div>
        </section>

        {/* With Avatar */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Avatar</h3>
          <div class="flex flex-wrap gap-3">
            <Chip
              color="primary"
              avatar="https://i.pravatar.cc/150?img=1"
            >
              John Doe
            </Chip>
            <Chip
              color="success"
              variant="soft"
              avatar="https://i.pravatar.cc/150?img=2"
            >
              Jane Smith
            </Chip>
            <Chip
              color="info"
              variant="outline"
              avatar="https://i.pravatar.cc/150?img=3"
              size="lg"
            >
              Mike Johnson
            </Chip>
          </div>
        </section>

        {/* Removable */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Removable</h3>
          <div class="flex flex-wrap gap-3">
            <Chip color="primary" removable={true} onRemove={() => alert('Removed!')}>
              React
            </Chip>
            <Chip color="success" removable={true} onRemove={() => alert('Removed!')}>
              TypeScript
            </Chip>
            <Chip color="info" variant="soft" removable={true} onRemove={() => alert('Removed!')}>
              Tailwind
            </Chip>
            <Chip
              color="warning"
              icon={<LucideIcons.Star size={14} />}
              removable={true}
              onRemove={() => alert('Removed!')}
            >
              Featured
            </Chip>
          </div>
        </section>

        {/* Clickable */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Clickable (Interactive)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip
              color="primary"
              variant="outline"
              onclick={() => alert('Clicked!')}
            >
              Click me
            </Chip>
            <Chip
              color="success"
              variant="soft"
              icon={<LucideIcons.ListFilter size={14} />}
              onclick={() => alert('Filter clicked!')}
            >
              Filter
            </Chip>
            <Chip
              color="info"
              avatar="https://i.pravatar.cc/150?img=4"
              onclick={() => alert('Profile clicked!')}
            >
              View Profile
            </Chip>
          </div>
        </section>

        {/* Selected State */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Selected State (for filters)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip color="primary" variant="outline" selected={false}>
              Not Selected
            </Chip>
            <Chip color="primary" variant="outline" selected={true}>
              Selected
            </Chip>
            <Chip color="success" variant="soft" selected={false}>
              Not Selected
            </Chip>
            <Chip color="success" variant="soft" selected={true}>
              Selected
            </Chip>
          </div>
        </section>

        {/* Disabled */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Disabled State</h3>
          <div class="flex flex-wrap gap-3">
            <Chip color="primary" disabled={true}>Disabled</Chip>
            <Chip color="success" disabled={true} removable={true}>
              Disabled Removable
            </Chip>
            <Chip
              color="info"
              disabled={true}
              onclick={() => alert('Wont fire')}
            >
              Disabled Clickable
            </Chip>
          </div>
        </section>

        {/* Practical Use Cases */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Practical Use Cases</h3>

          {/* Filter chips */}
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Filter chips (clickable):</p>
              <div class="flex flex-wrap gap-2">
                <Chip
                  color="primary"
                  variant="outline"
                  selected={true}
                  onclick={() => console.log('Toggle filter')}
                >
                  Active
                </Chip>
                <Chip
                  color="primary"
                  variant="outline"
                  onclick={() => console.log('Toggle filter')}
                >
                  Pending
                </Chip>
                <Chip
                  color="primary"
                  variant="outline"
                  onclick={() => console.log('Toggle filter')}
                >
                  Completed
                </Chip>
              </div>
            </div>

            {/* Category tags */}
            <div>
              <p class="text-sm text-gray-600 mb-2">Category tags (removable):</p>
              <div class="flex flex-wrap gap-2">
                <Chip
                  color="info"
                  variant="soft"
                  icon={<LucideIcons.Tag size={12} />}
                  removable={true}
                  size="sm"
                >
                  Frontend
                </Chip>
                <Chip
                  color="success"
                  variant="soft"
                  icon={<LucideIcons.Tag size={12} />}
                  removable={true}
                  size="sm"
                >
                  Backend
                </Chip>
                <Chip
                  color="warning"
                  variant="soft"
                  icon={<LucideIcons.Tag size={12} />}
                  removable={true}
                  size="sm"
                >
                  DevOps
                </Chip>
              </div>
            </div>

            {/* User chips */}
            <div>
              <p class="text-sm text-gray-600 mb-2">Assigned users:</p>
              <div class="flex flex-wrap gap-2">
                <Chip
                  color="primary"
                  variant="soft"
                  avatar="https://i.pravatar.cc/150?img=5"
                  removable={true}
                  size="sm"
                >
                  Alice
                </Chip>
                <Chip
                  color="primary"
                  variant="soft"
                  avatar="https://i.pravatar.cc/150?img=6"
                  removable={true}
                  size="sm"
                >
                  Bob
                </Chip>
                <Chip
                  color="primary"
                  variant="soft"
                  avatar="https://i.pravatar.cc/150?img=7"
                  removable={true}
                  size="sm"
                >
                  Carol
                </Chip>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}