import { BoxProps } from '@chakra-ui/react';
import * as S from './styles';

export type ResumeSectionItemProps = BoxProps & {
  title: string;
  tag: string;
  description: string;
};

const ResumeSectionItem = ({
  title,
  tag,
  description,
  ...boxProps
}: ResumeSectionItemProps) => {
  return (
    <S.Layout {...boxProps}>
      <S.Tag>{tag}</S.Tag>
      <S.Title as="h3">{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Layout>
  );
};

export default ResumeSectionItem;
