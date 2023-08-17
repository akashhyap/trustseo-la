import React from 'react'
import { getConfig } from '@/utils/storyblok'
import Footer from './Footer';

const FooterMenuWrapper = async () => {
  const config = await getConfig();
  return <Footer config={config}/>
}

export default FooterMenuWrapper