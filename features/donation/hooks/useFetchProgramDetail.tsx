'use client';

import { useEffect, useState } from 'react';
import { ProgramDonasiProps } from '../types';
import { getCachedProgramDetail } from '../lib/cached-program';

type Status = 'idle' | 'loading' | 'error' | 'success';

export interface UseFetchProgramDetailReturn {
  program: ProgramDonasiProps | null;
  status: Status;
  error: string | null;
}


function useFetchProgramDetail(slug: string): UseFetchProgramDetailReturn {
  const [program, setProgram] = useState<ProgramDonasiProps | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      if (!slug) return;
      
      setStatus('loading');
      setError(null);

      try {
        const cachedData = await getCachedProgramDetail(slug);

        if (cachedData) {
          setProgram(cachedData);
          setStatus('success');
        } else {
          setError('Program not found');
          setStatus('error');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error('Error in useFetchProgramDetail:', err);
        setError(err.message || 'Failed to fetch program data');
        setStatus('error');
      }
    };

    fetchProgram();
  }, [slug]);

  return { program, status, error };
}

export default useFetchProgramDetail;
