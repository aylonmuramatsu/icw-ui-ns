import { Button, Form, Input, InputMask, Select, Tabs, Toaster, toaster } from "@insightcreativewebs/ui";


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
    </>
  )
}