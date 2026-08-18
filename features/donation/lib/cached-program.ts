'use server';

import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import { ProgramChild, ProgramDonasiProps } from '../types';

const getProgramDetail = cache(
  async (slug: string): Promise<ProgramDonasiProps | null> => {
    const { data, error } = await supabase
      .from('program_donation')
      .select(
        `*,
        donation_evidences(amount),
        children:program_donation!parent_id(
          donation_evidences(amount)
        ),
        program_timeline(
          id,
          date,
          activity,
          activity_en,
          activity_ar,
          cost,
          description
        )`
      )
      .eq('slug', slug)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return null;
    }

    const { donation_evidences, children, ...program } = data;

    const collected_amount = [
      ...(donation_evidences ?? []),
      ...(children ?? []).flatMap(
        (child: ProgramChild) => child.donation_evidences ?? []
      ),
    ].reduce((total, { amount }) => total + (Number(amount) || 0), 0);

    return { ...program, collected_amount };
  }
);

export async function getCachedProgramDetail(
  slug: string
): Promise<ProgramDonasiProps | null> {
  return getProgramDetail(slug);
}
