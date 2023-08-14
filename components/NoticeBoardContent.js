import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer'

const NoticeBoardContent = ({blok}) => {
  return (
    <div className="noticeBoardContent" {...storyblokEditable(blok)}>
        <div className="noticeBoardTitle text-4xl text-center mb-5">{render(blok.title)}</div>
        <div className="noticeBoardText mb-10 text-center">{render(blok.text)}</div>
    </div>
  )
}

export default NoticeBoardContent