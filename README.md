# 🧾 CRM Support Ticket App

A simple **React CRM-style web app** to manage customer support tickets.  
Built with **Create React App**, **TailwindCSS**, and **Context API** — data is stored in **localStorage**.

---

## 🚀 Features
- View, create, edit, and manage support tickets  
- Search, filter by status, and sort by date/priority  
- Add and view comments on each ticket  
- Editable ticket **status** and **priority**  
- Persistent data using localStorage  
- Responsive UI + pagination (via react-data-table-component)

---

## ⚙️ Tech Stack
- **React (CRA)**
- **React Router DOM**
- **TailwindCSS**
- **Context API (State Management)**
- **React Data Table Component**

---

## 📂 Folder Structure
```bash
src/
│
├── App.js               # Root component managing routes (List, Detail, Create)
│
├── context/
│   └── TicketContext.jsx   # Global Context API for ticket data, CRUD, and localStorage persistence
│
├── components/
│   ├── SearchInput.jsx     # Search bar component (with debounce)
│   └── TicketTable.jsx     # Table view for displaying tickets (sortable, paginated)
│
├── pages/
│   ├── TicketList.jsx      # Home page listing all tickets with search/filter/sort
│   ├── TicketDetail.jsx    # Detailed view for individual ticket (editable + comments)
│   └── CreateTicket.jsx    # Form to add new support tickets with validation
│
├── data/
│   └── dummyData.js        # Mock JSON data for initial ticket list





🧩 Installation
# Clone the repository
git clone https://github.com/Komal22i/CRM-App.git

# Navigate into project folder
cd crm-support-app

# Install dependencies
npm install

# Start the app
npm start
