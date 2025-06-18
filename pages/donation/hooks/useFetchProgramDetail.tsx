'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface ProgramDonasiProps {
  id: number;
  title: string;
  description: string;
  image_url: string;
  target_amount: number;
  collected_amount: number;
  status: 'active' | 'closed' | 'archived';
  starts_at: string;
  ends_at: string;
  location: string;
  slug: string;
  short_description: string;
}

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
          .select('*')
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
