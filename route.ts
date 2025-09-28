import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { path, tags, secret } = await request.json();

    // Verificar secret token en producción
    if (process.env.REVALIDATE_SECRET && secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
    }

    // Revalidar por path
    if (path) {
      if (Array.isArray(path)) {
        path.forEach((p: string) => revalidatePath(p, 'page'));
      } else {
        revalidatePath(path, 'page');
      }
    }

    // Revalidar por tags
    if (tags) {
      if (Array.isArray(tags)) {
        tags.forEach((tag: string) => revalidateTag(tag));
      } else {
        revalidateTag(tags);
      }
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      path,
      tags 
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Error revalidating' },
      { status: 500 }
    );
  }
}
