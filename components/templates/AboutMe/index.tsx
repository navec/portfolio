import Title from '@/components/atoms/Title';
import SummaryJob, { SummaryJobProps } from '@/components/organisms/SummaryJob';
import SummaryStat, {
  SummaryStatProps,
} from '@/components/organisms/SummaryStat';
import * as S from './styles';

type AboutMeProps = {
  title: string;
  subtitle: string;
  description: string;
  summary: SummaryStatProps & { job: SummaryJobProps };
};

const AboutMe = ({ title, subtitle, description, summary }: AboutMeProps) => (
  <S.Layout>
    <Title>{title}</Title>
    <S.Subtitle as="h2">{subtitle}</S.Subtitle>
    <S.Description>{description}</S.Description>

    <S.Summary>
      <S.Stats>
        <SummaryStat stats={summary.stats} />
      </S.Stats>
      <S.Jobs>
        <SummaryJob title={summary.job.title} items={summary.job.items} />
      </S.Jobs>
    </S.Summary>
  </S.Layout>
);

export default AboutMe;
