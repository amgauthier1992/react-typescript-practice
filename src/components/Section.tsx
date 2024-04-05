import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  title?: string; //making title optional and providing a default value below
};

//old way using React.FC
// const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

//React v18 way
const Section = ({ children, title = 'My subheading' }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
