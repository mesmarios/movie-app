# Movie Reviews App — Πλάνο Υλοποίησης

**Stack:** (React (UI)+ typescript) + Node.js/Express (Backend) + MySQL (DB)

mporoume na xrisimopoihsoume redux gia state management

## Η Λογική της Εφαρμογής

Ο χρήστης κάνει login και βλέπει **μόνο τις δικές του** κριτικές (GET request φιλτραρισμένο by user, όχι όλες τις κριτικές όλων). Μπορεί να επιλέξει μια ταινία (π.χ. Inception), να βάλει βαθμολογία **1-10 αστέρια**, και να γράψει μια παράγραφο κριτικής.

Αυτό σημαίνει ότι χρειαζόμαστε **authentication** (πιθανότατα JWT) ώστε το backend να ξέρει ποιος ζητάει τα δεδομένα, και ένα endpoint που φιλτράρει τις κριτικές `by user_id`.

---

## Components για το React UI

Κάθε component σε δικό του `.js` αρχείο μέσα στο `src/components/`, καλούνται από το `App.js` που κάνει το routing (React Router).

### 1. `App.js`

Το main component. Εδώ στήνουμε το Router, τα routes (`/login`, `/dashboard`, κτλ) και το `AuthContext` Provider που τυλίγει όλη την εφαρμογή.

### 2. `AuthContext.js`

Όχι ακριβώς UI component, αλλά essential. Κρατάει το state του logged-in χρήστη (token, user info) και το κάνει available σε όλα τα components χωρίς prop drilling.

### 3. `Login.js`

Φόρμα login (email/username + password). Κάνει POST στο backend, αποθηκεύει το token (localStorage ή context) και κάνει redirect στο dashboard.

### 4. `Register.js`

Αν θέλεις εγγραφή νέου χρήστη (αν όχι, το προσπερνάμε προς το παρόν).

### 5. `Navbar.js`

Πάνω μπάρα με links, logout button, όνομα χρήστη. Bootstrap navbar component ταιριάζει ωραία εδώ.

### 6. `ProtectedRoute.js`

Wrapper component που ελέγχει αν υπάρχει token πριν επιτρέψει πρόσβαση σε private σελίδες (π.χ. dashboard). Αν δεν υπάρχει, redirect στο login.

### 7. `Dashboard.js` (ή `MyReviews.js`)

Η κεντρική σελίδα μετά το login. Κάνει το GET request για να φέρει μόνο τις κριτικές του συνδεδεμένου χρήστη, και τις εμφανίζει σε λίστα/grid μέσω του `ReviewCard`.

### 8. `ReviewCard.js`

Reusable component που παίρνει ως props μια κριτική (τίτλος ταινίας, αστέρια, παράγραφος) και την εμφανίζει. Ιδανικό σημείο για Tailwind ή Bootstrap card styling.

### 9. `StarRating.js`

Το πιο "τεχνικό" component. Reusable, controlled component (1-10 αστέρια) που δουλεύει και σε display mode (read-only) και σε interactive mode (ο χρήστης επιλέγει). Props: `rating`, `onChange`, `readOnly`.

### 10. `ReviewForm.js`

Η φόρμα για νέα κριτική: επιλογή ταινίας (dropdown/search), το `StarRating.js` ενσωματωμένο, textarea για την παράγραφο. Κάνει POST στο backend.

### 11. `MovieSearch.js` _(προαιρετικό)_

Αν θες να ψάχνεις ταινίες (π.χ. από OMDb API ή από δική σου DB), το ξεχωρίζουμε ως δικό του component.

### 12. `api.js`

Δεν είναι UI component — είναι το "service layer": ένα αρχείο με όλα τα axios/fetch calls (`login`, `getMyReviews`, `addReview` κτλ), ώστε να μη γράφεις fetch logic μέσα στα components.

---

## Προτεινόμενη Δομή Φακέλων

```
src/
  components/
    Navbar.js
    Login.js
    Register.js
    ProtectedRoute.js
    Dashboard.js
    ReviewCard.js
    StarRating.js
    ReviewForm.js
    MovieSearch.js
  context/
    AuthContext.js
  services/
    api.js
  App.js
```

---

## Styling (Bootstrap + Tailwind μαζί)

Χρησιμοποίησε **Bootstrap** για δομικά στοιχεία (navbar, grid layout, forms) και **Tailwind** για fine-tuning (spacing, colors, custom bits) πάνω σε custom components όπως το `StarRating`. Δεν είναι λάθος να συνυπάρχουν, απλά πρόσεξε να μη μπερδεύεσαι ποιο class system χρησιμοποιείς πού.

---

## Backend (θα αναλυθεί εκτενώς αργότερα)

Ενδεικτική δομή για όταν φτάσουμε εκεί:

```
server.js                        → entry point, express setup
config/db.js                     → σύνδεση με MySQL
routes/auth.js                   → auth endpoints
routes/reviews.js                → review endpoints
controllers/authController.js    → λογική auth
controllers/reviewController.js  → λογική reviews
middleware/authMiddleware.js     → έλεγχος JWT σε κάθε protected route
```
