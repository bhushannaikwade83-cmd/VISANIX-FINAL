# 🎬 → 🌐 VISANEX + VISANIX WEBSITE Integration Plan

## ✅ CONFIRMED UNDERSTANDING

### Current Architecture (VISANEX)
```
Scene 1: Dream to Travel
Scene 2: Meet VisaNex
Scene 3: Document Verification
Scene 4: Visa Processing
Scene 5: Visa Approved
Scene 6: Airport
Scene 7: Welcome Abroad
Scene 8: Call-to-Action (CTA)
    ↓
[Book Consultation Modal]
[Apply Now → Email]
```

### NEW: After Scene 8 (VISANIX Website Starts)
```
Scene 8 → SCROLL DOWN/UP
    ↓
VISANIX WEBSITE PAGES APPEAR
├─ Home
├─ Our Values / Mission / Vision
├─ About Us
├─ Visa Services
├─ Destinations
├─ Apostille & Attestation
├─ Corporate & Travel Partners
├─ Trouvaille
├─ FAQ
├─ Contact Us
└─ Footer
```

### Navigation Flow
```
User Story:
1. Land on site
2. Scroll through 8 pinned scenes (VISANEX scroll-story)
3. Scene 8 = Final CTA (Book Consultation / Apply Now)
4. Continue scrolling DOWN → Website content begins (VISANIX pages)
5. Browse full website
6. Scroll UP → Goes back to scenes (smooth integration)
```

---

## 📋 BUILD PLAN (Sequential)

### Phase 1: Website Structure (BUILD FIRST) ✅
Create all 10 website pages with content as provided:

- [ ] **Page 1: Home** (Hero + Services + CARES + Final CTA)
- [ ] **Page 2: Our Values/Mission/Vision** (Mission + Vision + CARES Values + Commitment)
- [ ] **Page 3: About Us** (What we do + Approach + What Sets Us Apart + Trouvaille Connection)
- [ ] **Page 4: Visa Services** (Tourist/Business/Student/Reapplication + Support Details)
- [ ] **Page 5: Destinations** (Region cards + Featured destinations)
- [ ] **Page 6: Apostille & Attestation** (Services + Common Documents)
- [ ] **Page 7: Corporate & Travel Partners** (Corporate Support + Travel Partner Support)
- [ ] **Page 8: Trouvaille** (Travel services overview + Brand architecture)
- [ ] **Page 9: FAQ** (Q&A section)
- [ ] **Page 10: Contact Us** (Contact form + Details)
- [ ] **Footer** (Links + Disclaimer)

### Phase 2: React Component Structure
```
src/
├── pages/
│   ├── Home.jsx
│   ├── Values.jsx
│   ├── About.jsx
│   ├── VisaServices.jsx
│   ├── Destinations.jsx
│   ├── Apostille.jsx
│   ├── Corporate.jsx
│   ├── Trouvaille.jsx
│   ├── FAQ.jsx
│   └── Contact.jsx
├── components/
│   ├── Navigation.jsx (sticky header)
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Form.jsx
├── styles/
│   ├── pages.css
│   ├── components.css
│   └── animations.css
└── App.jsx (router + scene/page logic)
```

### Phase 3: Integration with Scroll Story
```
App.jsx Route Logic:
├─ Scroll 0-100% → Scene 1-8 (VISANEX scroll-story)
└─ Scroll 100%+ → Website pages (VISANIX website)

Smooth Transition:
- Scene 8 CTA button links stay functional
- Continue scrolling reveals next page
- Scroll up goes back to scenes
```

### Phase 4: Styling & Design System
- [ ] Define color palette (VisaNix brand)
- [ ] Typography scale
- [ ] Button styles
- [ ] Card components
- [ ] Form styling
- [ ] Responsive breakpoints (mobile/tablet/desktop)

### Phase 5: Features
- [ ] Navigation menu (sticky header)
- [ ] Contact form (auto-send to email)
- [ ] Destination filtering
- [ ] CTA buttons throughout
- [ ] Analytics tracking
- [ ] Mobile responsive

---

## 🏗️ Website Structure Details

### Key Sections

#### HOME PAGE
```
Hero Section
├─ "YOUR VISA JOURNEY, SIMPLIFIED."
├─ "Professional visa facilitation..."
├─ Buttons: [Start Your Visa Journey] [Explore Visa Services]
│
Introduction Section
├─ Why international travel matters
├─ What VisaNix does
│
Services Grid (6 cards)
├─ Visa Facilitation
├─ Documentation Support
├─ Visa Application Assistance
├─ Apostille Services
├─ Attestation Services
├─ Corporate/Travel Partner Support
│
CARES Values Section
├─ Customer First
├─ Accountable
├─ Reliable
├─ Empathetic
├─ Solution Driven
│
Final CTA
└─ [Get Visa Assistance]
```

#### ABOUT PAGE
```
Who We Are
├─ VisaNix is the visa division of Trouvaille
├─ Our approach (Clarity, Accuracy, Support)
├─ What sets us apart
└─ Connection with Trouvaille
```

#### VISA SERVICES
```
Visa Types
├─ Tourist Visa
├─ Business Visa
├─ Student Visa
├─ Visa Reapplication
│
Support Details (10 bullet points)
│
Important: Disclaimer about approvals
│
CTA: [Start Your Visa Journey]
```

#### DESTINATIONS
```
Regional Cards
├─ Europe
├─ North/South America
├─ Asia
├─ Middle East
├─ Australia & New Zealand
│
Featured Destinations
├─ USA (individual landing page)
├─ Canada (individual landing page)
├─ UK (individual landing page)
└─ Schengen (individual landing page)
│
CTA: [Can't Find Your Destination? Contact Us]
```

---

## 🎨 Brand Architecture Visualization

```
┌─────────────────────────────────────────────────────────┐
│                     TROUVAILLE                          │
│          Your Complete Travel Partner                   │
│  Holidays | Flights | Hotels | Insurance | Passport    │
└─────────────────────────────────────────────────────────┘
                           ↓
                    (Parent Brand)
                           ↓
┌──────────────────────────┬──────────────────────────────┐
│                          │                              │
│        VISANIX           │       TROUVAILLE SERVICES    │
│  Visa & Documentation    │      (Holiday/Travel)        │
│  Specialist              │                              │
├──────────────────────────┤                              │
│ • Visas                  │   • Holiday Packages         │
│ • Apostille              │   • Flights                  │
│ • Attestation            │   • Hotels                   │
│ • Documentation          │   • Travel Insurance         │
│ • Compliance             │   • Passport Services        │
└──────────────────────────┴──────────────────────────────┘
         ↓
    SCROLL STORY (8 Scenes)
         ↓
    WEBSITE CONTENT
```

---

## 💻 Technology Stack (Recommended)

### Frontend
- **React 18** (already in VISANEX)
- **React Router** (navigation between pages)
- **Vite** (build tool - already using)

### Styling
- **CSS Modules** or **Tailwind CSS** (modern approach)
- **GSAP** for animations (already using)
- **Lenis** for smooth scroll (already using)

### Forms
- **React Hook Form** or vanilla form handling
- **Email API** (Resend, SendGrid, or simple mailto)

### Database (Optional)
- **Supabase** (you already use this for FaceGuard)
- Store contact form submissions
- Track CTA analytics

### Analytics
- **Google Analytics 4**
- **Hotjar** (heatmaps)
- Track scroll depth, CTA clicks, conversions

---

## 📊 Implementation Timeline

| Phase | Task | Timeline | Status |
|-------|------|----------|--------|
| 1 | Create website pages structure | Week 1 | To Do |
| 2 | Build React components | Week 1-2 | To Do |
| 3 | Implement forms & CTAs | Week 2 | To Do |
| 4 | Styling & responsive design | Week 2-3 | To Do |
| 5 | Integration with scroll story | Week 3 | To Do |
| 6 | Testing & optimization | Week 3-4 | To Do |
| 7 | Deploy to production | Week 4 | To Do |

---

## 🔧 Integration Checklist

### Before Building
- [ ] Confirm all 10 page contents (approved by Christina/team)
- [ ] Finalize color palette (VisaNix brand colors)
- [ ] Decide on forms backend (email, Supabase, third-party)
- [ ] Set up domain & hosting (if not already done)

### While Building
- [ ] Build pages in isolation first
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Implement all CTAs with correct links
- [ ] Add analytics tracking code
- [ ] Test form submissions

### Before Launch
- [ ] Full cross-browser testing
- [ ] Mobile testing (iOS/Android)
- [ ] Scroll performance optimization
- [ ] SEO setup (meta tags, structured data)
- [ ] Analytics verification
- [ ] Contact form testing

---

## 📱 Responsive Breakpoints

```
Mobile:     < 640px   (Phone)
Tablet:     640-1024px (iPad)
Desktop:    > 1024px  (Desktop)
```

Each page optimized for all three.

---

## 🔗 Key Integrations

### Scene 8 → Website Transition
```jsx
// In App.jsx
if (scrollPosition > scene8End) {
  show(<Home />)  // Switch to website
} else {
  show(<ScrollStory />)  // Show scenes
}
```

### Forms → Email
```jsx
// Contact form submission
handleSubmit(data) → send email to info@visanix.in
```

### Navigation
```jsx
// Sticky header navigation
<Navigation>
  • Home
  • About
  • Visa Services
  • Destinations
  • Apostille
  • Corporate
  • Trouvaille
  • FAQ
  • Contact
</Navigation>
```

---

## ✨ Final Result

**User Experience:**
1. Land on site
2. See stunning scroll-story (8 scenes)
3. Scene 8 presents CTA options
4. Scroll down → Website content appears
5. Browse full VisaNix/Trouvaille information
6. Fill contact form or click CTAs
7. Easy conversion to customer

**One seamless journey from brand story → website.**

---

## 📝 Next Steps

**Confirm:**
1. ✅ Is this understanding correct?
2. ✅ Should we start building Phase 1 (website pages)?
3. ✅ Do we have final approval on all page content?
4. ✅ What's the timeline/deadline?

**Ready to build when you confirm! 🚀**

---

Generated: September 19, 2026 | Claude Haiku 4.5
