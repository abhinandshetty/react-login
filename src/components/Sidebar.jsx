// import { useBooleanKnob } from '@stardust-ui/docs-components'
import React, {useEffect} from 'react'
import { slide as Menu } from 'react-burger-menu'
import * as $ from  'jquery';
import { Link } from 'react-router-dom';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '90px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    marginTop: '1.2rem',
    marginBottom: '1.2rem',
    color: 'white'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const SidebarExampleSidebar = () => {
  return (
    <>
      <Menu styles={styles}>
        <div></div>
        <Link className="menu-item" to="/users">Users</Link>
        <Link className="menu-item" to="/users">Products</Link>
      </Menu>
    </>
  )
}

export default SidebarExampleSidebar