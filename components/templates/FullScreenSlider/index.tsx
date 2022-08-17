import * as S from './style';

export type FullScreenSliderProps = {
  title: string;
  description?: string;
};

const FullScreenSlider = ({ title, description }: FullScreenSliderProps) => {
  return (
    <S.Layout>
      <S.Title as="h1" size="4xl">
        {title}
      </S.Title>
      {description && (
        <S.Description fontSize="xl">{description}</S.Description>
      )}
    </S.Layout>
  );
};

export default FullScreenSlider;
