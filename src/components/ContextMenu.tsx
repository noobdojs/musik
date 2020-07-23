import React from 'react'
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu'
import { Feather } from '@expo/vector-icons'

interface ContextMenuProps {
  options: string[]
  handlePress: () => void
}

const ContextMenu: React.FC<ContextMenuProps> = ({options, handlePress}) => {
  const menuTriggerChildren = <Feather name="chevron-down" size={17} />
  return (
    <Menu>
      <MenuTrigger
        children={menuTriggerChildren}
      />
      <MenuOptions>
        {options.map((option, index) => (
          <MenuOption 
            key={index}
            onSelect={handlePress}
            text={option}
          />)
        )}
      </MenuOptions>
    </Menu>
  )
}

export default ContextMenu
