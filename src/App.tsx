import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import { useRef } from 'react';
import Form, { type FormHandle } from './components/Form';

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main>
      {/* <Input label='Your name' id='name' type='text' />
      <Input label='Your age' id='age' type='number' />
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='#'>A Link</Button>
      </p> */}

      {/* <Input label='ForwardRef Component' id='test' ref={inputRef} /> */}

      {/* <Container as={Button}>Click me!</Container> */}

      <Form onSave={handleSave} ref={customForm}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
