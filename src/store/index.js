import { createStore } from 'vuex'

// Initial state
const state = {
  startups: [
    {
      startupName: 'To the moon GmbH',
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg",
      description: 'Building robots that fly to the moon with the power of JavaScript.',
      website: 'https://tothemoon.com',
      linkedin: 'https://www.linkedin.com/in/lindsaywalton/',
      address: '1234 Moon Street, Moon City, Moon',
      industry: 'Robotics',
      founding_date: '2021-01-01',
      status: 'Active',
      phase: 'Seed',
      founders: ['Lindsay Walton', 'Alex Johnson', 'Samantha Reed'],
      fte_number: 5,
      equity_free_grants_chf: 100000,
      business_model_type: 'B2B',
      target_market: 'Space',
      last_update: '2021-01-01',
      kpis: "MoM revenue growth: 20%, CAC: 1000 CHF, LTV: 5000 CHF",
      last_funding_round: "Seed round, 1M CHF",
      last_milestone: "First robot launched to the moon",
      looking_for: "Investors, engineers",
    },
    // Add more startup objects here
  ],
  founders: [
    {
      name: 'Lindsay Walton',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'lindsay.walton@example.com',
      phone: '1-493-747-9031',
      linkedin: 'https://www.linkedin.com/in/lindsaywalton/',
      address: '1234 Elm Street, San Francisco, CA 94107',
      birthdate: 'June 8, 1990',
      startupName: 'To the moon GmbH',
      cofounders: ['Alex Johnson', 'Samantha Reed'],
      skills: 'Coding, Design, Marketing',
      role: 'CEO',
      education_degree: 'Computer Science (B.Sc.)',
      education_school: 'TUM',
      professional_experience_job: 'Front-end Developer',
      professional_experience_company: 'Google',
      last_update: "2021-06-01"
    },
    {
      name: 'Alex Johnson',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'alex.johnson@example.com',
      phone: '1-555-642-9984',
      linkedin: 'https://www.linkedin.com/in/alexjohnson/',
      address: '4321 Maple Avenue, Los Angeles, CA 90017',
      birthdate: 'March 14, 1988',
      startupName: 'To the moon GmbH',
      cofounders: ['Lindsay Walton', 'Samantha Reed'],
      skills: 'Business Development, Operations, Sales',
      role: 'COO',
      education_degree: 'Business Administration (MBA)',
      education_school: 'Stanford University',
      professional_experience_job: 'Operations Manager',
      professional_experience_company: 'Amazon',
      last_update: "2021-08-15"
    },
    {
      name: 'Samantha Reed',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'samantha.reed@example.com',
      phone: '1-322-654-9988',
      linkedin: 'https://www.linkedin.com/in/samanthareed/',
      address: '789 Pine Street, New York, NY 10002',
      birthdate: 'August 25, 1992',
      startupName: 'To the moon GmbH',
      cofounders: ['Lindsay Walton', 'Alex Johnson'],
      skills: 'Product Management, User Experience, Analytics',
      role: 'Product Manager',
      education_degree: 'Information Systems (M.Sc.)',
      education_school: 'MIT',
      professional_experience_job: 'UX Designer',
      professional_experience_company: 'Spotify',
      last_update: "2021-09-20"
    }
  ]
};

// Store creation
export const store = createStore({
  state,
  getters: {
    getStartupByName: (state) => (startupName) => {
      return state.startups.find(startup => startup.startupName === startupName);
    },
    getAllStartups: (state) => {
      return state.startups;
    },
    getFounderByName: (state) => (founderName) => {
      return state.founders.find(founder => founder.name === founderName);
    },
    getAllFounders: (state) => {
      return state.founders;
    },
  }
});
