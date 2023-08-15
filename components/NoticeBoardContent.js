"use client"
import React from "react";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer'
import Newsletter from './Newsletter'



const NoticeBoardContent = ({blok}) => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  return (
    <div className="noticeBoardContent" {...storyblokEditable(blok)}>
        <div className="noticeBoardTitle text-4xl text-center mb-5">{render(blok.title)}</div>
        <div className="noticeBoardText mb-10 text-center">{render(blok.text)}</div>
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
              const { subscribe, status, message } = props || {};
               return (
                <Newsletter
                  status={status}
                  message={message}
                  onValidated={formData => subscribe(formData)}
                />
              )
            }}
          >
          </MailchimpSubscribe>
    </div>
  )
}

export default NoticeBoardContent