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

    // Log submission (always log for debugging)
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Send email using Resend (if API key is configured)
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (resendApiKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendApiKey)
        
        await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>', // Update this with your verified domain
          to: 'rakshithsrinath17@gmail.com', // Your email where you'll receive inquiries
          replyTo: email, // So you can reply directly
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #6366f1;">New Contact Form Submission</h2>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              <div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1;">
                <h3 style="color: #1f2937;">Message:</h3>
                <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                This message was sent from your portfolio contact form.
              </p>
            </div>
          `,
          text: `
            New Contact Form Submission
            
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            
            Message:
            ${message}
          `,
        })
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Still return success to user, but log the error
        // You might want to store in a database as backup
      }
    } else {
      console.warn('RESEND_API_KEY not configured. Email not sent. Submissions are only logged.')
    }

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

