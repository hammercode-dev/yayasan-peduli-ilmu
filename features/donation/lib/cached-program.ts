import { cache } from 'react';
import { supabase } from '@/lib/supabase';
import { ProgramDonasiProps } from '../types';

/* this is the “Memoizing data requests” approach from the nextjs documentation, 
i tried this approach for generate meta data and it worked */
export const getCachedProgramDetail = cache(
  async (slug: string): Promise<ProgramDonasiProps | null> => {
    try {
      const { data, error } = await supabase
        .from('program_donation')
        .select(
          `*, 
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

      return data;
    } catch (err) {
      throw err
    }
  }
);
