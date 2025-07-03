'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { ProgramDonasiProps } from '../types';

type Status = 'idle' | 'loading' | 'error' | 'success';

function useFetchProgramDetail(slug: string) {
  const [program, setProgram] = useState<ProgramDonasiProps | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      setStatus('loading');
      setError(null);

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
          setError(error.message);
          setStatus('error');
        } else {
          setProgram(data || []);
          setStatus('success');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || 'Unexpected error');
        setStatus('error');
      }
    };

    fetchProgram();
  }, [slug]);

  return { program, status, error };
}

export default useFetchProgramDetail;
