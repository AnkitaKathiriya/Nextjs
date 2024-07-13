import { NextResponse } from 'next/server'

export async function GET(reuest,content) {
    console.log(content)
  const studentDetail = content.params.student
  return NextResponse.json({result:studentDetail},{status:200})
}
