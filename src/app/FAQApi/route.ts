import { NextRequest, NextResponse } from 'next/server';
import { FaqItem, faqItems } from './FAQApiUtils';

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method !== 'GET') {
    const response = {
      status: res.status,
      message: 'Metodo inválido'
    };

    return response;
  }

  return NextResponse.json(faqItems as FaqItem[]);
}
