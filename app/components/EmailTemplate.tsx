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
    <h2>Email from, {name}.</h2>
    <p>{email}</p>
    <p>
      phone: <strong>{phone}</strong>
    </p>
    <p>
      message: <strong>{message}</strong>
    </p>
    <br />
    <p>
      <span>My budget is: </span>
      <h3>€{budget}</h3>
    </p>
  </div>
);
