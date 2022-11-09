import Link from '@/components/molecules/Link';
import { Spacer } from '@chakra-ui/react';
import * as S from './styles';

export type ProjectCardProps = {
  title: string;
  poster: string;
  description: string;
  tags: string[];
  preview: string;
  source: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { title, poster, description, tags, preview, source } = props;

  return (
    <S.Layout>
      <S.Image src={poster} alt={title} />
      <S.Project>
        <S.Information>
          <S.Title as="h2">{title}</S.Title>
          <S.Diviser />
          <S.Summary>{description}</S.Summary>

          <S.Subtitle as="h4">Tech stack</S.Subtitle>
          <S.Diviser />
          <S.Tags spacing={5}>
            {tags.map((tag) => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </S.Tags>

          <S.Actions>
            <Link href={preview} isExternal>
              <S.Action>Live Preview</S.Action>
            </Link>
            <Spacer />
            <Link href={source} isExternal>
              <S.Action>Source Code</S.Action>
            </Link>
          </S.Actions>
        </S.Information>
      </S.Project>
    </S.Layout>
  );
};

export default ProjectCard;
