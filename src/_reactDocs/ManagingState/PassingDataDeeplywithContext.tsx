import {createContext, FC, ReactNode, useContext} from 'react';

import './index.scss'
//#region components
export const SectionsContextPage: FC = () => {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className="section">
      {children}
    </section>
  );
};



export const Heading: FC<HeadingProps> = ({  children }) => {
  const level = useLevelContext();

  console.log('level', level);

  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
};
//#endregion

//#region types
interface SectionProps {
  level: TLevel;
  children: ReactNode;
}
interface HeadingProps {
  children: ReactNode;
}


type TLevel = 1 | 2 | 3 | 4 | 5 | 6;
//#endregion

//#region context
const levelContext = createContext<TLevel>(1);

const useLevelContext = () => useContext(levelContext);
//#endregion
