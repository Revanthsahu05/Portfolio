
---

## 🛠️ Technologies Used

### Frontend

- ⚛️ React
- 🌀 Tailwind CSS
- 🍰 Vite
- 🔔 React Toastify
- 🌐 Axios

### Backend

- ⚙️ Node.js
- 🚀 Express
- 📬 Nodemailer
- 🌍 CORS
- 📦 Dotenv

---

## 📬 Contact Form Workflow

1. User submits the form on frontend.
2. Axios sends a `POST` request to `https://revanthsahuportfolio.onrender.com/api/contact`.
3. Backend uses `nodemailer` to send the email to your Gmail.
4. Success/failure messages are displayed via toast notifications.

---

## 🔐 Environment Variables

### Backend `.env`

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=yourapppassword
PORT=5000
