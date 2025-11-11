export const dummyData = [
  {
    id: 1,
    title: "AI model gave incorrect clause summary",
    customerName: "John Doe",
    email: "john@example.com",
    description: "The NDA summary generated seems incomplete.",
    priority: "High",
    status: "Open",
    createdAt: "2025-10-15T10:00:00Z",
    comments: [
      { user: "Support Agent", text: "We’re investigating this issue." }
    ]
  },
  {
    id: 2,
    title: "Unable to login after password reset",
    customerName: "Sarah Lee",
    email: "sarah.lee@example.com",
    description: "After resetting the password, the login form keeps redirecting to the reset page.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-09-30T12:20:00Z",
    comments: [
      { user: "Support Agent", text: "We’re checking authentication logs." },
      { user: "Sarah Lee", text: "Still facing the issue after clearing cache." }
    ]
  },
  {
    id: 3,
    title: "Invoice not generated for new subscription",
    customerName: "Michael Chen",
    email: "michaelc@example.com",
    description: "Subscription was activated but invoice PDF was not emailed to the client.",
    priority: "High",
    status: "Resolved",
    createdAt: "2025-10-05T08:45:00Z",
    comments: [
      { user: "Support Agent", text: "Invoice service was temporarily down. Fixed now." }
    ]
  },
  {
    id: 4,
    title: "Broken image link on dashboard",
    customerName: "Priya Singh",
    email: "priya.singh@example.com",
    description: "The company logo on the top left corner doesn’t load.",
    priority: "Low",
    status: "Open",
    createdAt: "2025-11-02T14:12:00Z",
    comments: []
  },
  {
    id: 5,
    title: "Export to CSV not working for reports",
    customerName: "Alex Johnson",
    email: "alex.j@example.com",
    description: "Clicking the 'Export CSV' button does nothing on the Reports page.",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-10-21T09:35:00Z",
    comments: [
      { user: "Support Agent", text: "Reproduced the issue in staging." },
      { user: "Dev Team", text: "Working on a patch for next release." }
    ]
  },
  {
    id: 6,
    title: "Email notifications delayed",
    customerName: "Emily Davis",
    email: "emilyd@example.com",
    description: "System notifications are received hours after the event occurs.",
    priority: "High",
    status: "Open",
    createdAt: "2025-11-05T10:20:00Z",
    comments: [
      { user: "Support Agent", text: "Checking background queue latency." }
    ]
  },
  {
    id: 7,
    title: "Mobile layout issue on ticket detail page",
    customerName: "Omar Patel",
    email: "omar.p@example.com",
    description: "The comment section overlaps the footer on mobile view.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-09-18T16:10:00Z",
    comments: [
      { user: "Support Agent", text: "CSS fix applied." }
    ]
  },
  {
    id: 8,
    title: "Two-factor authentication setup fails",
    customerName: "Linda Brown",
    email: "linda.b@example.com",
    description: "When scanning QR code in Authenticator app, it shows 'Invalid code format'.",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-11-07T07:30:00Z",
    comments: [
      { user: "Support Agent", text: "Reproduced on Android; investigating API response." }
    ]
  },
  {
    id: 9,
    title: "Data sync between CRM and ERP delayed",
    customerName: "Ravi Kumar",
    email: "ravi.k@example.com",
    description: "New customers created in CRM are not appearing in ERP until 24h later.",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-10-28T18:55:00Z",
    comments: [
      { user: "Support Agent", text: "Sync queue backlog detected; rerunning sync manually." }
    ]
  },
  {
    id: 10,
    title: "Typo in terms & conditions page",
    customerName: "Sophie Martin",
    email: "sophie.m@example.com",
    description: "Found a spelling error in section 4 of the T&C page.",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-10-10T11:15:00Z",
    comments: [
      { user: "Support Agent", text: "Updated typo and republished page." }
    ]
  }
];
