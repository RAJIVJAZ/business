"use client";

import { site, whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi BusinessMitra India, I'd like to know more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-xl shadow-green/30 transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.29.64 4.5 1.85 6.42L4 29l7.77-1.81A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.63 3 16.004 3Zm0 21.6c-1.9 0-3.75-.5-5.36-1.44l-.38-.22-4.62 1.08 1.1-4.5-.25-.4A9.55 9.55 0 0 1 5.4 15c0-5.3 4.3-9.6 9.6-9.6 5.3 0 9.6 4.3 9.6 9.6 0 5.3-4.3 9.6-9.6 9.6Zm5.27-7.18c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.14-1.2-.44-2.29-1.41-.85-.75-1.42-1.68-1.59-1.97-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.82 1.17 3.01.14.19 2 3.05 4.86 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.33Z" />
      </svg>
    </a>
  );
}
