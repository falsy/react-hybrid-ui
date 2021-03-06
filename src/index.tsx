import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

interface IProps {
  isAcitive: Boolean
  isBehind?: Boolean
  children: React.ReactNode
}

const ViewArea: React.FC<IProps> = ({ isAcitive, isBehind, children }) => {

  const [isShow, setShow] = useState(false)
  const [isBgShow, setBgShow] = useState(false)
  const [isBgMotion, setBgMotion] = useState(false)

  useEffect(() => {
    if(isAcitive) {
      setShow(true)
      setBgShow(true)
      setTimeout(() => {
        setBgMotion(true)
      }, 60)
    } else {
      setShow(false)
      setBgMotion(false)
      setTimeout(() => {
        setBgShow(false)
      }, 200)
    }
  }, [isAcitive])

  return (
    <$Arae isBehind={isBehind}>
      <$Bg isBgShow={isBgShow} isBgMotion={isBgMotion} />
      <$Content isShow={isShow}>{ children }</$Content>
    </$Arae>
  )
}

export default ViewArea

const $Arae = styled.div<{isBehind?: Boolean}>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  transform: translateX(0);
  will-change: transform;
  transition: transform 0.3s;
  ${props => props.isBehind && `transform: translateX(-5%);`}
`

const $Bg = styled.div<{isBgShow: Boolean; isBgMotion: Boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  z-index: 1800;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
  display: none;
  ${props => props.isBgShow && `display: block;`}
  ${props => props.isBgMotion && `
    transition: opacity 0.2s;
    opacity: 0.6;
  `}
`

const $Content = styled.div<{isShow: Boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  transform: translateX(100%);
  transition: transform 0.2s;
  will-change: transform;
  ${props => props.isShow && `
    transition: transform 0.3s;
    transform: translateX(5%);
  `}
`