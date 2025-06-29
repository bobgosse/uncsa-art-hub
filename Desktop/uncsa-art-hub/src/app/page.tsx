'use client';

import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '2rem',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Image
        src="/UNCSA_Filmmaking_Alt.jpeg"
        alt="UNCSA Filmmaking Logo"
        width={300}
        height={300}
        style={{ marginBottom: '2rem' }}
      />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Welcome to the UNCSA Art Hub
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        A project management portal for student and faculty filmmaking at UNCSA.
      </p>
    </main>
  );
}
