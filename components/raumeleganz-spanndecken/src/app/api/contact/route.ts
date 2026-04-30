import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<ContactPayload>;

    const name = (payload.name ?? '').trim();
    const email = (payload.email ?? '').trim();
    const phone = (payload.phone ?? '').trim();
    const service = (payload.service ?? '').trim();
    const message = (payload.message ?? '').trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: 'Bitte Name, E-Mail und Nachricht ausfüllen.' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@raumeleganz-spanndecken.de';
    const host = requiredEnv('SMTP_HOST');
    const port = Number(requiredEnv('SMTP_PORT'));
    const user = requiredEnv('SMTP_USER');
    const pass = requiredEnv('SMTP_PASS');
    const secure = (process.env.SMTP_SECURE ?? '').toLowerCase() === 'true' || port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `Kontaktanfrage: ${service || 'Allgemein'} – ${name}`;
    const text = [
      'Neue Kontaktanfrage über raumeleganz-spanndecken.de',
      '',
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || '-'}`,
      `Interesse: ${service || '-'}`,
      '',
      'Nachricht:',
      message,
      '',
      `Zeit: ${new Date().toISOString()}`,
    ].join('\n');

    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Unbekannter Fehler beim Senden.';
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}

