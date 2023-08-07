import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

export * from './Alert/Alert.tsx'
export * from './Alert/AlertTitle.tsx'
export * from './Button/Button.tsx'
export * from './Button/IconButton.tsx'
export * from './ClickAway/ClickAway.tsx'
export * from './Collapse/Collapse.tsx'
export * from './components/icons/Icons.tsx'
export * from './FormControl/FormControl.tsx'
export * from './FormHelper/FormHelper.tsx'
export * from './Input/Input.tsx'
export * from './InputLabel/InputLabel.tsx'
export * from './Menu/Menu.tsx'
export * from './MenuItem/MenuItem.tsx'
export * from './MenuList/MenuList.tsx'
export * from './option/Option.tsx'
export * from './Paper/Paper.tsx'
export * from './Popover/Popover.tsx'
export * from './Popover/RenderComponent.tsx'
export * from './Popover/helpers.ts'
export * from './SnackBar/SnackBar.tsx'
export * from './Table/Table.tsx'
export * from './Table/TableBody.tsx'
export * from './Table/TableFooter.tsx'
export * from './Table/TableContainer.tsx'
export * from './Table/TableCell.tsx'
export * from './Table/TableHead.tsx'
export * from './TextField/TextField.tsx'
export * from './Tooltip/Tooltip.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
