import { Avatar, Center, Grid, Heading, Link, Text } from '@chakra-ui/react';
import { FaNode } from 'react-icons/fa';
import { SiJava, SiReact } from 'react-icons/si';
import * as S from './styles';

const icons = [
  { icon: SiReact, start: 2, size: 1 },
  { icon: FaNode, start: 4, size: 1 },
  { icon: SiJava, start: 6, size: 1 },
];

const skills = [
  { label: 'CSS', value: 80 },
  { label: 'HTML', value: 80 },
  { label: 'React', value: 70 },
  { label: 'JavaScript', value: 70 },
  { label: 'TypeScript', value: 80 },
  { label: 'Node.js', value: 65 },
  { label: 'Atomic Design', value: 60 },
  { label: 'Clean Archi', value: 45 },
];

const About = () => (
  <>
    <S.Title as="h1">About</S.Title>
    <S.Underline />

    <Grid
      h={210}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(7, 1fr)"
    >
      {icons.map(({ icon, start, size }, index) => (
        <S.GridIcon colStart={start} colSpan={size} key={index}>
          <S.Icon as={icon} />
        </S.GridIcon>
      ))}
      <S.GridIcon colStart={2} colSpan={5}>
        <Avatar
          size="2xl"
          name="Gaël Batchi"
          src="https://bit.ly/tioluwani-kolawole"
        />
      </S.GridIcon>
    </Grid>

    <Heading as="h2" mt="1.5rem" fontSize="xl" color="gray.600">
      <Center>Who I am ?</Center>
    </Heading>

    <Text m="1.5rem 0" textAlign="center">
      I&apos;m a Full-Stack Developer for{' '}
      <Link href="https://zenika.com/" color="teal.500" isExternal>
        Zenika
      </Link>{' '}
      in Paris. I am experienced in developing web and desktop applications in
      front & back end.
      <Link href="#" color="teal.500" isExternal display="block">
        View my work.
      </Link>
    </Text>

    <S.Skill>
      {skills.map(({ label, value }) => (
        <S.SkillItem key={label}>
          <S.SkinLabel>{label}</S.SkinLabel>
          <S.SkillProgress value={value} />
        </S.SkillItem>
      ))}
    </S.Skill>
  </>
);

export default About;
