import { Accordion, AccordionItem, Avatar, AvatarGroup, Badge, Button, Chip, Form, Input, InputMask, LucideIcons, Progress, Select, Skeleton, Tabs, Toaster, toaster } from "@insightcreativewebs/ui";


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

      {/* Progress Examples */}
      <div class="mt-8 space-y-8 bg-white p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Progress Component Examples</h2>

        {/* Basic Progress */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Basic Progress</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">25% Progress</p>
              <Progress value={25} color="primary" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">50% Progress</p>
              <Progress value={50} color="success" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">75% Progress</p>
              <Progress value={75} color="warning" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">100% Complete</p>
              <Progress value={100} color="success" />
            </div>
          </div>
        </section>

        {/* Colors */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Colors</h3>
          <div class="space-y-3">
            <Progress value={60} color="primary" showLabel={true} />
            <Progress value={60} color="secondary" showLabel={true} />
            <Progress value={60} color="success" showLabel={true} />
            <Progress value={60} color="danger" showLabel={true} />
            <Progress value={60} color="info" showLabel={true} />
            <Progress value={60} color="warning" showLabel={true} />
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Sizes</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Extra Small (xs)</p>
              <Progress value={70} size="xs" color="primary" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Small (sm)</p>
              <Progress value={70} size="sm" color="primary" showLabel={true} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Medium (md) - Default</p>
              <Progress value={70} size="md" color="primary" showLabel={true} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Large (lg)</p>
              <Progress value={70} size="lg" color="primary" showLabel={true} />
            </div>
          </div>
        </section>

        {/* With Labels */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Labels</h3>
          <div class="space-y-3">
            <Progress value={45} color="primary" showLabel={true} />
            <Progress value={67} color="success" label="67% Complete" />
            <Progress value={89} color="info" label="Almost there!" />
          </div>
        </section>

        {/* Variants */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Variants</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Default</p>
              <Progress value={60} variant="default" color="primary" size="lg" showLabel={true} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Gradient</p>
              <Progress value={60} variant="gradient" color="primary" size="lg" showLabel={true} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Striped</p>
              <Progress value={60} variant="striped" color="primary" size="lg" showLabel={true} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Striped + Animated</p>
              <Progress value={60} variant="striped" animated={true} color="primary" size="lg" showLabel={true} />
            </div>
          </div>
        </section>

        {/* Gradient Colors */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Gradient Variant</h3>
          <div class="space-y-3">
            <Progress value={70} variant="gradient" color="primary" showLabel={true} />
            <Progress value={70} variant="gradient" color="success" showLabel={true} />
            <Progress value={70} variant="gradient" color="danger" showLabel={true} />
            <Progress value={70} variant="gradient" color="info" showLabel={true} />
            <Progress value={70} variant="gradient" color="warning" showLabel={true} />
          </div>
        </section>

        {/* Indeterminate (Loading) */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Indeterminate (Loading)</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Loading...</p>
              <Progress indeterminate={true} color="primary" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Processing...</p>
              <Progress indeterminate={true} color="info" size="lg" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Gradient Loading</p>
              <Progress indeterminate={true} variant="gradient" color="success" size="lg" />
            </div>
          </div>
        </section>

        {/* Practical Use Cases */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Practical Use Cases</h3>

          <div class="space-y-6">
            {/* File Upload */}
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <LucideIcons.File size={20} class="text-gray-600" />
                  <span class="text-sm font-medium">document.pdf</span>
                </div>
                <span class="text-xs text-gray-500">2.5 MB / 5 MB</span>
              </div>
              <Progress value={50} color="primary" size="sm" showLabel={true} />
            </div>

            {/* Download Progress */}
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <LucideIcons.Download size={20} class="text-blue-600" />
                  <span class="text-sm font-medium">Downloading update...</span>
                </div>
                <span class="text-xs text-gray-500">750 MB / 1 GB</span>
              </div>
              <Progress value={75} variant="gradient" color="info" size="md" showLabel={true} />
            </div>

            {/* Skills/Proficiency */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Skills</h4>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-xs font-medium">React</span>
                    <span class="text-xs text-gray-500">Expert</span>
                  </div>
                  <Progress value={90} color="success" size="sm" />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-xs font-medium">TypeScript</span>
                    <span class="text-xs text-gray-500">Advanced</span>
                  </div>
                  <Progress value={75} color="info" size="sm" />
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-xs font-medium">Node.js</span>
                    <span class="text-xs text-gray-500">Intermediate</span>
                  </div>
                  <Progress value={60} color="warning" size="sm" />
                </div>
              </div>
            </div>

            {/* Task Completion */}
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold">Project Progress</h4>
                <Badge color="info" variant="soft" size="sm">In Progress</Badge>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>8 of 12 tasks completed</span>
                  <span>67%</span>
                </div>
                <Progress value={67} variant="striped" animated={true} color="primary" size="lg" />
              </div>
            </div>

            {/* Loading State */}
            <div class="p-4 border rounded-lg">
              <div class="flex items-center gap-2 mb-3">
                <LucideIcons.RefreshCw class="text-primary animate-spin size-10" />
                <span class="text-sm font-medium">Processing your request...</span>
              </div>
              <Progress indeterminate={true} color="primary" size="md" />
            </div>
          </div>
        </section>
      </div>

      {/* Skeleton Examples */}
      <div class="mt-8 space-y-8 bg-white p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Skeleton Component Examples</h2>

        {/* Basic Skeletons */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Basic Shapes</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Rectangle:</p>
              <Skeleton />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Circle:</p>
              <Skeleton circle={true} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Text (single line):</p>
              <Skeleton shape="text" />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Text (multiple lines):</p>
              <Skeleton shape="text" count={3} />
            </div>
          </div>
        </section>

        {/* Variants */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Animation Variants</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Default (shimmer):</p>
              <Skeleton variant="default" height={60} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Wave (fast shimmer):</p>
              <Skeleton variant="wave" height={60} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Pulse:</p>
              <Skeleton variant="pulse" height={60} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">No animation:</p>
              <Skeleton animated={false} height={60} />
            </div>
          </div>
        </section>

        {/* Custom Sizes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Custom Sizes</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Custom width & height:</p>
              <Skeleton width={200} height={40} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Full width, custom height:</p>
              <Skeleton height={100} />
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Circles with sizes:</p>
              <div class="flex gap-4 items-center">
                <Skeleton circle={true} width={32} height={32} />
                <Skeleton circle={true} width={48} height={48} />
                <Skeleton circle={true} width={64} height={64} />
                <Skeleton circle={true} width={96} height={96} />
              </div>
            </div>
          </div>
        </section>

        {/* Rounded */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Rounded Corners</h3>
          <div class="space-y-3">
            <Skeleton rounded={false} height={60} />
            <Skeleton rounded={true} height={60} />
          </div>
        </section>

        {/* Practical Use Cases */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Practical Use Cases</h3>

          <div class="space-y-6">
            {/* User Card Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">User Card Loading</h4>
              <div class="flex items-center gap-4">
                <Skeleton circle={true} width={64} height={64} />
                <div class="flex-1">
                  <Skeleton shape="text" width="60%" class="mb-2" />
                  <Skeleton shape="text" width="40%" />
                </div>
              </div>
            </div>

            {/* Post Card Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Post Card Loading</h4>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <Skeleton circle={true} width={40} height={40} />
                  <div class="flex-1">
                    <Skeleton shape="text" width="30%" />
                  </div>
                </div>
                <Skeleton shape="text" count={3} />
                <Skeleton height={200} rounded={true} />
                <div class="flex gap-2">
                  <Skeleton width={80} height={32} rounded={true} />
                  <Skeleton width={80} height={32} rounded={true} />
                  <Skeleton width={80} height={32} rounded={true} />
                </div>
              </div>
            </div>

            {/* Product Card Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Product Card Loading</h4>
              <div class="space-y-3">
                <Skeleton height={200} rounded={true} />
                <Skeleton shape="text" width="80%" />
                <Skeleton shape="text" width="60%" />
                <div class="flex items-center justify-between mt-3">
                  <Skeleton width={60} height={24} />
                  <Skeleton width={100} height={36} rounded={true} />
                </div>
              </div>
            </div>

            {/* List Items Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">List Items Loading</h4>
              <div class="space-y-4">
                {[1, 2, 3].map(() => (
                  <div class="flex items-center gap-3">
                    <Skeleton circle={true} width={48} height={48} />
                    <div class="flex-1">
                      <Skeleton shape="text" width="70%" class="mb-1" />
                      <Skeleton shape="text" width="40%" />
                    </div>
                    <Skeleton width={24} height={24} circle={true} />
                  </div>
                ))}
              </div>
            </div>

            {/* Table Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Table Loading</h4>
              <div class="space-y-2">
                <div class="grid grid-cols-4 gap-4">
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                </div>
                {[1, 2, 3, 4].map(() => (
                  <div class="grid grid-cols-4 gap-4">
                    <Skeleton shape="text" />
                    <Skeleton shape="text" />
                    <Skeleton shape="text" />
                    <Skeleton shape="text" />
                  </div>
                ))}
              </div>
            </div>

            {/* Form Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Form Loading</h4>
              <div class="space-y-4">
                <div>
                  <Skeleton shape="text" width="20%" class="mb-2" />
                  <Skeleton height={40} rounded={true} />
                </div>
                <div>
                  <Skeleton shape="text" width="25%" class="mb-2" />
                  <Skeleton height={40} rounded={true} />
                </div>
                <div>
                  <Skeleton shape="text" width="30%" class="mb-2" />
                  <Skeleton height={100} rounded={true} />
                </div>
                <div class="flex gap-3">
                  <Skeleton width={100} height={40} rounded={true} />
                  <Skeleton width={100} height={40} rounded={true} />
                </div>
              </div>
            </div>

            {/* Stats Dashboard Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Stats Dashboard Loading</h4>
              <div class="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(() => (
                  <div class="p-4 border rounded-lg space-y-2">
                    <Skeleton shape="text" width="60%" />
                    <Skeleton height={48} width="80%" />
                    <Skeleton shape="text" width="40%" />
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar Group Loading */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Avatar Group Loading</h4>
              <div class="flex -space-x-2">
                <Skeleton circle={true} width={40} height={40} class="border-2 border-white" />
                <Skeleton circle={true} width={40} height={40} class="border-2 border-white" />
                <Skeleton circle={true} width={40} height={40} class="border-2 border-white" />
                <Skeleton circle={true} width={40} height={40} class="border-2 border-white" />
                <Skeleton circle={true} width={40} height={40} class="border-2 border-white" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Avatar Examples */}
      <div class="mt-8 space-y-8 bg-white p-6 rounded-lg">
        <h2 class="text-2xl font-bold mb-6">Avatar & AvatarGroup Examples</h2>

        {/* Basic Avatars */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Basic Avatars</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
            <Avatar fallback="John Doe" />
            <Avatar fallback="Jane Smith" />
            <Avatar icon={<LucideIcons.User size={20} />} />
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Sizes</h3>
          <div class="flex flex-wrap items-end gap-4">
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=4" size="xs" />
              <p class="text-xs mt-1">xs</p>
            </div>
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=5" size="sm" />
              <p class="text-xs mt-1">sm</p>
            </div>
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=6" size="md" />
              <p class="text-xs mt-1">md</p>
            </div>
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=7" size="lg" />
              <p class="text-xs mt-1">lg</p>
            </div>
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=8" size="xl" />
              <p class="text-xs mt-1">xl</p>
            </div>
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=9" size="2xl" />
              <p class="text-xs mt-1">2xl</p>
            </div>
          </div>
        </section>

        {/* Shapes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Shapes</h3>
          <div class="flex flex-wrap items-center gap-4">
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=10" shape="circle" size="lg" />
              <p class="text-xs mt-1">Circle</p>
            </div>
            <div class="text-center">
              <Avatar src="https://i.pravatar.cc/150?img=11" shape="square" size="lg" />
              <p class="text-xs mt-1">Square</p>
            </div>
          </div>
        </section>

        {/* With Status */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Status Indicator</h3>
          <div class="flex flex-wrap items-center gap-4">
            <div class="text-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=12"
                status="online"
                size="lg"
              />
              <p class="text-xs mt-1">Online</p>
            </div>
            <div class="text-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=13"
                status="offline"
                size="lg"
              />
              <p class="text-xs mt-1">Offline</p>
            </div>
            <div class="text-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=14"
                status="away"
                size="lg"
              />
              <p class="text-xs mt-1">Away</p>
            </div>
            <div class="text-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=15"
                status="busy"
                size="lg"
              />
              <p class="text-xs mt-1">Busy</p>
            </div>
          </div>
        </section>

        {/* With Border */}
        <section>
          <h3 class="text-lg font-semibold mb-4">With Border</h3>
          <div class="flex flex-wrap items-center gap-4 bg-gray-100 p-4 rounded-lg">
            <Avatar
              src="https://i.pravatar.cc/150?img=16"
              border={true}
              size="lg"
            />
            <Avatar
              src="https://i.pravatar.cc/150?img=17"
              border={true}
              status="online"
              size="lg"
            />
            <Avatar
              fallback="AB"
              border={true}
              size="lg"
            />
          </div>
        </section>

        {/* Fallback Variations */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Fallback Variations</h3>
          <div class="flex flex-wrap items-center gap-4">
            <div class="text-center">
              <Avatar fallback="John Doe" size="lg" />
              <p class="text-xs mt-1">Initials (2 words)</p>
            </div>
            <div class="text-center">
              <Avatar fallback="Alice" size="lg" />
              <p class="text-xs mt-1">Initials (1 word)</p>
            </div>
            <div class="text-center">
              <Avatar icon={<LucideIcons.User size={24} />} size="lg" />
              <p class="text-xs mt-1">Custom Icon</p>
            </div>
            <div class="text-center">
              <Avatar size="lg" />
              <p class="text-xs mt-1">Default Icon</p>
            </div>
          </div>
        </section>

        {/* Avatar Group - Basic */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Avatar Group - Basic</h3>
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?img=20" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=21" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=22" alt="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=23" alt="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=24" alt="User 5" />
          </AvatarGroup>
        </section>

        {/* Avatar Group - With Max */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Avatar Group - With Max Count</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Max 3 avatars:</p>
              <AvatarGroup max={3}>
                <Avatar src="https://i.pravatar.cc/150?img=25" />
                <Avatar src="https://i.pravatar.cc/150?img=26" />
                <Avatar src="https://i.pravatar.cc/150?img=27" />
                <Avatar src="https://i.pravatar.cc/150?img=28" />
                <Avatar src="https://i.pravatar.cc/150?img=29" />
                <Avatar src="https://i.pravatar.cc/150?img=30" />
                <Avatar src="https://i.pravatar.cc/150?img=31" />
              </AvatarGroup>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Max 5 avatars:</p>
              <AvatarGroup max={5}>
                <Avatar src="https://i.pravatar.cc/150?img=32" />
                <Avatar src="https://i.pravatar.cc/150?img=33" />
                <Avatar src="https://i.pravatar.cc/150?img=34" />
                <Avatar src="https://i.pravatar.cc/150?img=35" />
                <Avatar src="https://i.pravatar.cc/150?img=36" />
                <Avatar src="https://i.pravatar.cc/150?img=37" />
                <Avatar src="https://i.pravatar.cc/150?img=38" />
                <Avatar src="https://i.pravatar.cc/150?img=39" />
              </AvatarGroup>
            </div>
          </div>
        </section>

        {/* Avatar Group - Sizes */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Avatar Group - Sizes</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Small:</p>
              <AvatarGroup size="sm">
                <Avatar src="https://i.pravatar.cc/150?img=40" />
                <Avatar src="https://i.pravatar.cc/150?img=41" />
                <Avatar src="https://i.pravatar.cc/150?img=42" />
                <Avatar fallback="AB" />
              </AvatarGroup>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Medium:</p>
              <AvatarGroup size="md">
                <Avatar src="https://i.pravatar.cc/150?img=43" />
                <Avatar src="https://i.pravatar.cc/150?img=44" />
                <Avatar src="https://i.pravatar.cc/150?img=45" />
                <Avatar fallback="CD" />
              </AvatarGroup>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Large:</p>
              <AvatarGroup size="lg">
                <Avatar src="https://i.pravatar.cc/150?img=46" />
                <Avatar src="https://i.pravatar.cc/150?img=47" />
                <Avatar src="https://i.pravatar.cc/150?img=48" />
                <Avatar fallback="EF" />
              </AvatarGroup>
            </div>
          </div>
        </section>

        {/* Avatar Group - Spacing */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Avatar Group - Spacing</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 mb-2">Tight:</p>
              <AvatarGroup spacing="tight">
                <Avatar src="https://i.pravatar.cc/150?img=49" />
                <Avatar src="https://i.pravatar.cc/150?img=50" />
                <Avatar src="https://i.pravatar.cc/150?img=51" />
                <Avatar src="https://i.pravatar.cc/150?img=52" />
              </AvatarGroup>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Normal:</p>
              <AvatarGroup spacing="normal">
                <Avatar src="https://i.pravatar.cc/150?img=53" />
                <Avatar src="https://i.pravatar.cc/150?img=54" />
                <Avatar src="https://i.pravatar.cc/150?img=55" />
                <Avatar src="https://i.pravatar.cc/150?img=56" />
              </AvatarGroup>
            </div>
            <div>
              <p class="text-sm text-gray-600 mb-2">Loose:</p>
              <AvatarGroup spacing="loose">
                <Avatar src="https://i.pravatar.cc/150?img=57" />
                <Avatar src="https://i.pravatar.cc/150?img=58" />
                <Avatar src="https://i.pravatar.cc/150?img=59" />
                <Avatar src="https://i.pravatar.cc/150?img=60" />
              </AvatarGroup>
            </div>
          </div>
        </section>

        {/* Practical Use Cases */}
        <section>
          <h3 class="text-lg font-semibold mb-4">Practical Use Cases</h3>

          <div class="space-y-6">
            {/* User Profile Card */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">User Profile Card</h4>
              <div class="flex items-center gap-4">
                <Avatar
                  src="https://i.pravatar.cc/150?img=61"
                  size="xl"
                  status="online"
                />
                <div class="flex-1">
                  <h5 class="font-semibold text-lg">John Doe</h5>
                  <p class="text-sm text-gray-600">Product Designer</p>
                  <div class="flex gap-2 mt-2">
                    <Badge color="primary" variant="soft" size="sm">Pro</Badge>
                    <Badge color="success" variant="soft" size="sm">Verified</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Team Members</h4>
              <div class="space-y-3">
                {['Alice Johnson', 'Bob Smith', 'Carol White'].map((name, i) => (
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <Avatar
                        src={`https://i.pravatar.cc/150?img=${62 + i}`}
                        status={i === 0 ? 'online' : i === 1 ? 'away' : 'offline'}
                      />
                      <div>
                        <p class="font-medium text-sm">{name}</p>
                        <p class="text-xs text-gray-500">
                          {i === 0 ? 'Active now' : i === 1 ? 'Away' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Message</Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Collaborators */}
            <div class="p-4 border rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold">Project Collaborators</h4>
                <Button variant="outline" size="sm">
                  <LucideIcons.Plus size={14} class="mr-1" />
                  Add
                </Button>
              </div>
              <AvatarGroup max={4}>
                <Avatar src="https://i.pravatar.cc/150?img=65" border={true} />
                <Avatar src="https://i.pravatar.cc/150?img=66" border={true} />
                <Avatar src="https://i.pravatar.cc/150?img=67" border={true} />
                <Avatar src="https://i.pravatar.cc/150?img=68" border={true} />
                <Avatar src="https://i.pravatar.cc/150?img=69" border={true} />
                <Avatar src="https://i.pravatar.cc/150?img=70" border={true} />
              </AvatarGroup>
            </div>

            {/* Comments */}
            <div class="p-4 border rounded-lg">
              <h4 class="text-sm font-semibold mb-3">Comments</h4>
              <div class="space-y-4">
                {[
                  { name: 'Sarah Connor', comment: 'Great work on this project!' },
                  { name: 'Mike Ross', comment: 'I have some suggestions for improvement.' },
                ].map((item, i) => (
                  <div class="flex gap-3">
                    <Avatar
                      src={`https://i.pravatar.cc/150?img=${71 + i}`}
                      size="sm"
                    />
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="font-medium text-sm">{item.name}</span>
                        <span class="text-xs text-gray-500">2h ago</span>
                      </div>
                      <p class="text-sm text-gray-700">{item.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            ACCORDION COMPONENT
            ============================================ */}
        <section class="space-y-6">
          <div class="border-b pb-2">
            <h2 class="text-2xl font-bold">Accordion Component</h2>
            <p class="text-sm text-gray-600">
              Expandable panels with smooth animations
            </p>
          </div>

          {/* Basic Accordion - Single Mode */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Basic Accordion (Single Mode)</h3>
            <p class="text-sm text-gray-600">Only one item can be open at a time</p>

            <Accordion type="single" defaultOpen={['item-1']}>
              <AccordionItem id="item-1" title="What is Nullstack?">
                Nullstack is a full-stack JavaScript framework for building modern web applications. It allows you to write both frontend and backend code in a single component.
              </AccordionItem>

              <AccordionItem id="item-2" title="How does it work?">
                Nullstack uses a unique approach where server functions and client functions coexist in the same component file. The framework automatically handles the communication between them.
              </AccordionItem>

              <AccordionItem id="item-3" title="Why use Nullstack?">
                Nullstack eliminates the need for separate frontend and backend projects, reduces boilerplate code, and provides a seamless development experience with automatic hydration and SSR.
              </AccordionItem>
            </Accordion>
          </div>

          {/* Multiple Mode */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Multiple Mode</h3>
            <p class="text-sm text-gray-600">Multiple items can be open simultaneously</p>

            <Accordion type="multiple" defaultOpen={['faq-1', 'faq-2']}>
              <AccordionItem id="faq-1" title="Is it free?">
                Yes, Nullstack is 100% free and open source under the MIT license. You can use it for personal and commercial projects without any restrictions.
              </AccordionItem>

              <AccordionItem id="faq-2" title="Does it support TypeScript?">
                Yes, Nullstack has excellent TypeScript support with full type definitions and inference.
              </AccordionItem>

              <AccordionItem id="faq-3" title="Can I use it with existing APIs?">
                Absolutely! Nullstack can consume any REST or GraphQL API, and you can also build your own API endpoints within the framework.
              </AccordionItem>
            </Accordion>
          </div>

          {/* With Icons */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">With Custom Icons</h3>
            <p class="text-sm text-gray-600">Add icons to make items more recognizable</p>

            <Accordion type="single">
              <AccordionItem
                id="feature-1"
                title="Server-Side Rendering"
                icon={<LucideIcons.Server size={18} />}
              >
                Built-in SSR support with automatic hydration. Your pages are SEO-friendly by default and load instantly.
              </AccordionItem>

              <AccordionItem
                id="feature-2"
                title="Full-Stack Components"
                icon={<LucideIcons.Component size={18} />}
              >
                Write both client and server logic in the same component file. No need for separate API routes or state management libraries.
              </AccordionItem>

              <AccordionItem
                id="feature-3"
                title="Zero Config"
                icon={<LucideIcons.Zap size={18} />}
              >
                Start building immediately without complex configuration. Hot reload, production builds, and deployment are handled for you.
              </AccordionItem>
            </Accordion>
          </div>

          {/* Disabled Items */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">With Disabled Items</h3>
            <p class="text-sm text-gray-600">Some items can be disabled</p>

            <Accordion type="single">
              <AccordionItem
                id="plan-1"
                title="Free Plan"
                icon={<LucideIcons.Gift size={18} />}
              >
                Perfect for personal projects and getting started. Includes all core features with reasonable limits.
              </AccordionItem>

              <AccordionItem
                id="plan-2"
                title="Pro Plan"
                icon={<LucideIcons.Crown size={18} />}
              >
                For professional developers and small teams. Unlimited projects, priority support, and advanced features.
              </AccordionItem>

              <AccordionItem
                id="plan-3"
                title="Enterprise Plan (Coming Soon)"
                icon={<LucideIcons.Building2 size={18} />}
                disabled={true}
              >
                Custom solutions for large organizations. Contact us for more information.
              </AccordionItem>
            </Accordion>
          </div>

          {/* Bordered Variant */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Bordered Variant</h3>
            <p class="text-sm text-gray-600">Compact look with a single border</p>

            <Accordion type="single" class="accordion--bordered">
              <AccordionItem id="section-1" title="Section 1">
                This is the content of section 1. It contains important information.
              </AccordionItem>

              <AccordionItem id="section-2" title="Section 2">
                This is the content of section 2. It contains more details.
              </AccordionItem>

              <AccordionItem id="section-3" title="Section 3">
                This is the content of section 3. It wraps everything up.
              </AccordionItem>
            </Accordion>
          </div>

          {/* Ghost Variant */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Ghost Variant</h3>
            <p class="text-sm text-gray-600">Minimal look without borders</p>

            <Accordion type="multiple" class="accordion--ghost">
              <AccordionItem id="tip-1" title="💡 Tip #1: Use Server Functions">
                Server functions in Nullstack run only on the server, giving you secure database access and API calls without exposing credentials.
              </AccordionItem>

              <AccordionItem id="tip-2" title="💡 Tip #2: Leverage Context">
                Nullstack's context is automatically shared between client and server, making data flow seamless.
              </AccordionItem>

              <AccordionItem id="tip-3" title="💡 Tip #3: Component Lifecycle">
                Use initiate() for initialization, prepare() for SSR data fetching, and hydrate() for client-side setup.
              </AccordionItem>
            </Accordion>
          </div>

          {/* Real-World Example: Settings Panel */}
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Real-World Example: Settings Panel</h3>
            <p class="text-sm text-gray-600">Common use case in dashboards</p>

            <div class="border rounded-lg p-6 bg-white">
              <h4 class="text-lg font-semibold mb-4">Account Settings</h4>

              <Accordion type="single">
                <AccordionItem
                  id="profile"
                  title="Profile Information"
                  icon={<LucideIcons.User size={18} />}
                >
                  <div class="space-y-3">
                    <div>
                      <label class="text-sm font-medium">Display Name</label>
                      <Input placeholder="John Doe" class="mt-1" />
                    </div>
                    <div>
                      <label class="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="john@example.com" class="mt-1" />
                    </div>
                    <Button size="sm">Save Changes</Button>
                  </div>
                </AccordionItem>

                <AccordionItem
                  id="security"
                  title="Security & Privacy"
                  icon={<LucideIcons.Shield size={18} />}
                >
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="text-sm font-medium">Two-Factor Authentication</div>
                        <div class="text-xs text-gray-500">Add an extra layer of security</div>
                      </div>
                      <Badge color="success" size="sm">Active</Badge>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="text-sm font-medium">Login Notifications</div>
                        <div class="text-xs text-gray-500">Get notified of new logins</div>
                      </div>
                      <Button size="sm" variant="outline">Configure</Button>
                    </div>
                  </div>
                </AccordionItem>

                <AccordionItem
                  id="notifications"
                  title="Notifications"
                  icon={<LucideIcons.Bell size={18} />}
                >
                  <div class="space-y-3">
                    <label class="flex items-center justify-between cursor-pointer">
                      <span class="text-sm">Email Notifications</span>
                      <input type="checkbox" checked class="form-checkbox" />
                    </label>
                    <label class="flex items-center justify-between cursor-pointer">
                      <span class="text-sm">Push Notifications</span>
                      <input type="checkbox" class="form-checkbox" />
                    </label>
                    <label class="flex items-center justify-between cursor-pointer">
                      <span class="text-sm">SMS Notifications</span>
                      <input type="checkbox" class="form-checkbox" />
                    </label>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}