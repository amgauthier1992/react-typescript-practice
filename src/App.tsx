import { MouseEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';

import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';

interface User {
  id: number;
  username: string;
}

type ButtonEvent = MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>;

function App() {
  const [users, setUsers] = useState<User[] | null>(null);

  const addBtn = useCallback((e: ButtonEvent): void => {
    console.log(e);
  }, []);

  //empty dep array- runs once after initial render
  //no dep array- runs once after initial render and on every re-render
  //dep array with value. run after the initial render and then re-run only when one of the dependencies changes between renders. Edge cases- memoized values/reference types
  useEffect(() => {
    console.log('mounting'); //strict mode: mount -> unmount -> remount
    return () => console.log('unmounting'); //cleanup to avoid memory leaks
  }, []);

  return (
    <>
      <Heading title='Hello' />
      <Section>
        <p>paragraph</p>
      </Section>
      <Counter />
      <List
        items={['coffee', 'oj', 'milk', 'water']}
        render={(item: string) => <span className='li-span'>{item}</span>}
      />
    </>
  );
}

export default App;

