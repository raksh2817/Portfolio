import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // In a production environment, you would send an email here
    // For now, we'll just log it and return success
    // You can integrate with services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Replace with actual email sending service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'rakshith014@gmail.com',
    //   subject: `Portfolio Contact: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // })

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

