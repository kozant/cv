import type { FC } from "react";
import type { ContactItem } from "../cv/types";

interface ContactSectionProps {
  contacts: ContactItem[];
}

export const ContactSection: FC<ContactSectionProps> = ({ contacts }) => {
  return (
    <section className="block">
      <h2>Contact</h2>
      <ul className="contacts">
        {contacts.map((contact, index) => (
          <li key={`contact-${index}-${contact.label}`}>
            <span className="contact-label">{contact.label}</span>
            {contact.href ? (
              <a href={contact.href} className="contact-value">
                {contact.value}
              </a>
            ) : (
              <span className="contact-value">{contact.value}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
