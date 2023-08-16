import React from 'react'
import Navigation from './Navigation'
import { getConfig } from '@/utils/storyblok'

const Header = async () => {
  const config = await getConfig();
  return <Navigation config={config}/>
}

export default Header