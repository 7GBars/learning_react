import { FC, ReactNode } from 'react';
import {LevelContext, useLevelContext, type TLevel } from "@/hooks";
import './index.scss'

//#region components
export const SectionsContextPage: FC = () => {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export const Section: FC<SectionProps> = ({ level, children }) => {
  const currentLevel = useLevelContext();
  level ??= currentLevel;

  const limitedLevel = Math.min(level + 1, 6) as TLevel;

  return (
    <section className="section">
      <LevelContext value={limitedLevel}>
        {children}
      </LevelContext>
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
  level?: TLevel;
  children: ReactNode;
}
interface HeadingProps {
  children: ReactNode;
}



//#endregion
