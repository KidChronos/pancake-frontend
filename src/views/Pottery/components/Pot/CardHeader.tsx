import styled from 'styled-components'
import { Flex, TokenPairImage } from '@pancakeswap/uikit'
import { PoolCardHeaderTitle } from 'views/Pools/components/PoolCard/PoolCardHeader'

const Container = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 16px 24px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.cardBorder};
`

interface CardHeaderProps {
  title: string
  subTitle: string
  primarySrc: string
  secondarySrc: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subTitle, primarySrc, secondarySrc }) => {
  return (
    <Container>
      <PoolCardHeaderTitle title={title} subTitle={subTitle} />
      <TokenPairImage width={64} height={64} primarySrc={primarySrc} secondarySrc={secondarySrc} />
    </Container>
  )
}

export default CardHeader