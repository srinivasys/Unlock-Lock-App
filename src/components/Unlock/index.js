import {useState} from 'react'

import {
  BgContainer,
  LockContainer,
  Img,
  Paragraph,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setLockStatus] = useState(false)
  const imgUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickBtn = () => {
    setLockStatus(prevState => !prevState)
  }

  return (
    <BgContainer>
      <LockContainer>
        <Img src={imgUrl} alt={altText} />
        <Paragraph>{text}</Paragraph>
      </LockContainer>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </BgContainer>
  )
}

export default Unlock
