import React, { useState } from 'react';
import './style.css';
import Counter from './components/Counter';
import UserInput from './components/UserInput';
import ContactManager from './components/ContactManager'

export default function App() {
  return (
    <div>
      <ContactManager />
    </div>
  );
}
