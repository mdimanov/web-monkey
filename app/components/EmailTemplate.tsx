import * as React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  phone: number;
  budget: number;
  message: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  budget,
  message,
}) => (
  <div>
    <h1>Email from, {name}!</h1>
    <p>{email}</p>
    <p>
      phone: <strong>{phone}</strong>
    </p>
    <p>
      message: <strong>{message}</strong>
    </p>
    <br />
    <p>
      <h2>€{budget}</h2>
    </p>
  </div>
);
