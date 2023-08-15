"use client"
import React from "react";
import { useState } from 'react';
import { sanitize } from "@/utils/sanitize";


const Newsletter = ({ status, message, onValidated }) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     */
    const handleFormSubmit = () => {
        setError(null);
        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }
        const isFormValidated = onValidated({ EMAIL: email });
        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    /**
     * Handle Input Key Event.
     */

  
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    }

    /**
     * Extract message from string.
     */
  
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return sanitize(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? sanitize(formattedMessage) : null;
    }

    return (
        <>
            <div
                className="flex"
            >
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                    // @ts-ignore
                    onChange={(event) => setEmail(event?.target?.value ?? '')}
                    onKeyUp={(event) => handleInputKeyEvent(event)}
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    id="email-address"
                    placeholder="Your Email Address"
                    className="bg-[#fbfcfd] border border-[#e4e8ed] w-full h-[50px] px-[30px] text-sm"
                />
                <button
                    type="submit"
                    className="cta"
                    // @ts-ignore
                    onClick={handleFormSubmit}
                >
                    Sign Up
                </button>
            </div>
            <div className="min-h-42px">
                {'sending' === status ? "Processing..." : null}
                {'error' === status || error ? (
                    <div
                        className="text-red-700 pt-2"
                        //  @ts-ignore
                        dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                    />
                ) : null}
                {/* @ts-ignore */}
                {'success' === status && 'error' !== status && !error && (
                    <div className="text-green-600 font-semibold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
                )}
            </div>
        </>
    );
}

export default Newsletter