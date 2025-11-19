import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface AIPlanResponse {
  concept: string;
  lighting: string;
  wardrobe: string;
  pose: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}