import React from 'react'
import styles from './index.module.scss'

export interface NAME_COMPONENTProps {}

const NAME_COMPONENT: React.FC<NAME_COMPONENTProps> = () => {
  return <div className={styles.container}>NAME_COMPONENT</div>
}

export default NAME_COMPONENT
