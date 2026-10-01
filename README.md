# 📚 Book Vibe

Book Vibe is a modern book management web application built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, and Context API**.

Users can explore books, view detailed information, add books to their **Read Books** list or **Wishlist**, and view their reading data through a chart.

## 🌐 Live Demo

🔗 **Live Website:** Add your Netlify link here

## 🚀 Features

* 📚 Browse available books
* 🔎 View detailed book information
* 📖 Add books to Read Books
* ❤️ Add books to Wishlist
* 📊 Visualize read books with a bar chart
* 🔃 Sort books by:

  * Rating
  * Number of pages
  * Publishing year
* 📱 Responsive design
* ⚡ Built with Next.js App Router
* 🎨 Styled with Tailwind CSS and DaisyUI
* 🔄 Global state management with Context API

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* Recharts
* Context API
* JSON Server / REST API

## 📂 Project Structure

```text
book-vibe/
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   └── [id]/
│   │   ├── listed-books/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── BookCard/
│   │   ├── bookDetails/
│   │   └── Shared/
│   │
│   ├── context/
│   │   └── BooksContext.tsx
│   │
│   └── types/
│       └── Books.type.ts
│
├── public/
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd book-vibe
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## 🗄️ Run JSON Server

If you are using JSON Server for the book API:

```bash
npx json-server --watch db.json --port 5000
```

The API will be available at:

```text
http://localhost:5000
```

## 📊 Main Functionality

### Book Details

Users can open a book and see:

* Book name
* Author
* Category
* Rating
* Total pages
* Publisher
* Publishing year
* Tags
* Review

### Read Books

Users can add books to their reading list using the **Read** button.

The selected books are managed globally using React Context API.

### Wishlist

Users can add books to their wishlist and manage them separately from their read books.

### Sorting

Books can be sorted by:

```text
Rating
Number of Pages
Publishing Year
```

### Reading Chart

The application uses **Recharts** to display the user's read books visually.

If there are no read books, a fallback message is displayed instead of the chart.

## 📦 Dependencies

Main dependencies include:

```bash
npm install next react react-dom
npm install recharts
```

For development:

```bash
npm install -D typescript tailwindcss
```

## 🔧 Environment

If your project uses environment variables, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=YOUR_API_URL
```

Do not upload sensitive environment variables to GitHub.

## 🚀 Build for Production

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm start
```

## ☁️ Deployment

This project can be deployed using **Netlify**.

Before deployment, make sure your API is hosted online. Do not use:

```text
http://localhost:5000
```

for a production API.

Replace it with your deployed API URL.

## 👨‍💻 Author

**Ridoy Kumar**

Aspiring Full-Stack Developer | React • Next.js • TypeScript

* GitHub: https://github.com/Ridoy-Kumar-133
* Facebook: https://www.facebook.com/ridoy.ariyan.2024/

---

⭐ If you like this project, consider giving the repository a star!
