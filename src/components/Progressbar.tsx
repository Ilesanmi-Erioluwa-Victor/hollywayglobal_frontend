'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

NProgress.configure({ easing: 'ease', speed: 500, minimum: 0.1 });

const Progressbar =()=> {
  const pathname = usePathname();
  const searchParams = useSearchParams();

    useEffect(() => {
      
      const url: any = pathname + searchParams.toString();
      NProgress.start();
      NProgress.done(url);
      console.log(url);
      
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
}

export default Progressbar
