import { Avatar, Badge, Button, Card, Chip, Form, Input, InputMask, LucideIcons, Select, toaster } from "@insightcreativewebs/ui";


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

      {/* ============================================
            CARD COMPONENT
            ============================================ */}
      <section class="space-y-6">
        <div class="border-b pb-2">
          <h2 class="text-2xl font-bold">Card Component</h2>
          <p class="text-sm text-gray-600">
            Flexible container with composable parts
          </p>
        </div>

        {/* Basic Cards */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Basic Cards</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Simple Card */}
            <Card>
              <Card.Header>Simple Card</Card.Header>
              <Card.Body>
                This is a basic card with header and body. Perfect for displaying content in a contained format.
              </Card.Body>
            </Card>

            {/* Card with Footer */}
            <Card>
              <Card.Header>With Footer</Card.Header>
              <Card.Body>
                Cards can have headers, body, and footers. Each part is optional and can be customized.
              </Card.Body>
              <Card.Footer>
                <Button size="sm" variant="outline">Action</Button>
              </Card.Footer>
            </Card>

            {/* Full Card */}
            <Card>
              <Card.Header>Complete Card</Card.Header>
              <Card.Body>
                A complete card with all sections demonstrates the full flexibility of the component.
              </Card.Body>
              <Card.Footer>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">Updated 2h ago</span>
                  <Badge color="primary" size="sm">New</Badge>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </div>

        {/* Variants */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Variants</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="default">
              <Card.Header>Default</Card.Header>
              <Card.Body>
                Simple border style for general use cases.
              </Card.Body>
            </Card>

            <Card variant="outlined">
              <Card.Header>Outlined</Card.Header>
              <Card.Body>
                Stronger border for more emphasis.
              </Card.Body>
            </Card>

            <Card variant="elevated">
              <Card.Header>Elevated</Card.Header>
              <Card.Body>
                Shadow effect for depth perception.
              </Card.Body>
            </Card>

            <Card variant="ghost">
              <Card.Header>Ghost</Card.Header>
              <Card.Body>
                Subtle background without borders.
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Padding Variants */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Padding Variants</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card padding="none">
              <Card.Header>None</Card.Header>
              <Card.Body>No padding on the card.</Card.Body>
            </Card>

            <Card padding="sm">
              <Card.Header>Small</Card.Header>
              <Card.Body>Compact spacing.</Card.Body>
            </Card>

            <Card padding="md">
              <Card.Header>Medium</Card.Header>
              <Card.Body>Default spacing.</Card.Body>
            </Card>

            <Card padding="lg">
              <Card.Header>Large</Card.Header>
              <Card.Body>Generous spacing.</Card.Body>
            </Card>
          </div>
        </div>

        {/* Interactive Cards */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Interactive Cards</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card hoverable variant="elevated">
              <Card.Header>Hoverable Card</Card.Header>
              <Card.Body>
                Hover over this card to see a subtle lift effect. Great for highlighting interactive content.
              </Card.Body>
            </Card>

            <Card clickable variant="elevated" onclick={() => toaster('info', 'Card Clicked!', 'You clicked on the card')}>
              <Card.Header>Clickable Card</Card.Header>
              <Card.Body>
                Click this card to trigger an action. Notice the cursor changes and the hover effect is stronger.
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Cards with Images */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Cards with Images</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card padding="none">
              <Card.Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
                alt="Mountain landscape"
                position="top"
              />
              <Card.Body>
                <h4 class="font-semibold text-lg mb-2">Mountain View</h4>
                <p class="text-sm text-gray-600">Beautiful landscape with stunning mountain peaks in the background.</p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" class="w-full">View Details</Button>
              </Card.Footer>
            </Card>

            <Card padding="none">
              <Card.Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=200&fit=crop"
                alt="Forest path"
                position="top"
              />
              <Card.Body>
                <h4 class="font-semibold text-lg mb-2">Forest Trail</h4>
                <p class="text-sm text-gray-600">Peaceful walk through a dense forest with natural beauty.</p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" class="w-full">Explore</Button>
              </Card.Footer>
            </Card>

            <Card padding="none">
              <Card.Image
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop"
                alt="Lake view"
                position="top"
              />
              <Card.Body>
                <h4 class="font-semibold text-lg mb-2">Serene Lake</h4>
                <p class="text-sm text-gray-600">Crystal clear water reflecting the sky above.</p>
              </Card.Body>
              <Card.Footer>
                <Button size="sm" class="w-full">Discover</Button>
              </Card.Footer>
            </Card>
          </div>
        </div>

        {/* Product Cards */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Product Cards</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: 'Wireless Headphones', price: '$199', rating: 4.5, reviews: 128, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
              { name: 'Smart Watch', price: '$299', rating: 4.8, reviews: 89, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
              { name: 'Camera Lens', price: '$449', rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=300&h=300&fit=crop' },
              { name: 'Laptop Stand', price: '$79', rating: 4.3, reviews: 234, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop' },
            ].map((product) => (
              <Card hoverable padding="none">
                <Card.Image src={product.image} alt={product.name} position="top" />
                <Card.Body>
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold">{product.name}</h4>
                    <Badge color="success" size="xs">{product.rating} ⭐</Badge>
                  </div>
                  <p class="text-xs text-gray-500 mb-3">{product.reviews} reviews</p>
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold text-primary">{product.price}</span>
                    <Button size="xs" variant="solid">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* User Profile Cards */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">User Profile Cards</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Sarah Johnson', role: 'Product Designer', avatar: 'https://i.pravatar.cc/150?img=1', followers: '2.4k', following: '180' },
              { name: 'Michael Chen', role: 'Software Engineer', avatar: 'https://i.pravatar.cc/150?img=12', followers: '1.8k', following: '340' },
              { name: 'Emma Wilson', role: 'Marketing Lead', avatar: 'https://i.pravatar.cc/150?img=5', followers: '3.2k', following: '520' },
            ].map((user) => (
              <Card hoverable variant="elevated">
                <Card.Body>
                  <div class="flex flex-col items-center text-center">
                    <Avatar src={user.avatar} size="xl" class="mb-4" />
                    <h4 class="font-semibold text-lg">{user.name}</h4>
                    <p class="text-sm text-gray-500 mb-4">{user.role}</p>

                    <div class="flex gap-6 mb-4">
                      <div>
                        <div class="font-bold text-lg">{user.followers}</div>
                        <div class="text-xs text-gray-500">Followers</div>
                      </div>
                      <div>
                        <div class="font-bold text-lg">{user.following}</div>
                        <div class="text-xs text-gray-500">Following</div>
                      </div>
                    </div>

                    <div class="flex gap-2 w-full">
                      <Button size="sm" variant="solid" class="flex-1">Follow</Button>
                      <Button size="sm" variant="outline" class="flex-1">Message</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        {/* Dashboard Stats Cards */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Dashboard Stats Cards</h3>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card variant="elevated" hoverable>
              <Card.Body>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Total Revenue</p>
                    <p class="text-2xl font-bold">$45,231</p>
                    <p class="text-xs text-success mt-1">+12.5% from last month</p>
                  </div>
                  <div class="p-3 bg-primary/10 rounded-lg">
                    <LucideIcons.DollarSign class="text-primary" size={24} />
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card variant="elevated" hoverable>
              <Card.Body>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">New Users</p>
                    <p class="text-2xl font-bold">1,234</p>
                    <p class="text-xs text-success mt-1">+8.2% from last month</p>
                  </div>
                  <div class="p-3 bg-success/10 rounded-lg">
                    <LucideIcons.Users class="text-success" size={24} />
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card variant="elevated" hoverable>
              <Card.Body>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Active Projects</p>
                    <p class="text-2xl font-bold">42</p>
                    <p class="text-xs text-warning mt-1">-2 from last month</p>
                  </div>
                  <div class="p-3 bg-warning/10 rounded-lg">
                    <LucideIcons.Briefcase class="text-warning" size={24} />
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card variant="elevated" hoverable>
              <Card.Body>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Completion Rate</p>
                    <p class="text-2xl font-bold">94.7%</p>
                    <p class="text-xs text-success mt-1">+3.1% from last month</p>
                  </div>
                  <div class="p-3 bg-info/10 rounded-lg">
                    <LucideIcons.TrendingUp class="text-info" size={24} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Complex Layout Card */}
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Complex Layout Example</h3>

          <Card variant="elevated" padding="none">
            <Card.Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=300&fit=crop"
              alt="Code editor"
              position="top"
            />

            <Card.Body>
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold mb-2">Building a Modern UI Library</h3>
                  <p class="text-sm text-gray-600">
                    Learn how to create reusable, accessible, and beautiful components using Nullstack and Tailwind CSS.
                  </p>
                </div>
                <Badge color="primary">Featured</Badge>
              </div>

              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center gap-2">
                  <Avatar src="https://i.pravatar.cc/150?img=20" size="sm" />
                  <div>
                    <p class="text-sm font-medium">John Doe</p>
                    <p class="text-xs text-gray-500">Senior Developer</p>
                  </div>
                </div>

                <div class="flex gap-4 ml-auto">
                  <Chip size="sm" variant="soft" color="primary">
                    <LucideIcons.Clock size={14} />
                    12 min read
                  </Chip>
                  <Chip size="sm" variant="soft" color="success">
                    <LucideIcons.Eye size={14} />
                    2.4k views
                  </Chip>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-4">
                <Badge size="sm" variant="soft" color="primary">React</Badge>
                <Badge size="sm" variant="soft" color="secondary">TypeScript</Badge>
                <Badge size="sm" variant="soft" color="info">Tailwind</Badge>
                <Badge size="sm" variant="soft" color="success">Components</Badge>
              </div>
            </Card.Body>

            <Card.Footer>
              <div class="flex items-center justify-between">
                <div class="flex gap-2">
                  <Button size="sm" variant="ghost">
                    <LucideIcons.Heart size={16} class="mr-1" />
                    124
                  </Button>
                  <Button size="sm" variant="ghost">
                    <LucideIcons.MessageCircle size={16} class="mr-1" />
                    32
                  </Button>
                  <Button size="sm" variant="ghost">
                    <LucideIcons.Share2 size={16} class="mr-1" />
                    Share
                  </Button>
                </div>
                <Button size="sm" variant="solid">Read Article</Button>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </section>
    </>
  )
}