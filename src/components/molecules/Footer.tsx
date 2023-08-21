/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';

interface FooterItems {
  title: string;
  items: { title: string; url: string; external: boolean }[];
}

const Footer = (): JSX.Element => {
  const footer: FooterItems[] = [
    {
      title: 'Your Services',
      items: [
        { external: false, title: 'Partner with us', url: '#' },
        { external: false, title: 'Sell your farm', url: '#' },
        { external: false, title: 'Rent out your farm', url: '#' },
        { external: false, title: 'Setup your farm', url: '#' },
        { external: false, title: 'Weed your farm', url: '#' },
        { external: false, title: 'Clear your farmland', url: '#' },
        { external: false, title: 'Buy farmland', url: '#' },
        { external: false, title: 'Rent Warehouse', url: '#' },
      ],
    },
    {
      title: 'Make Money with us',
      items: [
        { external: false, title: 'Advertise Your Products', url: '#' },
        { external: false, title: 'Self Publish With Us', url: '#' },
        { external: false, title: 'Self Agro E books', url: '#' },
        { external: false, title: 'Setup Your Farm', url: '#' },
      ],
    },
    {
      title: 'Get To Know Us',
      items: [
        { external: false, title: 'Company', url: '#' },
        { external: false, title: 'About Us', url: '#' },
        { external: false, title: 'Careers', url: '#' },
        { external: false, title: 'Investors Relation', url: '#' },
        { external: false, title: 'Sponsorship', url: '#' },
      ],
    },
    {
      title: 'For Affiliates',
      items: [
        {
          external: true,
          title: 'registration terms and condition',
          url: 'https://twitter.com/Afrisplash',
        },
        {
          external: true,
          title: 'become an affiliate',
          url: 'https://www.linkedin.com/company/afrisplash/',
        },
        {
          external: true,
          title: 'hollyway global programme',
          url: 'https://web.facebook.com/AfriSplashRemotely',
        },
        {
          external: true,
          title: 'hollyway global affiliate guidelines',
          url: '#',
        },
      ],
    },
    {
      title: 'customer service',
      items: [
        {
          external: true,
          title: 'help center',
          url: 'https://twitter.com/Afrisplash',
        },
        {
          external: true,
          title: 'report abuse',
          url: 'https://www.linkedin.com/company/afrisplash/',
        },
        {
          external: true,
          title: 'submit a dispute',
          url: 'https://web.facebook.com/AfriSplashRemotely',
        },
      ],
    },
  ];

  return (
    <footer className='bg-[#232F3E] w-full py-5 text-white'>
      <div className='w-11/12 md:w-10/12 mx-auto space-y-12'>
        <div className='flex w-full justify-between flex-wrap pt-14'>
          {footer.map((item: FooterItems, index) => (
            <section
              key={index}
              className='flex-[1] text-white_2 mx-5 py-3 w-4/12 sm:w-3/12 md:w-max space-y-4'
            >
              <div className='capitalize font-[700] whitespace-nowrap  md:text-[15px] mt-[6px] mb-[14px]'>
                {item.title}
              </div>
              <ul className='space-y-3 text-[#DDD]'>
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                {item.items.map((subItems: any, index: number) => (
                  <li
                    key={index}
                    className='capitalize text-xs sm:text-[13px] md:text-[12px]'
                  >
                    <Link
                      to={subItems.url}
                      target={subItems.external ? '_blank' : '_self'}
                    >
                      {subItems.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <div className='capitalize font-[700] whitespace-nowrap  md:text-[15px] mt-[20px] mb-[14px]'>
              Contact us
            </div>

            <h3>
              Address :{' '}
              <span>
                Amore Street 20, Olodi - Apata.Ajegunle 102103, Lagos.
              </span>
            </h3>

            <h3>
              Phone Number : <span>+2347035980756</span>
            </h3>
          </section>
        </div>

        <div className='text-white_2 flex items-center flex-col md:flex-row md:justify-between border-t border-white_2/20 py-10'>
          <section>
            <span>&copy; </span>
            <span className='capitalize font-[500] whitespace-nowrap  md:text-[14px] mt-[20px] mb-[14px]'>
              {new Date().getFullYear()} Hollywayglobal.com .All Rights //
              Reserved.
            </span>
          </section>
          <section>
            <ul className='flex space-x-3  capitalize whitespace-nowrap  md:text-[13px] mt-[20px] mb-[14px]'>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Copyright policy</li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
