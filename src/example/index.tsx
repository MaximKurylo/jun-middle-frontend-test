import * as React from 'react'
import Menu from './components/Menu'
import Paper from './components/Paper'

export interface IProps {}
export const Example: React.FC<IProps> = () => <Paper>
  <Menu />
</Paper>
