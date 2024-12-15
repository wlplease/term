import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

const Terms: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - NullShift</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Header />

      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
        <main className="w-full max-w-4xl bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
          <p className="mb-6">
            Welcome to NullShift! These Terms and Conditions govern your use of our website
            and services. By accessing or using our site, you agree to comply with these terms.
            If you do not agree with any part of these terms, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. General Information</h2>
          <p className="mb-4">
            NullShift is a technology-focused platform designed for informational and
            entertainment purposes. Content provided on this website is not intended as
            financial advice, investment advice, or professional consultation of any kind. Use
            the information at your own discretion.
          </p>
          <p className="mb-4">
            Access to our site is intended for individuals aged 18 years and older. NullShift
            does not knowingly collect or process information from individuals under the age of
            18. If you are under 18, please do not use this site.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Prohibited Uses</h2>
          <p className="mb-4">
            You agree not to use our website for any unlawful or unauthorized purposes,
            including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Engaging in activities that violate any applicable laws or regulations.</li>
            <li>Attempting to hack, disrupt, or exploit the website or its services.</li>
            <li>Distributing harmful or malicious content, including viruses or spam.</li>
            <li>
              Posting content that is offensive, defamatory, or infringes on intellectual
              property rights.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">3. No Financial or Investment Advice</h2>
          <p className="mb-4">
            All content provided on NullShift is for informational and entertainment purposes
            only. It is not intended as financial or investment advice. NullShift makes no
            guarantees about the accuracy or completeness of the information provided. Consult
            with a licensed professional before making any financial decisions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content, design elements, and intellectual property on this website are owned
            by NullShift or its licensors. Unauthorized use, reproduction, or distribution of
            our content is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            NullShift is not responsible for any direct, indirect, incidental, or consequential
            damages arising from your use of the website or its content. The site and its
            content are provided &quot;as is,&quot; without warranties of any kind.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. External Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. NullShift is not responsible
            for the content, privacy policies, or practices of these third-party sites. Access
            external links at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="mb-4">
            NullShift reserves the right to update these Terms and Conditions at any time
            without prior notice. It is your responsibility to review these terms periodically.
            Continued use of the site constitutes acceptance of any changes.
          </p>

          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These Terms and Conditions are governed by and construed in accordance with the
            laws of the United States. Any disputes arising under these terms shall be resolved
            in the courts of the United States.
          </p>

          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about these Terms and Conditions, please
            contact us at:{' '}
            <Link href="mailto:nullshiftxyz@gmail.com">
              <span className="text-blue-500 underline hover:text-blue-700">
                nullshiftxyz@gmail.com
              </span>
            </Link>
            .
          </p>
        </main>
      </div>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .text-3xl {
            font-size: 1.75rem;
          }

          .p-6 {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .text-3xl {
            font-size: 1.5rem;
          }

          .p-6 {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Terms;
