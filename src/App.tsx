import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';

function App() {
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

