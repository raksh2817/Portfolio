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

    // Note: This API route is kept for future use with email services like Resend
    // Currently using FormSubmit directly in the Contact component
    // To use this route with Resend:
    // 1. Install: npm install resend
    // 2. Set RESEND_API_KEY environment variable
    // 3. Uncomment the code below
    
    // Send email using Resend (if API key is configured and resend is installed)
    // const resendApiKey = process.env.RESEND_API_KEY
    // if (resendApiKey) {
    //   try {
    //     const { Resend } = await import('resend')
    //     const resend = new Resend(resendApiKey)
    //     await resend.emails.send({
    //       from: 'Portfolio Contact <onboarding@resend.dev>',
    //       to: 'rakshithsrinath17@gmail.com',
    //       replyTo: email,
    //       subject: `Portfolio Contact: ${subject}`,
    //       html: `...`,
    //     })
    //   } catch (emailError) {
    //     console.error('Email sending error:', emailError)
    //   }
    // }

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

