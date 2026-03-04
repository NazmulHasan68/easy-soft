import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, email, companyName, projectBudget, projectBrief } = body

    // Basic validation
    if (!firstName || !email || !projectBrief) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // ← Change after domain verify
      to: ['nazmulhasan00068@gmail.com'],                  // ← 🔴 Replace with your email
      subject: `New Project Inquiry from ${firstName}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #f0f0f0; border-radius: 16px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0F2318 0%, #0d1f10 100%); padding: 40px 40px 30px; border-bottom: 1px solid #81fa0025;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
              <div style="width: 10px; height: 10px; background: #81fa00; border-radius: 50%;"></div>
              <span style="color: #81fa00; font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;">New Submission</span>
            </div>
            <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #ffffff;">Project Inquiry</h1>
            <p style="margin: 6px 0 0; color: #6b7280; font-size: 14px;">Received from your contact form</p>
          </div>

          <!-- Body -->
          <div style="padding: 36px 40px;">
            
            <!-- Row: Name + Email -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
              <div style="background: #161616; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px;">
                <p style="margin: 0 0 4px; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px;">Name</p>
                <p style="margin: 0; color: #fff; font-size: 15px; font-weight: 600;">${firstName}</p>
              </div>
              <div style="background: #161616; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px;">
                <p style="margin: 0 0 4px; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px;">Email</p>
                <p style="margin: 0; color: #81fa00; font-size: 15px; font-weight: 600;">${email}</p>
              </div>
            </div>

            <!-- Row: Company + Budget -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
              <div style="background: #161616; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px;">
                <p style="margin: 0 0 4px; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px;">Company</p>
                <p style="margin: 0; color: #fff; font-size: 15px; font-weight: 600;">${companyName || '—'}</p>
              </div>
              <div style="background: #161616; border: 1px solid #2a2a2a; border-radius: 12px; padding: 16px 20px;">
                <p style="margin: 0 0 4px; color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px;">Budget</p>
                <p style="margin: 0; color: #fff; font-size: 15px; font-weight: 600;">${projectBudget || '—'}</p>
              </div>
            </div>

            <!-- Project Brief -->
            <div style="background: #161616; border: 1px solid #81fa0020; border-radius: 12px; padding: 20px 24px; margin-bottom: 28px;">
              <p style="margin: 0 0 10px; color: #81fa00; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Project Brief</p>
              <p style="margin: 0; color: #d1d5db; font-size: 15px; line-height: 1.7;">${projectBrief}</p>
            </div>

            <!-- CTA -->
            <a href="mailto:${email}" style="display: inline-block; background: #81fa00; color: #000; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 100px; text-decoration: none;">
              Reply to ${firstName} →
            </a>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; border-top: 1px solid #1f1f1f; text-align: center;">
            <p style="margin: 0; color: #4b5563; font-size: 12px;">This email was sent from your website's contact form</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err: any) {
    console.error('API route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}